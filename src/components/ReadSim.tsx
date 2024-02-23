import React, { useState } from "react";
import customCursorImg from "../assets/purple-dash-96px.png"; // https://icons8.com/icons/set/dash to change dash color
import { Document, Page, pdfjs } from "react-pdf";
import useResizeObserver from "use-resize-observer";
import Quote from "../assets/Quote.pdf";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReadSim = () => {
  const [cursorX, setCursorX] = useState(0);
  // Start with the overlay on the right
  const [selectedTab, setSelectedTab] = useState("right");
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  // Make the overlay follow mouse/touch movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorX(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setCursorX(touch.clientX);
  };

  const handleChangeOverlaySide = (value: string) => {
    setSelectedTab(value);
  };

  const overlayOnLeft = selectedTab === "left";

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

  return (
    <>
      <div
        className='sim-container'
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        ref={ref}
        style={{
          width: "100%",
          height: "100%",
          cursor: `url(${customCursorImg}), auto`,
          position: "relative",
          overflow: "hidden",
          borderStyle: "solid",
          borderColor: "red",
          borderWidth: "2px",
          borderRadius: "5px",
        }}
      >
        <div className='overlay' style={overlayStyle}></div>
        <Document file={Quote}>
          <Tabs
            defaultValue='right'
            className='w-[400px] mx-auto'
            onValueChange={handleChangeOverlaySide}
          >
            <TabsList>
              <TabsTrigger value='left'>Left</TabsTrigger>
              <TabsTrigger value='right'>Right</TabsTrigger>
            </TabsList>
          </Tabs>
          <Page width={width} pageNumber={1}></Page>
        </Document>
      </div>
    </>
  );
};

export default ReadSim;
