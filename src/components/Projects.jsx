import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {

  const[currentIndex,setcurrentIndex] = useState(0);
  const[cardsToShow,setcardsToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToDisplay = () => {
      if(window.innerWidth >=1024){
        setcardsToShow(projectsData.length);
      }else{
        setcardsToShow(1);
      }
    };
      updateCardsToDisplay();

      window.addEventListener('resize',updateCardsToDisplay);
      return () => window.removeEventListener('resize',updateCardsToDisplay);
    
  },[])

  const nextProject = () =>{
    setcurrentIndex((previndex)=> (previndex + 1) % projectsData.length);
  }
  // this means when ever there will be 6%6 it will give 0 that means it will again start from the first project.
  const prevProject = () =>{
    setcurrentIndex((previndex)=> previndex === 0 ? projectsData.length - 1 : previndex - 1);
  }

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h2>
      <p className="text-center text-gray-600  max-w-80 mx-auto">
        Crafting Space, Building Legacies-Explore Our Portfolio
      </p>
      <p className="text-center text-gray-500 mb-8 max-w-100 text-sm mx-auto">
      (ଅଂଚଳ ଗଠନ, ଏକ ଐତିହ୍ୟ ସୃଷ୍ଟି – ଆମ ପୋର୍ଟଫୋଲିଓ ଅନୁସନ୍ଧାନ କରନ୍ତୁ)
      </p>

      {/* Slider Button */}

      <div className="flex items-center justify-end">
        <button onClick={prevProject}
        
          className="p-3 bg-gray-200 rounded-full mr-2 cursor-pointer"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject}
          className="p-3 bg-gray-200 rounded-full mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider container */}

      <div className="overflow-hidden ">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out" 
        style={{transform:`translateX(-${(currentIndex * 100)/cardsToShow}%)`}}>
          {/* This tells the browser that only the transform properties (like translate, scale, rotate, and skew) should be animated when they change. */}
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              {/* Setting flex-shrink-0 makes an element stay its original size and not shrink when the container gets smaller. */}
              <img className="w-full h-auto mb-14" src={project.image} alt={project.title} />
              <div className="absolute w-full left-0 ritght-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1"></span>  {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
