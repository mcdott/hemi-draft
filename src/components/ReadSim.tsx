import React, { useState } from "react";
import "./ReadSim.css";
import customCursorImg from "../assets/purple-dash-96px.png";
// https://icons8.com/icons/set/dash to change dash color

import { Document, Page, pdfjs } from "react-pdf";
import useResizeObserver from "use-resize-observer";
import Quote from "../assets/Quote.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReadSim = () => {
  const [cursorX, setCursorX] = useState(0);
  // overLayOnLeft set to false to start with the overlay on the right
  const [overlayOnLeft, setOverlayOnLeft] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  // Make the overlay follow mouse/touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorX(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setCursorX(touch.clientX);
  };

  const overlayStyle: React.CSSProperties = overlayOnLeft
    ? {
        position: "absolute", // Position the overlay relative to the container
        width: `min(${cursorX}px, 100%)`, // Limit the width to the parent's width
        left: 0,
        top: 0, // Ensure it covers from the top of the container
        bottom: 0, // Stretch to the bottom of the container
        backgroundColor: "white",
        zIndex: 10,
      }
    : {
        position: "absolute",
        width: `calc(100% - ${cursorX}px)`,
        left: `${cursorX}px`,
        top: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 10,
      };

  const toggleOverlaySide = () => {
    setOverlayOnLeft(!overlayOnLeft);
  };

  return (
    <>
      <button onClick={toggleOverlaySide}>Toggle Overlay Side</button>
      <div
        className='sim-container'
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          cursor: `url(${customCursorImg}), auto`,
        }}
      >
        <div className='overlay' style={overlayStyle}></div>
        <Document file={Quote}>
          <Page width={width} pageNumber={1} />
        </Document>
      </div>
    </>
  );
};

export default ReadSim;
