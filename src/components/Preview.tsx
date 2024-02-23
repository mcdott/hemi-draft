import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import LinearProgress from "@mui/material/LinearProgress";
import useResizeObserver from "use-resize-observer";
import braillePDF from "../assets/Braille Quick Reference.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// interface PreviewProps {
//   pdfPath: string; // Path to the PDF file in the src/assets directory
// }

const Preview: React.FC = () => {
  // const Preview: React.FC<PreviewProps> = ({ pdfPath }) => {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Document
        // loading={<LinearProgress />}
        // noData={<LinearProgress />}
        file={braillePDF} // Adjust the path accordingly
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {[...Array(numPages)].map((_, index) => (
          <Page
            key={index}
            // loading={<LinearProgress />}
            pageNumber={index + 1}
            width={width}
          />
        ))}
      </Document>
    </div>
  );
};

export default Preview;
