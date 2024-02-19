"use client"
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);


  const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleLoadError = (error: Error) => {
    // Handle the error here, e.g., show an error message or redirect
    console.error('Error loading PDF:', error);
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);
  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1);
  };
  useEffect(() => {
    const disableContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 's')) {
        event.preventDefault();
      }
    };


    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='relative'>
      <div className="fixed top-0 left-0 right-0 z-10 bg-blue-300 bg-opacity-50 text-white py-2 px-4 flex justify-center">
        <span className='px-4 py-2'> zoom </span>
        <button className="mr-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={handleZoomIn}>+</button>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={handleZoomOut}>-</button>
      </div>
    <div className="flex justify-center items-center max-w-screen h-full top-2">
      <div className="w-full max-h-screen max-w-screen-lg p-4 bg-white shadow-lg rounded-md overflow-auto">
      
      <Document
        file={pdfUrl}
        onLoadSuccess={handleLoadSuccess}
        onLoadError={handleLoadError}
      
      >
        
          {numPages &&
            Array.from(new Array(numPages || 0), (_, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={zoom}
            loading="Loading..."/>
          ))}
        
      </Document>
    </div>
    </div>
    </div>
  );
};

export default PdfViewer;
