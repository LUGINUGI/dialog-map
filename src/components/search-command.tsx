"use client";

import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import type { Person } from "@/data/network";
import { PersonPortrait } from "@/components/person-portrait";

type SearchCommandProps = {
  open: boolean;
  people: Person[];
  onClose: () => void;
  onSelect: (person: Person) => void;
};

export function SearchCommand({
  open,
  people,
  onClose,
  onSelect,
}: SearchCommandProps) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return people;
    return people.filter((person) =>
      [person.name, person.role, person.category, person.politics]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [people, query]);

  useEffect(() => {
    if (!open) return;
    window.setTimeout(() => inputRef.current?.focus(), 60);
  }, [open]);

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlighted((value) => Math.min(value + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlighted((value) => Math.max(value - 1, 0));
    }
    if (event.key === "Enter" && results[highlighted]) {
      onSelect(results[highlighted]);
    }
    if (event.key === "Escape") onClose();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            className="search-dialog glass"
            role="dialog"
            aria-label="Search people"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="search-input-wrap">
              <Search size={18} color="#777c78" />
              <input
                ref={inputRef}
                className="search-input"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setHighlighted(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search people, roles, politics…"
                aria-label="Search people"
              />
              <button
                className="icon-button"
                type="button"
                onClick={onClose}
                aria-label="Close search"
              >
                <X size={15} />
              </button>
            </div>
            <div className="search-results">
              {results.length ? (
                results.map((person, index) => (
                  <button
                    type="button"
                    className={`search-result ${
                      index === highlighted ? "highlighted" : ""
                    }`}
                    key={person.id}
                    onMouseEnter={() => setHighlighted(index)}
                    onClick={() => onSelect(person)}
                  >
                    <span className="result-photo">
                      <PersonPortrait
                        name={person.name}
                        initials={person.initials}
                        src={person.portrait}
                      />
                    </span>
                    <span className="result-copy">
                      <strong>{person.name}</strong>
                      <span>{person.role}</span>
                    </span>
                    <span className="result-tag">{person.category}</span>
                  </button>
                ))
              ) : (
                <div className="empty-state">No one matches that search.</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
