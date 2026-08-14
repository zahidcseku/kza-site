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
        {data.eyebrow && <span className="eyebrow">{data.eyebrow}</span>}
        {data.heading && <h2>{data.heading}</h2>}
        {data.body && <p>{data.body}</p>}
      </div>
      <div className="youtube-track">
        {videos.map((v) => (
          <YouTubeCard key={v.videoId} videoId={v.videoId} title={v.title} />
        ))}
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
