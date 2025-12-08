"use client";

import { useEffect } from "react";

export default function VturbEmbed({ videoId }: { videoId: string }) {
    useEffect(() => {
        const s = document.createElement("script");
        s.src = `https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/${videoId}/v4/player.js`;
        s.async = true;
        document.head.appendChild(s);
    }, [videoId]);

    return (
        <div className="rounded-xl overflow-hidden">
            {/* @ts-expect-error Custom element */}
            <vturb-smartplayer
                id={`vid-${videoId}`}
                style={{ display: "block", margin: "0 auto", width: "100%" }}
            />
        </div>
    );
}
