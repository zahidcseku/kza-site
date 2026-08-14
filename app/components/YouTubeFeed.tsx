import { fetchYouTubeFeed } from "@/lib/sanity.queries";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

// Sanity-driven coverflow of YouTube videos. Renders nothing until the
// editor adds a "YouTube Reel" document with at least one video.
export async function YouTubeFeed() {
  const data = await fetchYouTubeFeed();
  const videos = data?.videos ?? [];
  if (!data || videos.length === 0) return null;

  const slides = videos.map((v) => ({
    src: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
    alt: v.title,
    title: v.title,
  }));

  return (
    <section className="youtube">
      <div className="youtube-head">
        {data.heading && <h2>{data.heading}</h2>}
        {data.body && <p>{data.body}</p>}
      </div>
      <div className="youtube-coverflow">
        <CoverflowCarousel
          slides={slides}
          cardWidth="clamp(200px, 24vw, 300px)"
          showCaption
          showNavigation
          label="YouTube reel"
        />
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
