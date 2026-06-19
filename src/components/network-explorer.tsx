"use client";

import {
  Crosshair,
  Info,
  Minus,
  Network,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  people,
  relations,
  relationColors,
  type Person,
  type RelationKind,
} from "@/data/network";
import { LiquidBackdrop } from "@/components/liquid-backdrop";
import { PersonPanel } from "@/components/person-panel";
import { PersonPortrait } from "@/components/person-portrait";
import { SearchCommand } from "@/components/search-command";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type View = {
  x: number;
  y: number;
  scale: number;
};

const relationKinds: RelationKind[] = [
  "dialog",
  "business",
  "political",
  "critical",
  "epstein",
  "media",
];

function initialPoints(width: number, height: number): Record<string, Point> {
  const centerX = width / 2;
  const centerY = height / 2 + 16;
  const fixed: Record<string, [number, number]> = {
    "peter-thiel": [centerX - 98, centerY - 28],
    "elon-musk": [centerX + 94, centerY - 34],
    "jeffrey-epstein": [centerX + 3, centerY + 116],
    "auren-hoffman": [centerX - 245, centerY - 105],
    "reid-hoffman": [centerX - 257, centerY + 84],
    "jared-kushner": [centerX + 248, centerY + 83],
  };

  return Object.fromEntries(
    people.map((person, index) => {
      if (fixed[person.id]) {
        const [x, y] = fixed[person.id];
        return [person.id, { x, y, vx: 0, vy: 0 }];
      }
      const orbitIndex = index - Object.keys(fixed).length;
      const angle = (orbitIndex / Math.max(1, people.length - 6)) * Math.PI * 2 - 0.5;
      const radiusX = Math.min(width * 0.36, 470);
      const radiusY = Math.min(height * 0.34, 310);
      return [
        person.id,
        {
          x: centerX + Math.cos(angle) * radiusX,
          y: centerY + Math.sin(angle) * radiusY,
          vx: 0,
          vy: 0,
        },
      ];
    }),
  );
}

export function NetworkExplorer() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Record<string, Point>>({});
  const animationRef = useRef<number | null>(null);
  const pointerRef = useRef<{
    x: number;
    y: number;
    viewX: number;
    viewY: number;
  } | null>(null);
  const [positions, setPositions] = useState<Record<string, Point>>({});
  const [view, setView] = useState<View>({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<Person | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeKinds, setActiveKinds] = useState<Set<RelationKind>>(
    () => new Set(relationKinds),
  );
  const [showFilters, setShowFilters] = useState(false);

  const relatedIds = useMemo(() => {
    if (!selected) return new Set<string>();
    return new Set(
      relations
        .filter(
          (relation) =>
            relation.source === selected.id || relation.target === selected.id,
        )
        .flatMap((relation) => [relation.source, relation.target]),
    );
  }, [selected]);

  const centerView = useCallback(() => {
    const width = stageRef.current?.getBoundingClientRect().width ?? 820;
    setView({
      x: width < 820 ? (width - 820) / 2 : 0,
      y: 0,
      scale: 1,
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      const rect = stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      const simulationWidth = Math.max(rect.width, 820);
      const next = initialPoints(simulationWidth, rect.height);
      pointsRef.current = next;
      setPositions({ ...next });
      setView((current) => ({
        ...current,
        x: rect.width < 820 ? (rect.width - simulationWidth) / 2 : 0,
        y: 0,
      }));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSelected(null);
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    let last = performance.now();
    const animate = (time: number) => {
      const rect = stageRef.current?.getBoundingClientRect();
      const current = pointsRef.current;
      if (!rect || !Object.keys(current).length) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      const dt = Math.min(1.8, (time - last) / 16.67);
      last = time;
      const ids = people.map((person) => person.id);
      const simulationWidth = Math.max(rect.width, 820);
      const centerX = simulationWidth / 2;
      const centerY = rect.height / 2 + 20;

      for (let i = 0; i < ids.length; i += 1) {
        const a = current[ids[i]];
        if (!a) continue;
        for (let j = i + 1; j < ids.length; j += 1) {
          const b = current[ids[j]];
          if (!b) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distanceSquared = Math.max(900, dx * dx + dy * dy);
          const distance = Math.sqrt(distanceSquared);
          const force = 2050 / distanceSquared;
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;
          a.vx -= fx * dt;
          a.vy -= fy * dt;
          b.vx += fx * dt;
          b.vy += fy * dt;
        }
      }

      relations.forEach((relation) => {
        const a = current[relation.source];
        const b = current[relation.target];
        if (!a || !b) return;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
        const ideal = relation.kind === "dialog" ? 220 : relation.kind === "epstein" ? 250 : 195;
        const pull = (distance - ideal) * 0.00052;
        const fx = (dx / distance) * pull;
        const fy = (dy / distance) * pull;
        a.vx += fx * dt;
        a.vy += fy * dt;
        b.vx -= fx * dt;
        b.vy -= fy * dt;
      });

      people.forEach((person) => {
        const point = current[person.id];
        if (!point) return;
        const centerStrength =
          person.centrality > 0.9 ? 0.0018 : 0.00034;
        point.vx += (centerX - point.x) * centerStrength * dt;
        point.vy += (centerY - point.y) * centerStrength * dt;
        point.vx *= 0.92;
        point.vy *= 0.92;
        point.x += point.vx * dt;
        point.y += point.vy * dt;
        point.x = Math.max(70, Math.min(simulationWidth - 70, point.x));
        point.y = Math.max(116, Math.min(rect.height - 80, point.y));
      });

      setPositions(
        Object.fromEntries(
          Object.entries(current).map(([id, point]) => [id, { ...point }]),
        ),
      );
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  function selectPerson(person: Person) {
    setSelected(person);
    setSearchOpen(false);
  }

  function zoom(delta: number) {
    setView((current) => ({
      ...current,
      scale: Math.max(0.7, Math.min(1.7, current.scale + delta)),
    }));
  }

  function toggleKind(kind: RelationKind) {
    setActiveKinds((current) => {
      const next = new Set(current);
      if (next.has(kind)) next.delete(kind);
      else next.add(kind);
      return next;
    });
  }

  return (
    <main className="app-shell">
      <div className="grid-field" />
      <LiquidBackdrop />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">
            <Network size={17} />
          </span>
          <span className="brand-copy">
            <strong>The Dialog Map</strong>
            <span>15-person research prototype · updated Jun 2026</span>
          </span>
        </div>

        <button
          type="button"
          className="search-trigger"
          onClick={() => setSearchOpen(true)}
        >
          <Search size={15} />
          <span>Search people, roles, politics…</span>
          <kbd>⌘ K</kbd>
        </button>

        <div className="header-actions">
          <button
            type="button"
            className={`filter-pill ${showFilters ? "active" : ""}`}
            onClick={() => setShowFilters((value) => !value)}
          >
            <SlidersHorizontal size={13} />
            Evidence layers
          </button>
          <a
            className="icon-button"
            href="https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/"
            target="_blank"
            rel="noreferrer"
            aria-label="Read source reporting"
          >
            <Info size={14} />
          </a>
        </div>
      </header>

      {showFilters ? (
        <motion.div
          className="glass"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            zIndex: 35,
            top: 68,
            right: 18,
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            width: 310,
            padding: 10,
            borderRadius: 15,
          }}
        >
          {relationKinds.map((kind) => (
            <button
              type="button"
              className={`filter-pill ${activeKinds.has(kind) ? "active" : ""}`}
              key={kind}
              onClick={() => toggleKind(kind)}
            >
              <span
                className="legend-dot"
                style={{
                  "--legend": relationColors[kind],
                } as React.CSSProperties}
              />
              {kind}
            </button>
          ))}
        </motion.div>
      ) : null}

      <div
        ref={stageRef}
        className={`map-stage ${dragging ? "dragging" : ""}`}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          pointerRef.current = {
            x: event.clientX,
            y: event.clientY,
            viewX: view.x,
            viewY: view.y,
          };
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!pointerRef.current) return;
          setView((current) => ({
            ...current,
            x:
              pointerRef.current!.viewX +
              event.clientX -
              pointerRef.current!.x,
            y:
              pointerRef.current!.viewY +
              event.clientY -
              pointerRef.current!.y,
          }));
        }}
        onPointerUp={() => {
          pointerRef.current = null;
          setDragging(false);
        }}
        onWheel={(event) => {
          event.preventDefault();
          zoom(event.deltaY > 0 ? -0.08 : 0.08);
        }}
      >
        <div
          className="map-world"
          style={{
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
          }}
        >
          <svg className="edge-layer" aria-hidden="true">
            {relations.map((relation) => {
              const start = positions[relation.source];
              const end = positions[relation.target];
              if (!start || !end || !activeKinds.has(relation.kind)) return null;
              const active =
                selected &&
                (relation.source === selected.id ||
                  relation.target === selected.id);
              const dimmed = selected && !active;
              return (
                <line
                  key={relation.id}
                  className={`edge-line ${active ? "active" : ""} ${
                    dimmed ? "dimmed" : ""
                  }`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={relationColors[relation.kind]}
                  strokeWidth={relation.status === "confirmed" ? 1.05 : 0.8}
                  strokeDasharray={
                    relation.status === "reported"
                      ? "5 5"
                      : relation.status === "disputed"
                        ? "2 6"
                        : undefined
                  }
                  opacity={relation.kind === "dialog" ? 0.42 : 0.3}
                />
              );
            })}
          </svg>

          {people.map((person) => {
            const point = positions[person.id];
            if (!point) return null;
            const selectedNode = selected?.id === person.id;
            const dimmed = selected && !relatedIds.has(person.id);
            const size = 62 + person.centrality * 40;
            const color =
              person.id === "jeffrey-epstein"
                ? relationColors.epstein
                : person.dialogStatus === "confirmed"
                  ? relationColors.dialog
                  : person.tendency > 60
                    ? "#ff9275"
                    : person.tendency < 45
                      ? "#8fb8ff"
                      : "#aeb2ae";

            return (
              <motion.button
                type="button"
                key={person.id}
                className={`person-node ${selectedNode ? "selected" : ""}`}
                style={{
                  left: point.x,
                  top: point.y,
                  opacity: dimmed ? 0.24 : 1,
                  "--node-size": `${size}px`,
                  "--node-color": color,
                } as React.CSSProperties}
                animate={{ scale: selectedNode ? 1.08 : 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 26 }}
                onClick={(event) => {
                  event.stopPropagation();
                  selectPerson(person);
                }}
                aria-label={`Open ${person.name}`}
              >
                <span className="portrait">
                  <PersonPortrait
                    name={person.name}
                    initials={person.initials}
                    src={person.portrait}
                  />
                </span>
                <span className="node-ring" />
                <span className="node-label">
                  <strong>{person.name}</strong>
                  <span>{person.category}</span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="map-legend glass">
        {relationKinds.map((kind) => (
          <span className="legend-item" key={kind}>
            <span
              className="legend-dot"
              style={{
                "--legend": relationColors[kind],
              } as React.CSSProperties}
            />
            {kind}
          </span>
        ))}
      </div>

      <span className="mobile-hint">drag · pinch/scroll · tap a face</span>

      <div className="zoom-controls">
        <button
          className="icon-button glass"
          type="button"
          onClick={() => zoom(0.15)}
          aria-label="Zoom in"
        >
          <Plus size={14} />
        </button>
        <button
          className="icon-button glass"
          type="button"
          onClick={() => zoom(-0.15)}
          aria-label="Zoom out"
        >
          <Minus size={14} />
        </button>
        <button
          className="icon-button glass"
          type="button"
          onClick={centerView}
          aria-label="Reset map"
        >
          <Crosshair size={14} />
        </button>
      </div>

      <PersonPanel
        person={selected}
        people={people}
        relations={relations}
        onClose={() => setSelected(null)}
        onSelect={selectPerson}
      />

      <SearchCommand
        key={searchOpen ? "open" : "closed"}
        open={searchOpen}
        people={people}
        onClose={() => setSearchOpen(false)}
        onSelect={selectPerson}
      />
    </main>
  );
}
