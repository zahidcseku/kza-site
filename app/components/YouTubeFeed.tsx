import { fetchYouTubeFeed } from "@/lib/sanity.queries";
import { YouTubeCard } from "./YouTubeCard";

// Sanity-driven horizontal filmstrip of YouTube videos. Renders nothing
// until the editor adds a "YouTube Reel" document with at least one video,
// so the homepage stays clean before content exists.
export async function YouTubeFeed() {
  const data = await fetchYouTubeFeed();
  const videos = data?.videos ?? [];
  if (!data || videos.length === 0) return null;

  return (
    <section className="youtube">
      <div className="youtube-head">
        {data.heading && <h2>{data.heading}</h2>}
        {data.body && <p>{data.body}</p>}
      </div>
      <div className="youtube-track">
        {/* The list is rendered twice so the marquee can loop seamlessly —
            the animation shifts by exactly one set (half the strip). */}
        <div className="youtube-marquee">
          {[...videos, ...videos].map((v, i) => (
            <YouTubeCard key={`${v.videoId}-${i}`} videoId={v.videoId} title={v.title} />
          ))}
        </div>
      </div>
      {data.channelUrl && (
        <div className="youtube-foot">
          <a className="link" href={data.channelUrl} target="_blank" rel="noreferrer">
            Watch on YouTube →
          </a>
        </div>
      )}
    </section>
  );
}
