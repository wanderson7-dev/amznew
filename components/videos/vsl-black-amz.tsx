import { useEffect } from "react";

export default function VSLBlackAmz() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="68b0ddfc19546f43f5842586"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/68b0ddfc19546f43f5842586/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="68b0ddfc19546f43f5842586"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer
      id="vid-68b0ddfc19546f43f5842586"
      style={{
        width: "100%",
        margin: "0 auto",
        display: "block",
        "--player-border-radius": "12px",
      }}
    />
  );

};