import Logo from "@/components/logo";
import Image from "next/image";
import Option from "@/components/option";
import Balance from "@/components/balance";
import VideoPlayer from "@/components/video-player";
import { useLayer } from "@/context/layer-provider";
import { ThumbsDown, ThumbsUp } from "lucide-react";

// CONTENT DATA
const content = [
  {
    name: "",
    logo: "",
    video: "",
    title: "",
    views: "",
    date: "",
  },
  {
    name: "Nuwave",
    logo: "/logos/nuwave.png",
    video: "/videos/video1.mp4",
    title: "",
    views: "",
    date: "",
  },
  {
    name: "DREAME",
    logo: "/logos/DREAME.png",
    video: "/videos/video2.mp4",
    title: "Always Ultra Thin - Fear No Gush",
    views: "1.1M views",
    date: "15 days ago",
  },
  {
    name: "Ring",
    logo: "/logos/Ring.png",
    video: "/videos/video3.mp4",
    title: "Losing is Hard",
    views: "45K views",
    date: "2 days ago",
    last: true,
  },
];

export default function Page() {

  // IMPORT CONTEXT DATA
  const { page, handleOptionClick, handleWithdrawClick } = useLayer();

  return (
    <div key={page} className="flex flex-col gap-5 sm:gap-6 appear">
      <div className="flex justify-between items-center">
        <Logo
          width={140}
          height={70}
        />
        <Balance />
      </div>
      <div className="flex flex-col rounded-2xl border shadow-lg gap-4 p-3 sm:p-4 bg-white border-gray-400/20 shadow-black/10">
        <VideoPlayer src={content[page].video} />
        <div className="flex flex-col gap-1.5 rounded-lg p-3 bg-gray-100/50">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src={content[page].logo}
                alt={content[page].name}
                width="50"
                height="50"
                className="size-7 rounded-full"
              />
              <span className="text-sm font-semibold">
                {content[page].name}
              </span>
            </div>
            <div className="flex items-center rounded-lg text-xs sm:text-sm gap-2 px-2 py-1 bg-sky-950 text-white">
              <span>
                Verified Partner
              </span>
              <div className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-sky-500">
                <span className="text-xs">
                  ✓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center text-balance mt-2">
        <span className="text-sm text-gray-600">
          Answer the question:
        </span>
        <span className="text-lg font-semibold">
          Would you buy this product?
        </span>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Option
            onClick={content[page].last ? handleWithdrawClick : handleOptionClick}
            className="bg-[#DB8300] text-white hover:opacity-80 active:ring-2 active:ring-[#DB8300]"
          >
            <ThumbsUp size={20} />
            <span className="text-sm font-semibold">
              Yes
            </span>
          </Option>
          <Option
            onClick={content[page].last ? handleWithdrawClick : handleOptionClick}
            className="bg-[#DB8300] text-white hover:opacity-80 active:ring-2 active:ring-[#DB8300]"
          >
            <ThumbsDown size={20} />
            <span className="text-sm font-semibold">
              Not
            </span>
          </Option>
        </div>
      </div>
    </div>
  );

};