"use client";

import { useState } from "react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import type { YouTubeVideo } from "@/lib/sanity.queries";

const thumb = (videoId: string) =>
  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

// Client shell around the coverflow: tapping a card centers it and swaps
// its thumbnail for a playing (nocookie) embed — inline playback, one
// video at a time. Tapping another card moves the playback there.
export function YouTubeCarousel({ videos }: { videos: YouTubeVideo[] }) {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <CoverflowCarousel
      label="YouTube reel"
      cardWidth="clamp(200px, 24vw, 300px)"
      showCaption
      showNavigation
      slides={videos.map((v) => ({
        src: thumb(v.videoId),
        alt: v.title,
        title: v.title,
      }))}
      onActivate={(index) => setPlaying(index)}
      renderMedia={(index) =>
        playing === index ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videos[index].videoId}?autoplay=1&rel=0`}
            title={videos[index].title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb(videos[index].videoId)}
            alt={videos[index].title}
            draggable={false}
            className="h-full w-full select-none object-cover"
          />
        )
      }
    />
  );
}
