"use client";

import {
  ArrowUpRight,
  Crosshair,
  GitCompareArrows,
  Info,
  ListFilter,
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
  allegedDirectory,
  mismatches,
  newlySurfaced,
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
};

type View = {
  x: number;
  y: number;
  scale: number;
};

type ExplorerMode = "map" | "mismatches" | "directory";

const relationKinds: RelationKind[] = [
  "dialog",
  "business",
  "political",
  "critical",
  "epstein",
  "media",
];

const WORLD_WIDTH = 1450;
const WORLD_HEIGHT = 900;
const MIN_SCALE = 0.42;
const MAX_SCALE = 2.4;

const positions: Record<string, Point> = {
  "peter-thiel": { x: 590, y: 350 },
  "elon-musk": { x: 820, y: 330 },
  "jeffrey-epstein": { x: 705, y: 540 },
  "auren-hoffman": { x: 350, y: 230 },
  "reid-hoffman": { x: 330, y: 470 },
  "jared-kushner": { x: 1080, y: 440 },
  "leonard-leo": { x: 1120, y: 220 },
  "joe-lonsdale": { x: 930, y: 165 },
  "chamath-palihapitiya": { x: 930, y: 635 },
  "eric-schmidt": { x: 465, y: 690 },
  "lawrence-summers": { x: 235, y: 700 },
  "peter-attia": { x: 675, y: 770 },
  "sam-harris": { x: 1060, y: 745 },
  "ezra-klein": { x: 1230, y: 590 },
  "bret-stephens": { x: 1260, y: 360 },
};

function clampScale(scale: number) {
  return Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale));
}

export function NetworkExplorer() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<{
    id: number;
    x: number;
    y: number;
    viewX: number;
    viewY: number;
  } | null>(null);
  const activePointersRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchRef = useRef<{
    distance: number;
    scale: number;
    worldX: number;
    worldY: number;
  } | null>(null);
  const [view, setView] = useState<View>({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<Person | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeKinds, setActiveKinds] = useState<Set<RelationKind>>(
    () => new Set(relationKinds),
  );
  const [showFilters, setShowFilters] = useState(false);
  const [mode, setMode] = useState<ExplorerMode>("map");
  const [directoryQuery, setDirectoryQuery] = useState("");

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
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const availableHeight = Math.max(360, rect.height - 130);
    const scale = clampScale(
      Math.min((rect.width - 36) / WORLD_WIDTH, availableHeight / WORLD_HEIGHT),
    );
    setView({
      x: (rect.width - WORLD_WIDTH * scale) / 2,
      y: 112 + (availableHeight - WORLD_HEIGHT * scale) / 2,
      scale,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => centerView();
    centerView();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [centerView]);

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

  function selectPerson(person: Person) {
    setSelected(person);
    setSearchOpen(false);
  }

  function zoomAt(clientX: number, clientY: number, factor: number) {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cursorX = clientX - rect.left;
    const cursorY = clientY - rect.top;
    setView((current) => ({
      x:
        cursorX -
        ((cursorX - current.x) / current.scale) *
          clampScale(current.scale * factor),
      y:
        cursorY -
        ((cursorY - current.y) / current.scale) *
          clampScale(current.scale * factor),
      scale: clampScale(current.scale * factor),
    }));
  }

  function zoomFromCenter(factor: number) {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, factor);
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
            <span>Power, proximity & public record</span>
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

      <nav className="mode-switcher glass" aria-label="Explorer views">
        <button
          type="button"
          className={mode === "map" ? "active" : ""}
          onClick={() => setMode("map")}
        >
          <Network size={13} />
          Map
        </button>
        <button
          type="button"
          className={mode === "mismatches" ? "active" : ""}
          onClick={() => setMode("mismatches")}
        >
          <GitCompareArrows size={13} />
          Mismatches
          <span>{mismatches.length}</span>
        </button>
        <button
          type="button"
          className={mode === "directory" ? "active" : ""}
          onClick={() => setMode("directory")}
        >
          <ListFilter size={13} />
          Directory
          <span>{allegedDirectory.length}</span>
        </button>
      </nav>

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
        className={`map-stage ${dragging ? "dragging" : ""} ${
          mode !== "map" ? "hidden-stage" : ""
        }`}
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          activePointersRef.current.set(event.pointerId, {
            x: event.clientX,
            y: event.clientY,
          });
          const pointers = [...activePointersRef.current.values()];
          if (pointers.length === 1) {
            pointerRef.current = {
              id: event.pointerId,
              x: event.clientX,
              y: event.clientY,
              viewX: view.x,
              viewY: view.y,
            };
          } else if (pointers.length === 2) {
            const rect = event.currentTarget.getBoundingClientRect();
            const midpointX = (pointers[0].x + pointers[1].x) / 2 - rect.left;
            const midpointY = (pointers[0].y + pointers[1].y) / 2 - rect.top;
            pinchRef.current = {
              distance: Math.hypot(
                pointers[1].x - pointers[0].x,
                pointers[1].y - pointers[0].y,
              ),
              scale: view.scale,
              worldX: (midpointX - view.x) / view.scale,
              worldY: (midpointY - view.y) / view.scale,
            };
            pointerRef.current = null;
          }
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!activePointersRef.current.has(event.pointerId)) return;
          activePointersRef.current.set(event.pointerId, {
            x: event.clientX,
            y: event.clientY,
          });
          const pointers = [...activePointersRef.current.values()];
          if (pointers.length === 2 && pinchRef.current) {
            const rect = event.currentTarget.getBoundingClientRect();
            const midpointX = (pointers[0].x + pointers[1].x) / 2 - rect.left;
            const midpointY = (pointers[0].y + pointers[1].y) / 2 - rect.top;
            const distance = Math.hypot(
              pointers[1].x - pointers[0].x,
              pointers[1].y - pointers[0].y,
            );
            const scale = clampScale(
              pinchRef.current.scale *
                (distance / pinchRef.current.distance),
            );
            setView({
              x: midpointX - pinchRef.current.worldX * scale,
              y: midpointY - pinchRef.current.worldY * scale,
              scale,
            });
            return;
          }
          if (!pointerRef.current || pointerRef.current.id !== event.pointerId)
            return;
          setView((current) => ({
            ...current,
            x: pointerRef.current!.viewX + event.clientX - pointerRef.current!.x,
            y: pointerRef.current!.viewY + event.clientY - pointerRef.current!.y,
          }));
        }}
        onPointerUp={(event) => {
          activePointersRef.current.delete(event.pointerId);
          pointerRef.current = null;
          pinchRef.current = null;
          setDragging(activePointersRef.current.size > 0);
        }}
        onPointerCancel={(event) => {
          activePointersRef.current.delete(event.pointerId);
          pointerRef.current = null;
          pinchRef.current = null;
          setDragging(activePointersRef.current.size > 0);
        }}
        onWheel={(event) => {
          event.preventDefault();
          zoomAt(event.clientX, event.clientY, Math.exp(-event.deltaY * 0.0014));
        }}
        onDoubleClick={(event) => zoomAt(event.clientX, event.clientY, 1.35)}
      >
        <div
          className="map-world"
          style={{
            width: WORLD_WIDTH,
            height: WORLD_HEIGHT,
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
          }}
        >
          <svg
            className="edge-layer"
            viewBox={`0 0 ${WORLD_WIDTH} ${WORLD_HEIGHT}`}
            aria-hidden="true"
          >
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
                    relation.kind === "epstein"
                      ? "3 5"
                      : relation.kind === "critical"
                        ? "2 5"
                        : relation.status === "reported"
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

            return (
              <button
                type="button"
                key={person.id}
                className={`person-node ${selectedNode ? "selected" : ""}`}
                style={{
                  left: point.x,
                  top: point.y,
                  opacity: dimmed ? 0.24 : 1,
                  "--node-size": `${size}px`,
                  "--node-color": person.id === "jeffrey-epstein"
                    ? "#686d75"
                    : "#a6abb2",
                } as React.CSSProperties}
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
              </button>
            );
          })}
        </div>
      </div>

      {mode === "mismatches" ? (
        <section className="story-view">
          <header className="story-hero">
            <span className="story-kicker">Public conflict · private proximity</span>
            <h1>The room is more interesting than a single ideology.</h1>
            <p>
              People can be real rivals and still preserve access to the same
              private networks. These cards separate the visible feud from the
              quieter overlap underneath it.
            </p>
          </header>
          <aside className="editorial-take glass">
            <span>My read</span>
            <div>
              <h2>A private switchboard, not a single command center.</h2>
              <p>
                The evidence supports a curated social infrastructure that
                maps status, ideology, relationships, and usefulness. It does
                not support treating every listed person as part of one
                coordinated political conspiracy.
              </p>
            </div>
            <div>
              <h2>The secrecy changes the power of ordinary networking.</h2>
              <p>
                Off-the-record access lets rivals exchange information,
                introductions, and legitimacy without the reputational cost of
                being seen together. That is consequential even when no secret
                agreement exists.
              </p>
            </div>
            <div>
              <h2>The ranking system is the sharpest clue.</h2>
              <p>
                If reporting on internal grading is accurate, Dialog is not
                merely a salon. It is an active model of elite social capital:
                who matters, who knows whom, and who is worth placing in a
                room.
              </p>
            </div>
          </aside>
          <section className="scandal-brief">
            <article>
              <span>2006</span>
              <strong>Founded by Peter Thiel and Auren Hoffman</strong>
              <p>
                Built as an invitation-only, bipartisan, off-the-record forum
                for powerful people across technology, politics, finance,
                academia, media, and culture.
              </p>
            </article>
            <article>
              <span>Internal system</span>
              <strong>Money, fame, relationships, and “value-add”</strong>
              <p>
                WIRED reports that leaked files grade participants, track
                political leanings and relationships, influence seating and
                introductions, and help decide who pays or returns.
              </p>
            </article>
            <article>
              <span>2025</span>
              <strong>A permanent campus near Washington</strong>
              <p>
                Reporting says Dialog purchased or pursued land in Northern
                Virginia for a permanent hub near the institutions many
                participants influence.
              </p>
            </article>
            <article>
              <span>2026</span>
              <strong>222 registrants for an Ireland retreat</strong>
              <p>
                A newer list reportedly distinguishes active members and
                guests—evidence that the supplied 113-name directory is only a
                partial, mixed-status view.
              </p>
            </article>
          </section>
          <div className="mismatch-grid">
            {mismatches.map((item, index) => (
              <motion.article
                className="mismatch-card glass"
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.055 }}
              >
                <div className="mismatch-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2>{item.title}</h2>
                <div className="mismatch-columns">
                  <div>
                    <span>In public</span>
                    <p>{item.publicStory}</p>
                  </div>
                  <div>
                    <span>Underneath</span>
                    <p>{item.privateOverlap}</p>
                  </div>
                </div>
                <p className="mismatch-take">{item.interpretation}</p>
                <footer>
                  <span className={`evidence-word ${item.status}`}>
                    {item.status}
                  </span>
                  <div>
                    {item.sources.map((source) => (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        key={source.url}
                        aria-label={`Open ${source.title}`}
                      >
                        {source.publisher}
                        <ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                </footer>
              </motion.article>
            ))}
          </div>
        </section>
      ) : null}

      {mode === "directory" ? (
        <section className="story-view directory-view">
          <header className="story-hero directory-hero">
            <div>
              <span className="story-kicker">Alleged exposed directory</span>
              <h1>{allegedDirectory.length} names in the supplied record.</h1>
              <p>
                A directory entry may represent a member, former attendee,
                speaker, guest, or another person tracked by Dialog. It is not
                proof of agreement, friendship, or wrongdoing.
              </p>
            </div>
            <label className="directory-search">
              <Search size={15} />
              <input
                value={directoryQuery}
                onChange={(event) => setDirectoryQuery(event.target.value)}
                placeholder="Filter the directory"
              />
            </label>
          </header>
          <div className="directory-update glass">
            <span>New reporting</span>
            <p>
              A separate 2026 retreat list reportedly contains{" "}
              <strong>222 registrants</strong>, with attendee types including
              “active member” and “guest.” The 113 entries below are the
              supplied leaked directory—not a complete current membership
              roll.
            </p>
            <a
              href="https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/"
              target="_blank"
              rel="noreferrer"
            >
              Read the reporting <ArrowUpRight size={11} />
            </a>
          </div>
          <section className="newly-surfaced">
            <div className="newly-heading">
              <span>Outside the original 113</span>
              <strong>{newlySurfaced.length} publicly surfaced names</strong>
              <p>
                These come from reporting on current registration and dossier
                data. The full 222-person list has not been published.
              </p>
            </div>
            <div className="newly-list">
              {newlySurfaced.map((entry) => (
                <article key={entry.name}>
                  <span>{entry.status}</span>
                  <strong>{entry.name}</strong>
                  <p>{entry.note}</p>
                </article>
              ))}
            </div>
          </section>
          <div className="directory-grid">
            {allegedDirectory
              .filter((name) =>
                name.toLowerCase().includes(directoryQuery.toLowerCase()),
              )
              .map((name, index) => {
                const profiled = people.find((person) => person.name === name);
                return (
                  <button
                    type="button"
                    className="directory-person"
                    key={name}
                    onClick={() => {
                      if (!profiled) return;
                      setMode("map");
                      selectPerson(profiled);
                    }}
                    disabled={!profiled}
                  >
                    <span>{String(index + 1).padStart(3, "0")}</span>
                    <strong>{name}</strong>
                    <em>{profiled ? "profiled" : "research queued"}</em>
                  </button>
                );
              })}
          </div>
        </section>
      ) : null}

      <div
        className="map-legend glass"
        style={{ display: mode === "map" ? undefined : "none" }}
      >
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

      {mode === "map" ? (
        <span className="mobile-hint">drag · pinch/scroll · tap a face</span>
      ) : null}

      <div
        className="zoom-controls"
        style={{ display: mode === "map" ? undefined : "none" }}
      >
        <button
          className="icon-button glass"
          type="button"
          onClick={() => zoomFromCenter(1.25)}
          aria-label="Zoom in"
        >
          <Plus size={14} />
        </button>
        <button
          className="icon-button glass"
          type="button"
          onClick={() => zoomFromCenter(0.8)}
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
