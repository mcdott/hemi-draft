import React, { useEffect, ReactElement } from "react";
import "./FullScreenIframe.css";

interface FullScreenIframeProps {
  url: string;
  // goToPrevious: () => void;
  // goToNext: () => void;
}

const FullScreenIframe: React.FC<FullScreenIframeProps> = ({
  url,
}: // goToPrevious,
// goToNext,
FullScreenIframeProps): ReactElement => {
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

  return (
    <div style={{ position: "relative" }}>
      <iframe
        id='fullscreen-iframe'
        title='full screen'
        src={url}
        style={{ border: "none" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {/* <button
          onClick={goToPrevious}
          className='fullScreenLeftButtonStyles'
          aria-label='Previous'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
          >
            <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className='fullScreenRightButtonStyles'
          aria-label='Next'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
          >
            <path d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z' />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default FullScreenIframe;
