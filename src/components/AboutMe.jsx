import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { aboutMeContent, randomNumberBetween } from "./data/constants";

const AboutMe = () => {
    // renamed animate -> animateFn to avoid conflict
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
        <div className="container max-w-screen-xl mx-auto px-4 text-white" id="about">
            <section className="relative w-full mt-10">
                <div className="w-full px-5 sm:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
                    <div
                        className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 
  lg:max-w-none max-w-2xl mad:max-w-3xl mx-auto"
                    >
                        {/* LEFT COLUMN - DESCRIPTION */}
                        <div className="lg:py-6 z-[100]">
                            <div className="text-center lg:text-left">
                                <p className="text-sm sm:text-base lg:text-lg opacity-[80%] font-[400] mt-[10px] text-white text-center lg:text-left mx-auto max-w-2xl leading-relaxed">
                                    {aboutMeContent.map((line, i) => (
                                        <motion.span
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25, delay: i / 20 }}
                                            key={i}
                                        >
                                            {line}{" "}
                                        </motion.span>
                                    ))}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - HEADING */}
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-lime-500 text-center">
                                About Me
                            </h1>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );

};

export default AboutMe;
