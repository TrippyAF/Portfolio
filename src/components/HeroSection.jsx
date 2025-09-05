import React, { useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { randomNumberBetween, role, description, name, personeName } from "./data/constants";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const buttons = [
    { id: 1, icon: <FaGithub />, name: "GitHub", link: "https://github.com/trippyAF" },
    { id: 2, icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/shashwat.rao?igsh=MWcydmlmdTg3YnhyNw==" },
    { id: 3, icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/shashwat-rao-2208a11a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
];

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [scope, animateFn] = useAnimate();

    const onHoverStart = (buttonClass = ".button") => {
        const sparkles = Array.from({ length: 20 });

        const sparklesAnimation = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: randomNumberBetween(-100, 100),
                y: randomNumberBetween(-100, 100),
                scale: randomNumberBetween(1.5, 2.5),
                opacity: 1,
            },
            { duration: 0.4, at: "<" },
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
            [buttonClass, { scale: 0.8 }, { duration: 0.1, at: "<" }],
            [buttonClass, { scale: 1 }, { duration: 0.1 }],
            ...sparklesAnimation,
            [".letter", { y: 0 }, { duration: 0.000001 }],
            ...sparklesFadeOut,
        ]);
    };

    return (
        <div className="container max-w-screen-xl mx-auto px-4 text-white">
            <section className="relative w-full mt-10">
                <div className="w-full px-5 sm:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                        {/* Left Column */}
                        <div className="lg:py-6 z-[100]">
                            <div className="text-center lg:text-left">
                                {/* Role */}
                                <h6 className="mb-[15px] opacity-[70%] tracking-widset font-[300] text-[14px]">
                                    {role.map((letter, i) => (
                                        <motion.span
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25, delay: i / 10 }}
                                            key={i}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </h6>

                                {/* Name */}
                                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                                    {name.map((letter, i) => (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.25, delay: i / 10 }}
                                            key={i}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    <span className="block text-lime-500">
                                        {personeName.map((letter, i) => (
                                            <motion.span
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.25, delay: (name.length + i) / 10 }}
                                                key={i}
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-[15px] opacity-[70%] font-[300] mt-[10px] text-white text-center lg:text-left mx-auto max-w-xl">
                                    {description.map((word, i) => (
                                        <motion.span
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25, delay: i / 20 }}
                                            key={i}
                                        >
                                            {word}{" "}
                                        </motion.span>
                                    ))}
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-wrap mt-8 md:mt-10 justify-center lg:justify-normal items-center gap-4">
                                    <div ref={scope} className="flex flex-wrap justify-center items-center gap-4">
                                        {/* Download CV Button */}
                                        <button
                                            onMouseEnter={() => onHoverStart(".button-cv")}
                                            onClick={() =>
                                                window.open("https://drive.google.com/file/d/1nbSkH4qj0RYbuRyLRhEgZY6UywOkBpG-/view?usp=sharing", "_blank")
                                            }
                                            className="button-cv relative rounded-full border-2 border-lime-500 px-6 py-2 text-2xl text-lime-500 transition-colors hover:bg-lime-500 hover:text-white"
                                        >
                                            <span className="sr-only">Download CV</span>
                                            <span className="block overflow-hidden" aria-hidden="true">
                                                {["D", "o", "w", "n", "l", "o", "a", "d", " ", "C", "V"].map((letter, index) => (
                                                    <span
                                                        data-letter={letter}
                                                        className="relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)] sm:after:block after:hidden"
                                                        key={`${letter}-${index}`}
                                                    >
                                                        {letter === " " ? "\u00A0" : letter}{" "}
                                                    </span>
                                                ))}
                                            </span>
                                            <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 block">
                                                {Array.from({ length: 20 }).map((_, index) => (
                                                    <svg
                                                        className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                                                        key={index}
                                                        viewBox="0 0 122 117"
                                                        width={10}
                                                        height={10}
                                                    >
                                                        <path
                                                            className="fill-lime-500"
                                                            d="M64.39,2,80.11,38.76,120,42.33a3,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                                                        />
                                                    </svg>
                                                ))}
                                            </span>
                                        </button>

                                        {/* Social Buttons */}
                                        {buttons.map(({ id, icon, name, link }) => (
                                            <button
                                                key={id}
                                                onMouseEnter={() => onHoverStart(`.button-${id}`)}
                                                onClick={() => window.open(link, "_blank")}
                                                className={`button-${id} relative rounded-full p-2 border-2 text-2xl border-lime-500 text-lime-500 transition-colors hover:scale-105 hover:bg-lime-500 hover:text-white`}
                                                aria-label={name}
                                            >
                                                <span className="sr-only">{name}</span>
                                                {icon}
                                                <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 block">
                                                    {Array.from({ length: 20 }).map((_, index) => (
                                                        <svg
                                                            className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                                                            key={index}
                                                            viewBox="0 0 122 117"
                                                            width={10}
                                                            height={10}
                                                        >
                                                            <path
                                                                className="fill-lime-500"
                                                                d="M64.39,2,80.11,38.76,120,42.33a3,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                                                            />
                                                        </svg>
                                                    ))}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:h-full md:flex relative w-full justify-center">
                            <div className="relative flex w-full h-[32rem] lg:h-[36rem] items-center justify-center overflow-visible">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 bg-lime-500 rounded-full blur-3xl z-0" />
                                <div className="relative z-10 p-2 rounded-full shadow-lg border-2 border-lime-500 flex justify-center items-center">
                                    <motion.div
                                        initial={false}
                                        animate={
                                            isLoaded && isInView
                                                ? {
                                                    WebkitMaskImage:
                                                        "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)",
                                                    maskImage:
                                                        "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)",
                                                }
                                                : {
                                                    WebkitMaskImage:
                                                        "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)",
                                                    maskImage:
                                                        "repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)",
                                                }
                                        }
                                        transition={{ duration: 1, delay: 1 }}
                                        onViewportEnter={() => setIsInView(true)}
                                    >
                                        {!isLoaded && (
                                            <div className="flex justify-center items-center h-full">
                                                <div className="loader">Loading...</div>
                                            </div>
                                        )}
                                        <img
                                            src="/heroPic.jpg"
                                            alt="hero picture"
                                            width={400}
                                            height="auto"
                                            onLoad={() => setIsLoaded(true)}
                                            className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;



