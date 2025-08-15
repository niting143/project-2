import React, { useState } from "react";

interface Project {
  title: string;
  location: string;
  description: string;
  beforeAfter: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, project, onClose }) => {
  const [zoom, setZoom] = useState(1);
  if (!isOpen || !project) return null;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-2 sm:mx-4 p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 text-2xl font-bold shadow transition-colors duration-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mb-4 flex flex-col items-center">
          <div className="relative w-full flex justify-center items-center mb-4">
            <img
              src={project.beforeAfter}
              alt={project.title}
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
              className="w-full h-80 object-contain rounded-xl bg-gray-100"
            />
            {/* Zoom Controls */}
            <div className="absolute bottom-2 right-2 flex space-x-2 bg-white bg-opacity-80 rounded-lg p-1 shadow">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white text-lg font-bold transition-colors"
                onClick={handleZoomOut}
                aria-label="Zoom Out"
              >
                -
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white text-lg font-bold transition-colors"
                onClick={handleResetZoom}
                aria-label="Reset Zoom"
              >
                1x
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white text-lg font-bold transition-colors"
                onClick={handleZoomIn}
                aria-label="Zoom In"
              >
                +
              </button>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{project.title}</h3>
          <p className="text-blue-600 text-base mb-2 text-center">{project.location}</p>
          <p className="text-gray-700 mb-2 text-center">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
