"use client";

import dynamic from "next/dynamic";

const TargetCursor = dynamic(() => import("./TargetCursor"), { ssr: false });

export default function CursorWrapper() {
  return <TargetCursor targetSelector=".cursor-target" />;
}
