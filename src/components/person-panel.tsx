"use client";

import { ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  relationColors,
  statusColors,
  type Person,
  type Relation,
} from "@/data/network";
import { PersonPortrait } from "@/components/person-portrait";

type PersonPanelProps = {
  person: Person | null;
  relations: Relation[];
  people: Person[];
  onClose: () => void;
  onSelect: (person: Person) => void;
};

const statusLabels = {
  confirmed: "confirmed",
  reported: "reported",
  disputed: "disputed",
  speculative: "speculative",
  "none-found": "no reliable evidence found",
};

export function PersonPanel({
  person,
  relations,
  people,
  onClose,
  onSelect,
}: PersonPanelProps) {
  if (!person) return null;

  const related = relations.filter(
    (relation) =>
      relation.source === person.id || relation.target === person.id,
  );

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        className="detail-panel glass"
        key={person.id}
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 28 }}
        transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
        aria-label={`${person.name} profile`}
      >
        <div className="panel-scroll">
          <header className="panel-head">
            <div className="panel-photo">
              <PersonPortrait
                name={person.name}
                initials={person.initials}
                src={person.portrait}
              />
            </div>
            <div>
              <div className="eyebrow">{person.category}</div>
              <h2 className="panel-title">{person.name}</h2>
              <p className="panel-role">{person.role}</p>
            </div>
            <button
              className="icon-button panel-close"
              onClick={onClose}
              type="button"
              aria-label="Close profile"
            >
              <X size={15} />
            </button>
          </header>

          <div className="confidence-row">
            <span
              className="status-chip"
              style={{
                "--chip-color": statusColors[person.dialogStatus],
              } as React.CSSProperties}
            >
              Dialog: {statusLabels[person.dialogStatus]}
            </span>
            <span
              className="status-chip"
              style={{
                "--chip-color": statusColors[person.epsteinStatus],
              } as React.CSSProperties}
            >
              Epstein: {statusLabels[person.epsteinStatus]}
            </span>
          </div>

          <section className="panel-section">
            <h3 className="section-label">Who they are</h3>
            <p className="panel-copy">{person.summary}</p>
          </section>

          <section className="panel-section">
            <h3 className="section-label">
              Political tendency
              <span>{person.tendency < 45 ? "left / liberal" : person.tendency > 60 ? "right" : "mixed"}</span>
            </h3>
            <p className="panel-copy">{person.politics}</p>
            <div className="tendency-bar" aria-hidden="true">
              <span
                className="tendency-marker"
                style={{ left: `${person.tendency}%` }}
              />
            </div>
            <div className="tendency-labels">
              <span>left</span>
              <span>mixed / institutional</span>
              <span>right</span>
            </div>
          </section>

          <section className="panel-section">
            <h3 className="section-label">
              Relationships <span>{related.length}</span>
            </h3>
            {related.map((relation) => {
              const otherId =
                relation.source === person.id
                  ? relation.target
                  : relation.source;
              const other = people.find((candidate) => candidate.id === otherId);
              if (!other) return null;
              return (
                <button
                  type="button"
                  className="relation-card"
                  key={relation.id}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    "--relation-color": relationColors[relation.kind],
                  } as React.CSSProperties}
                  onClick={() => onSelect(other)}
                >
                  <span className="relation-top">
                    <span className="relation-name">{other.name}</span>
                    <span className="relation-type">{relation.label}</span>
                  </span>
                  <p>{relation.detail}</p>
                </button>
              );
            })}
          </section>

          {person.evidence.length ? (
            <section className="panel-section">
              <h3 className="section-label">Evidence notes</h3>
              {person.evidence.map((item) => (
                <article className="evidence-card" key={`${item.label}-${item.detail}`}>
                  <div className="evidence-top">
                    <strong className="relation-name">{item.label}</strong>
                    <span
                      className="status-chip"
                      style={{
                        "--chip-color": statusColors[item.status],
                      } as React.CSSProperties}
                    >
                      {statusLabels[item.status]}
                    </span>
                  </div>
                  <p>{item.detail}</p>
                  {item.sourceUrl ? (
                    <a
                      className="source-link"
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source <ExternalLink size={10} />
                    </a>
                  ) : null}
                </article>
              ))}
            </section>
          ) : null}

          {person.quotes.length ? (
            <section className="panel-section">
              <h3 className="section-label">Said about others</h3>
              {person.quotes.map((quote) => (
                <article className="quote-card" key={`${quote.date}-${quote.text}`}>
                  <blockquote>“{quote.text}”</blockquote>
                  <footer>
                    About {quote.about} · {quote.date}
                    <br />
                    {quote.context}
                  </footer>
                  <a
                    className="source-link"
                    href={quote.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source <ExternalLink size={10} />
                  </a>
                </article>
              ))}
            </section>
          ) : null}

          {person.sources.length ? (
            <section className="panel-section">
              <h3 className="section-label">
                Sources <span>{person.sources.length}</span>
              </h3>
              <div className="source-list">
                {person.sources.map((source, index) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="source-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      {source.title} · {source.publisher}
                      {source.date ? ` · ${source.date}` : ""}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section className="panel-section">
            <p className="method-note">
              Labels describe the evidence, not moral innocence or guilt.
              Association, attendance, correspondence, and ideological overlap
              are different claims. Where the record is thin, the map says so.
            </p>
          </section>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
