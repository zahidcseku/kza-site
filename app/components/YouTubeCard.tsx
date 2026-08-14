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
            <span className="youtube-badge" aria-hidden="true">
              <svg className="youtube-badge-ring" viewBox="0 0 200 200">
                <defs>
                  <path
                    id={`yt-arc-${videoId}`}
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    fill="none"
                  />
                </defs>
                <text className="youtube-badge-text">
                  <textPath href={`#yt-arc-${videoId}`} startOffset="0">
                    KZ ARCHITECTS · KZ ARCHITECTS ·&nbsp;
                  </textPath>
                </text>
              </svg>
              <span className="youtube-badge-core">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </>
        )}
      </button>
      <div className="youtube-card-title">{title}</div>
    </div>
  );
}
