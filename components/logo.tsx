import Image from "next/image";

type LogoProps = {
  width?: number,
  height?: number,
};

export default function Logo({
  width,
  height,
}: LogoProps) {

  return (
    <Image
      src="/logos/amazon-reviews.png"
      alt="Amazon Reviews"
      width={width || 120}
      height={height || 40}
      priority
    />
  );

};