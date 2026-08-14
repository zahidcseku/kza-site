import { fetchYouTubeFeed } from "@/lib/sanity.queries";
import { YouTubeCarousel } from "./YouTubeCarousel";

// Sanity-driven coverflow of YouTube videos. Renders nothing until the
// editor adds a "YouTube Reel" document with at least one video.
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
      <div className="youtube-coverflow">
        <YouTubeCarousel videos={videos} />
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
