import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ButtonToTop = () => {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Use the new 'on' API instead of deprecated onChange
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setShowButton(latest > 0.2);
    });

    // Cleanup when component unmounts
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-transparent text-lime-500 p-3 rounded-full shadow-lg transition-colors z-[150] flex items-center justify-center"
          aria-label="scroll to top"
          style={{ width: "50px", height: "50px" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            <svg width={50} height={50} viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#66c61c"
                strokeWidth={2}
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#66c61c"
                strokeWidth={2}
                strokeDasharray="100 100"
                strokeDashoffset={100}
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </motion.div>
          <FaArrowUp className="text-xl relative z-[150]" />
        </button>
      )}
    </>
  );
};

export default ButtonToTop;
