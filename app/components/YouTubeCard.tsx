"use client";

import { useState } from "react";
import Image from "next/image";

type YouTubeCardProps = {
  videoId: string;
  title: string;
};

// One filmstrip cell. Shows the YouTube thumbnail until clicked, then
// swaps in a privacy-friendly (nocookie) autoplaying iframe. Keeping the
// iframe out of the initial render avoids loading N embeds up front.
export function YouTubeCard({ videoId, title }: YouTubeCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="youtube-card">
      <button
        type="button"
        className="youtube-card-media"
        onClick={() => setPlaying(true)}
        aria-label={`Play: ${title}`}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              sizes="(max-width: 640px) 78vw, 460px"
              className="youtube-thumb"
            />
            <span className="youtube-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </>
        )}
      </button>
      <div className="youtube-card-title">{title}</div>
    </div>
  );
}
