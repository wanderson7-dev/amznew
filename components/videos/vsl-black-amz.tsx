import Script from "next/script";

export default function VSLBlackAmz() {
  return (
    <>
      <Script
        src="https://scripts.converteai.net/e47d2695-e7da-47cf-a7a5-1f9da5313774/players/68b0ddfc19546f43f5842586/v4/player.js"
        strategy="afterInteractive"
      />
      {/* @ts-expect-error - Player script is not defined in the global scope */}
      <vturb-smartplayer
        id="vid-68b0ddfc19546f43f5842586"
        style={{
          width: "100%",
          margin: "0 auto",
          display: "block",
          "--player-border-radius": "12px",
        }}
      />
    </>
  );
};