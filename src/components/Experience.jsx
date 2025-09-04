// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { experiences, randomNumberBetween } from "./data/constants";

// const Experience = () => {
//     // renamed animate -> animateFn to avoid conflict
//     const [scope, animateFn] = useAnimate();

//     const onHoverStart = () => {
//         const sparkles = Array.from({ length: 20 });

//         const sparklesAnimation = sparkles.map((_, index) => [
//             `.sparkle-${index}`,
//             {
//                 x: randomNumberBetween(-100, 100),
//                 y: randomNumberBetween(-100, 100),
//                 scale: randomNumberBetween(1.5, 2.5),
//                 opacity: 1,
//             },
//             {
//                 duration: 0.4,
//                 at: "<",
//             },
//         ]);

//         const sparklesFadeOut = sparkles.map((_, index) => [
//             `.sparkle-${index}`,
//             { opacity: 0, scale: 0 },
//             { duration: 0.3, at: "<" },
//         ]);

//         const sparklesReset = sparkles.map((_, index) => [
//             `.sparkle-${index}`,
//             { x: 0, y: 0 },
//             { duration: 0.000001 },
//         ]);

//         animateFn([
//             ...sparklesReset,
//             [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
//             ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
//             ["button", { scale: 1 }, { duration: 0.1 }],
//             ...sparklesAnimation,
//             [".letter", { y: 0 }, { duration: 0.000001 }],
//             ...sparklesFadeOut,
//         ]);
//     };
//     return (
//         <section
//             id="experience"
//             className="w-full py-24 bg-black text-white flex flex-col items-center"
//         >
//             {/* Section Heading */}
//             <motion.h2
//                 className="text-5xl md:text-6xl font-extrabold text-lime-500 mb-12"
//                 initial={{ opacity: 0, y: -50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 Work Experience
//             </motion.h2>

//             {/* Experience Cards */}
//             {experiences.map((exp, idx) => (
//                 <motion.div
//                     key={idx}
//                     className="w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-lg p-10 border border-lime-500 mb-8"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: idx * 0.2 }}
//                 >
//                     {/* Title + Company */}
//                     <h3 className="text-3xl font-bold text-lime-500 mb-2">{exp.role}</h3>
//                     <p className="text-xl font-semibold text-white">{exp.company}</p>

//                     {/* Meta Info */}
//                     <div className="flex flex-wrap items-center text-gray-400 text-sm mt-3 gap-6">
//                         <span className="flex items-center gap-2">
//                             <FaCalendarAlt className="text-lime-500" size={16} /> {exp.date}
//                         </span>
//                         <span className="flex items-center gap-2">
//                             <FaMapMarkerAlt className="text-lime-500" size={16} /> {exp.location}
//                         </span>
//                         <span className="flex items-center gap-2">
//                             <FaBriefcase className="text-lime-500" size={16} /> {exp.type}
//                         </span>
//                     </div>

//                     {/* Responsibilities / Points */}
//                     <ul className="mt-6 space-y-3 text-gray-300 leading-relaxed">
//                         {exp.points.map((point, i) => (
//                             <li key={i} className="flex gap-2">
//                                 <span className="text-lime-500">▸</span>
//                                 {point}
//                             </li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             ))}
//         </section>
//     );
// };

// export default Experience;
import React from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experiences,randomNumberBetween } from "./data/constants";

const Experience = () => {
    const [scope, animateFn] = useAnimate();

    const onHoverStart = () => {
        const sparkles = Array.from({ length: 20 });

        const sparklesAnimation = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: randomNumberBetween(-100, 100),
                y: randomNumberBetween(-100, 100),
                scale: randomNumberBetween(1.5, 2.5),
                opacity: 1,
            },
            {
                duration: 0.4,
                at: "<",
            },
        ]);

        const sparklesFadeOut = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            { opacity: 0, scale: 0 },
            { duration: 0.3, at: "<" },
        ]);

        const sparklesReset = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            { x: 0, y: 0 },
            { duration: 0.000001 },
        ]);

        animateFn([
            ...sparklesReset,
            [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
            ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
            ["button", { scale: 1 }, { duration: 0.1 }],
            ...sparklesAnimation,
            [".letter", { y: 0 }, { duration: 0.000001 }],
            ...sparklesFadeOut,
        ]);
    };


    return (
        <section
            id="experience"
            className="w-full py-24 bg-transparent text-white flex flex-col items-center"
            ref={scope}
        >
            {/* Section Heading */}
            <motion.h2
                className="text-5xl md:text-6xl font-extrabold text-lime-500 mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Work Experience
            </motion.h2>

            {/* Experience Cards */}
            {experiences.map((exp, idx) => (
                <motion.div
                    key={idx}
                    className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-lg p-10 border border-lime-500 mb-8 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    onHoverStart={onHoverStart}
                >
                    {/* Sparkles */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.span
                            key={i}
                            className={`sparkle-${i} absolute w-2 h-2 rounded-full bg-lime-500 opacity-0`}
                        />
                    ))}

                    {/* Title + Company */}
                    <h3 className="text-3xl font-bold text-lime-500 mb-2">{exp.role}</h3>
                    <p className="text-xl font-semibold text-white">{exp.company}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center text-gray-400 text-sm mt-3 gap-6">
                        <span className="flex items-center gap-2">
                            <FaCalendarAlt className="text-lime-500" size={19} /> {exp.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-lime-500" size={19} />{" "}
                            {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaBriefcase className="text-lime-500" size={19} /> {exp.type}
                        </span>
                    </div>

                    {/* Responsibilities / Points */}
                    <ul className="mt-6 space-y-3 text-gray-300 leading-relaxed">
                        {exp.points.map((point, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="text-lime-500">▸</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </section>
    );
};

export default Experience;
