import { cnScoped } from "@styles/cssUtils";

import styles from "./LazyYoutubeVideo.module.scss";

type LazyYoutubeVideoProps = {
  videoId: string;
  title: string;
  width?: string;
  height?: string;
};

const LazyYoutubeVideo: React.FC<LazyYoutubeVideoProps> = ({
  videoId,
  title,
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <iframe
      // eslint-disable-next-line max-len
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={cnScoped(styles)(
        "mb-2 z-10",
        styles._videoPlayer,
        isLoading ? "bg-dark-shades animate-pulse" : ""
      )}
      height={height}
      loading="lazy"
      onLoad={() => setIsLoading(false)}
      referrerPolicy="strict-origin-when-cross-origin"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      width={width}
    />
  );
};

export default LazyYoutubeVideo;
