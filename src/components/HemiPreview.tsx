import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useResizeObserver from "use-resize-observer";
import Quote from "../assets/Quote.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const HemiPreview: React.FC = () => {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Document file={Quote}>
        <Page width={width} pageNumber={1} />
      </Document>
    </div>
  );
};

export default HemiPreview;
