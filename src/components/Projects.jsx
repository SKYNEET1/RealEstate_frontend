import React from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Projects"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h2>
      <p className="text-center text-gray-600 max-w-80 mx-auto">
        Crafting Space, Building Legacies – Explore Our Portfolio
      </p>
      <p className="text-center text-gray-500 mb-8 max-w-100 text-sm mx-auto">
        (ଅଂଚଳ ଗଠନ, ଏକ ଐତିହ୍ୟ ସୃଷ୍ଟି – ଆମ ପୋର୍ଟଫୋଲିଓ ଅନୁସନ୍ଧାନ କରନ୍ତୁ)
      </p>

      {/* Projects Grid - 4 Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projectsData.slice(0, 4).map((project, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-auto mb-6"
              src={project.image}
              alt={project.title}
            />
            <div className="absolute w-full left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.price} <span className="px-1" /> {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
