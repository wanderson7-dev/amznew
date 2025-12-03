import { useRef } from "react";

type VideoPlayerProps = {
  src: string,
  poster?: string,
  className?: string,
};

export default function VideoPlayer({
  src,
  poster,
  className,
}: VideoPlayerProps) {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoClassName = className ? `w-full h-auto rounded-xl ${className}` : "w-full h-auto rounded-xl";

  return (
    <video
      src={src}
      ref={videoRef}
      loop
      poster={poster || undefined}
      autoPlay
      className={videoClassName}
      playsInline
    />
  );

};
