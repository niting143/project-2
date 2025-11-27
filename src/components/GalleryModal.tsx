import React, { useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, MapPin } from "lucide-react";

const GalleryModal = ({ isOpen, project, onClose }) => {
  const [zoom, setZoom] = useState(1);
  if (!isOpen || !project) return null;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-ocean-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
        
        {/* Header (Mobile Only) / Close Button */}
        <button
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-ocean-900 shadow-lg hover:rotate-90 transition-all duration-300"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          
          {/* Image Section */}
          <div className="relative w-full md:w-2/3 bg-sand-50 flex items-center justify-center overflow-hidden h-[400px] md:h-auto border-b md:border-b-0 md:border-r border-gray-100 group">
            
            {/* The Image */}
            <div className="w-full h-full p-4 md:p-8 flex items-center justify-center overflow-hidden">
                <img
                src={project.beforeAfter}
                alt={project.title}
                style={{ transform: `scale(${zoom})` }}
                className="max-w-full max-h-full object-contain transition-transform duration-200 cursor-grab active:cursor-grabbing shadow-xl rounded-lg"
                />
            </div>

            {/* Floating Zoom Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-xl border border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="p-2 rounded-full hover:bg-ocean-50 text-ocean-600 transition-colors"
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-gray-200" />
              <button
                className="p-2 rounded-full hover:bg-ocean-50 text-ocean-600 transition-colors"
                onClick={handleResetZoom}
                title="Reset"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="w-px h-4 bg-gray-200" />
              <button
                className="p-2 rounded-full hover:bg-ocean-50 text-ocean-600 transition-colors"
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
            <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-ocean-50 text-ocean-900 text-xs font-bold uppercase tracking-wider mb-4 border border-ocean-100">
                    {project.category || "Project Details"}
                </span>
                
                <h3 className="text-3xl font-bold text-ocean-900 mb-2 font-display leading-tight">
                    {project.title}
                </h3>
                
                <div className="flex items-center text-eucalyptus-600 font-medium mb-6">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="text-sm font-bold text-charcoal-400 uppercase tracking-wide mb-1">Challenge & Solution</h4>
                    <p className="text-charcoal-600 leading-relaxed text-sm">
                        {project.description}
                    </p>
                </div>
                
                {project.outcome && (
                    <div className="bg-eucalyptus-50 p-4 rounded-xl border border-eucalyptus-100">
                         <h4 className="text-sm font-bold text-eucalyptus-700 uppercase tracking-wide mb-1">Key Result</h4>
                         <p className="text-ocean-900 font-bold">{project.outcome}</p>
                    </div>
                )}
            </div>

            <div className="mt-auto pt-8">
                <button 
                    onClick={onClose}
                    className="w-full py-3 rounded-xl border-2 border-ocean-100 text-ocean-900 font-bold hover:bg-ocean-50 transition-colors text-sm uppercase tracking-wide"
                >
                    Close Project
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GalleryModal;