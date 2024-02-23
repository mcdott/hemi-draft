import React, { useEffect, ReactElement } from "react";

interface FullScreenIframeProps {
  url: string;
}

const FullScreenIframe: React.FC<FullScreenIframeProps> = ({
  url,
}: FullScreenIframeProps): ReactElement => {
  useEffect(() => {
    const handleResize = () => {
      const iframe = document.getElementById(
        "fullscreen-iframe"
      ) as HTMLIFrameElement | null;
      if (iframe) {
        iframe.width = `${window.innerWidth}`;
        iframe.height = `${window.innerHeight}`;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    console.log("closed full screen");
  };

  return (
    <div style={{ position: "relative" }}>
      <iframe
        id='fullscreen-iframe'
        title='full screen'
        src={url}
        style={{ border: "none", borderRadius: "10px" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <button
          onClick={handleClick}
          aria-label='Close Full Screen'
          style={{ color: "red", backgroundColor: "white" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FullScreenIframe;
