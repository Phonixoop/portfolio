"use client";

import React, { useRef } from "react";
import { AudioWave } from "~/app/ui/svgs/audio-wave";
import { AudioWave2 } from "~/app/ui/svgs/audio-wave/v2";

export default function AudioWaveContainer({
  className,
}: {
  className: string;
}) {
  const audioWaveContainerRef = useRef<any>(null);
  return (
    <div
      className="flex h-full w-full items-start justify-center"
      ref={audioWaveContainerRef}
    >
      <AudioWave2 containerRef={audioWaveContainerRef} className={className} />
    </div>
  );
}
