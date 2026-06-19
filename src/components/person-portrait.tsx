"use client";

import { useState } from "react";

type PersonPortraitProps = {
  name: string;
  initials: string;
  src?: string;
};

export function PersonPortrait({
  name,
  initials,
  src,
}: PersonPortraitProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="portrait-fallback">{initials}</span>;
  }

  const resolvedSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;

  // The MVP stores reviewed portraits locally so the interface remains stable.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={resolvedSrc} alt={name} onError={() => setFailed(true)} />;
}
