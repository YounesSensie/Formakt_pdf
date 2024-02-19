"use client"
import { useEffect, useState } from "react";
import { courses } from "../Data/pdfdata";
import PdfViewer from "./PDFViewer2";
import Image from "next/image";


const GalleryPage = () => {
    const [selectedPdf, setSelectedPdf] =  useState<string | null>(null);
    const handleViewCourse = (pdfUrl: string) => {
      setSelectedPdf(pdfUrl);
    };
  
    const handleCloseViewer = () => {
      setSelectedPdf(null);
    };
    
  
    return ( 
    <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: 'url(/BG_mix05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.9' }}>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-fuchsia-950">Formakt_PDF_Library</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                <Image src={course.path} alt='' width={300} height={45} className="object-cover w-full h-full"></Image>
              </div>
              <div className="p-4 bg-teal-400">
                <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                <div className="mt-4 flex justify-end">
                  <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={() => setSelectedPdf(course.link)}>View Course</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </main>
      {selectedPdf &&(
           <div className="fixed top-10 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
           <div className="bg-white p-8 rounded-lg max-w-5xl overflow-auto">
             <PdfViewer pdfUrl={selectedPdf} />
             <button className="absolute top-6 right-4 text-slate-50 border-2" onClick={handleCloseViewer}>Close</button>
           </div>
         </div>)}
    </div>
     );
}
 
export default GalleryPage;