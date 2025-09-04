// // import React, { useState } from "react";
// // import { motion, useAnimate, stagger } from "framer-motion";
// // import { projects, randomNumberBetween } from "./data/constants";
// // import { AnimatePresence } from "framer-motion";


// // const Projects = () => {
// //     const [scope, animateFn] = useAnimate();

// //     const [selectedProject, setSelectedProject] = useState(projects[0]);

// //     const onHoverStart = () => {
// //         const sparkles = Array.from({ length: 20 });

// //         const sparklesAnimation = sparkles.map((_, index) => [
// //             `.sparkle-${index}`,
// //             {
// //                 x: randomNumberBetween(-100, 100),
// //                 y: randomNumberBetween(-100, 100),
// //                 scale: randomNumberBetween(1.5, 2.5),
// //                 opacity: 1,
// //             },
// //             {
// //                 duration: 0.4,
// //                 at: "<",
// //             },
// //         ]);

// //         const sparklesFadeOut = sparkles.map((_, index) => [
// //             `.sparkle-${index}`,
// //             { opacity: 0, scale: 0 },
// //             { duration: 0.3, at: "<" },
// //         ]);

// //         const sparklesReset = sparkles.map((_, index) => [
// //             `.sparkle-${index}`,
// //             { x: 0, y: 0 },
// //             { duration: 0.000001 },
// //         ]);

// //         animateFn([
// //             ...sparklesReset,
// //             [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
// //             ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
// //             ["button", { scale: 1 }, { duration: 0.1 }],
// //             ...sparklesAnimation,
// //             [".letter", { y: 0 }, { duration: 0.000001 }],
// //             ...sparklesFadeOut,
// //         ]);
// //     };

// //     return (
// //         <section
// //             id="projects"
// //             className="w-full py-24 bg-transparent text-white flex flex-col items-center"
// //             ref={scope}
// //         >
// //             <motion.h2
// //                 className="text-5xl md:text-6xl font-extrabold text-lime-500 mb-12"
// //                 initial={{ opacity: 0, y: -50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8 }}
// //             >
// //                 Projects
// //             </motion.h2>

// //             <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
// //                 {/* Left Column: Project List */}
// //                 <div className="flex flex-col gap-4">
// //                     {projects.map((project) => (
// //                         <motion.button
// //                             key={project.id}
// //                             onClick={() => {
// //                                 setSelectedProject(project);
// //                                 console.log("Selected:", project);
// //                             }}
// //                             className={`px-6 py-4 text-left rounded-xl border ${selectedProject.id === project.id
// //                                 ? "bg-lime-500 text-black border-lime-500"
// //                                 : "bg-neutral-900 text-white border-neutral-700 hover:bg-neutral-800"
// //                                 }`}
// //                             onHoverStart={onHoverStart}
// //                         >
// //                             {project.name}
// //                         </motion.button>
// //                     ))}
// //                 </div>

// //                 {/* Right Column: Project Details */}
// //                 <AnimatePresence mode="wait">
// //                     <motion.div
// //                         key={selectedProject.id} // 👈 this makes it re-render when project changes
// //                         className="relative bg-neutral-900 rounded-2xl shadow-lg p-10 border border-lime-500"
// //                         initial={{ opacity: 0, x: 50 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         exit={{ opacity: 0, x: -50 }} // 👈 animate out when switching
// //                         transition={{ duration: 0.4 }}
// //                     >
// //                         {/* Sparkles */}
// //                         {Array.from({ length: 15 }).map((_, i) => (
// //                             <motion.span
// //                                 key={i}
// //                                 className={`sparkle-${i} absolute w-2 h-2 rounded-full bg-lime-500 opacity-0`}
// //                             />
// //                         ))}

// //                         <h3 className="text-3xl font-bold text-lime-500 mb-4">
// //                             {selectedProject.name}
// //                         </h3>
// //                         <p className="text-gray-300 mb-6 leading-relaxed">
// //                             {selectedProject.description}
// //                         </p>

// //                         {/* Tags */}
// //                         <div className="flex flex-wrap gap-2 mb-6">
// //                             {selectedProject.tags.map((tag, i) => (
// //                                 <span
// //                                     key={i}
// //                                     className="bg-gray-800 text-lime-400 px-3 py-1 rounded-full text-sm"
// //                                 >
// //                                     {tag}
// //                                 </span>
// //                             ))}
// //                         </div>

// //                         {/* GitHub Button */}
// //                         {selectedProject.github ? (
// //                             <a
// //                                 href={selectedProject.github}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                                 className="inline-block bg-lime-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition"
// //                             >
// //                                 View on GitHub
// //                             </a>
// //                         ) : (
// //                             <span className="inline-block bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold">
// //                                 Coming Soon
// //                             </span>
// //                         )}
// //                     </motion.div>
// //                 </AnimatePresence>

// //             </div>
// //         </section>
// //     );
// // };

// // export default Projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data/constants";
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (
    <section
    id="projects"
     className="bg-transparent text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-lime-500">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-lime-500/40 transition-shadow"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-3 text-lime-400">
                {project.name}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-lime-500 text-black text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-lime-500 text-black px-4 py-2 rounded-xl font-medium hover:bg-lime-400 transition-colors"
                >
                  Go to Project <FaExternalLinkAlt className="ml-2 w-4 h-4" />
                </a>
              ) : (
                <span className="bg-gray-600 text-white px-4 py-2 rounded-xl font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



