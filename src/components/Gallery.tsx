import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import washroomImage from "../assets/bathroom.jpeg";
import balconyImage from "../assets/balcony.jpeg";
import balcony2Image from "../assets/balcony2.jpeg";
import balcony3Image from "../assets/bathroom3.jpeg";
import mainFloorImage from "../assets/mainFloor2.jpeg";
import GalleryModal from "./GalleryModal";

interface Project {
  title: string;
  location: string;
  description: string;
  beforeAfter: string;
}

const projects: Project[] = [
  {
    title: "Shower Leak Repair",
    location: "Perth, WA",
    description: "Complete shower leak repair with epoxy grout",
    beforeAfter: balcony3Image,
  },
  {
    title: "Bathroom Floor Regrout With Epoxy",
    location: "Perth, WA",
    description: "Whole bathroom floor grout replaced with epoxy",
    beforeAfter: washroomImage,
  },
  {
    title: "Main Floor",
    location: "Perth, WA",
    description: "Large-scale main floor area regrouted with epoxy",
    beforeAfter: mainFloorImage,
  },
  {
    title: "Balcony",
    location: "Perth, WA",
    description:
      "Fixed major leak in balcony with epoxy and injected megabond under drummy tiles",
    beforeAfter: balconyImage,
  },
  {
    title: "Balcony",
    location: "Perth, WA",
    description:
      "Leak repaired in balcony with epoxy and injected megabond under drummy tiles",
    beforeAfter: balcony2Image,
  },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the difference our professional resealing services make
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <img
                    className="w-full h-full object-cover"
                    src={project.beforeAfter}
                    alt="img"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-600 text-sm mb-3">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <button
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
                  onClick={() => handleOpenModal(project)}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
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
