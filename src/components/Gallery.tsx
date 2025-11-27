import { useState } from "react";
import { MapPin, Plus, Filter, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import GalleryModal from "./GalleryModal";

// Importing images
import washroomImage from "../assets/bathroom.jpeg";
import balconyImage from "../assets/balcony.jpeg";
import balcony2Image from "../assets/balcony2.jpeg";
import balcony3Image from "../assets/bathroom3.jpeg";
import mainFloorImage from "../assets/mainFloor2.jpeg";

const categories = ["All", "Bathroom", "Balcony", "Living Area"];

interface Project {
  title: string;
  location: string;
  description: string;
  beforeAfter: string;
  category: string;
  outcome: string;
}

const projects: Project[] = [
  {
    title: "Shower Leak Repair",
    location: "Scarborough, WA",
    description: "Complete shower leak repair with epoxy grout. Stopped water penetrating to the adjacent bedroom.",
    beforeAfter: balcony3Image,
    category: "Bathroom",
    outcome: "Saved $4,500 vs Retiling"
  },
  {
    title: "Bathroom Floor Regrout",
    location: "Fremantle, WA",
    description: "Whole bathroom floor grout replaced with epoxy for a seamless, mould-proof finish.",
    beforeAfter: washroomImage,
    category: "Bathroom",
    outcome: "100% Mould Elimination"
  },
  {
    title: "Main Floor Restoration",
    location: "Cottesloe, WA",
    description: "Large-scale main floor area regrouted with epoxy to refresh the entire living space.",
    beforeAfter: mainFloorImage,
    category: "Living Area",
    outcome: "Restored in 2 Days"
  },
  {
    title: "Balcony Waterproofing",
    location: "City Beach, WA",
    description: "Fixed major leak in balcony using injection technology. No tiles removed.",
    beforeAfter: balconyImage,
    category: "Balcony",
    outcome: "Stopped Ceiling Leaks"
  },
  {
    title: "Balcony Tile Injection",
    location: "Subiaco, WA",
    description: "Injected megabond under drummy tiles to re-adhere them without lifting.",
    beforeAfter: balcony2Image,
    category: "Balcony",
    outcome: "Fixed Drummy Tiles"
  },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-sand-50 relative overflow-hidden min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eucalyptus-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center lg:text-left max-w-xl">
             <div className="inline-flex items-center gap-2 mb-4 text-eucalyptus-600 font-bold uppercase tracking-widest text-xs">
                <Filter className="w-4 h-4" />
                Our Portfolio
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold text-ocean-900 font-display">
              Real Results.
             </h2>
             <p className="text-lg text-charcoal-600 mt-4 font-light">
               Browse our recent waterproofing projects across Perth.
             </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-ocean-900 text-white shadow-lg shadow-ocean-900/20 scale-105"
                    : "bg-white text-charcoal-500 hover:bg-white hover:text-ocean-900 border border-transparent hover:border-ocean-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapped Projects */}
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(project)}
              className="group bg-white rounded-[2rem] overflow-hidden border border-white shadow-lg hover:shadow-2xl hover:shadow-ocean-900/10 transition-all duration-500 cursor-pointer flex flex-col h-full hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src={project.beforeAfter}
                  alt={project.title}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-ocean-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white text-ocean-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <Plus className="w-5 h-5 text-eucalyptus-600" />
                    View Details
                  </div>
                </div>

                {/* Tags on Image */}
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-ocean-900 uppercase tracking-wide shadow-sm border border-white/50">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-charcoal-400 mb-3 text-xs font-bold tracking-wide uppercase">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-eucalyptus-500" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-bold text-ocean-900 mb-3 font-display group-hover:text-eucalyptus-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-charcoal-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Outcome Badge (New Feature) */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 bg-eucalyptus-50 p-3 rounded-xl">
                     <div className="bg-white p-2 rounded-lg shadow-sm">
                        <Wallet className="w-4 h-4 text-eucalyptus-600" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider">Result</p>
                       <p className="text-sm font-bold text-ocean-900">{project.outcome}</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "Call to Action" Card - Always appears as the last item to drive action */}
          <div className="bg-ocean-900 rounded-[2rem] overflow-hidden shadow-xl p-8 flex flex-col justify-center items-center text-center relative group">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             
             <div className="relative z-10">
               <div className="w-16 h-16 bg-eucalyptus-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-eucalyptus-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="w-8 h-8 text-white" />
               </div>
               
               <h3 className="text-2xl font-bold text-white mb-4 font-display">
                 Your Bathroom Next?
               </h3>
               <p className="text-ocean-100 mb-8 leading-relaxed text-sm">
                 Join hundreds of happy Perth homeowners. Get a free assessment and fix your leaks for good.
               </p>
               
               <Link
                 to="/contact"
                 className="inline-flex items-center bg-white text-ocean-900 px-8 py-3 rounded-full hover:bg-sand-50 transition-all duration-300 font-bold shadow-lg w-full justify-center group-hover:-translate-y-1"
               >
                 Get Free Quote
               </Link>
             </div>
          </div>

        </div>
      </div>

      <GalleryModal
        isOpen={modalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}