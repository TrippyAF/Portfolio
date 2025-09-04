// import React, { useRef, useState } from "react";
// import { motion, useCycle } from "framer-motion";
// import { useDimensions } from "./data/use-dimensions";
// import { sidebarVariants, menuItemVariants, navItems, navVariants } from "./data/constants";

// const Path = (props) => (
//     <motion.path
//         fill="transparent"
//         strokeWidth="3"
//         stroke="#66c61c"
//         strokeLinecap="round"
//         {...props}
//     />
// );

// const MenuToggle = ({ toggle }) => (
//     <button
//         onClick={toggle}
//         className="absolute top-5 left-5 z-20 w-[40px] h-[40px] bg-transparent flex items-center justify-center"
//     >
//         <svg width={23} height={23} viewBox="0 0 23 23">
//             <Path
//                 variants={{
//                     closed: { d: "M 2 2.5 L 20 2.5" },
//                     open: { d: "M 3 16.5 L 17 2.5" },
//                 }}
//             />
//             <Path
//                 d="M 2 9.423 L 20 9.423"
//                 variants={{
//                     closed: { opacity: 1 },
//                     open: { opacity: 0 },
//                 }}
//                 transition={{ duration: 0.1 }}
//             />
//             <Path
//                 variants={{
//                     closed: { d: "M 2 16.346 L 20 16.346" },
//                     open: { d: "M 3 2.5 L 17 16.346" },
//                 }}
//             />
//         </svg>
//     </button>
// );

// const MenuItem = ({ title, href }) => {
//     return (
//         <motion.li
//             variants={menuItemVariants}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mb-4 flex items-center cursor-pointer p-2"
//         >
//             <a
//                 href={href}
//                 className="text-white font-bold text-2xl w-full hover:text-lime-500 w-full"
//             >
//                 {title}
//             </a>
//         </motion.li>
//     );
// };

// const NavBar = () => {
//     const [isOpen, toggleOpen] = useCycle(false, true);
//     const [zIndex, setZIndex] = useState(50);
//     const containerRef = useRef(null);
//     const { height } = useDimensions(containerRef);

//     const handleToggle = () => {
//         toggleOpen();
//         if (isOpen) {
//             setZIndex(1000);
//         } else {
//             setZIndex(50);
//         }
//     };

//     return (

//         <motion.nav
//             className="fixed top-0 left-0 w-full h-full"
//             initial={false}
//             animate={isOpen ? "open" : "closed"}
//             custom={height}
//             ref={containerRef}
//             style={{ zIndex }}
//         >

//             <motion.div
//                 className="absolute top-0 left-0 w-64 h-full backdrop-blur-sm bg-white/20"
//                 variants={sidebarVariants}
//             >
//                 <motion.ul className="p-8 mt-20" variants={navVariants}>
//                     {navItems.map((item) => (
//                         <MenuItem key={item.id} title={item.title} href={item.href} />
//                     ))}
//                 </motion.ul>
//             </motion.div>

//             {/* Toggle button */}
//             <MenuToggle toggle={handleToggle} />
//         </motion.nav>
//     );
// };

// export default NavBar;
// components/NavBar.jsx
import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./data/use-dimensions";
import {
  sidebarVariants,
  menuItemVariants,
  navItems,
  navVariants,
} from "./data/constants";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#66c61c"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button
    onClick={toggle}
    className="absolute top-5 left-5 z-20 w-[40px] h-[40px] bg-transparent flex items-center justify-center"
  >
    <svg width={23} height={23} viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const MenuItem = ({ title, href, onClick }) => {
  return (
    <motion.li
      variants={menuItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-4 flex items-center cursor-pointer p-2"
    >
      <a
        href={href}
        onClick={onClick}
        className="text-white font-bold text-2xl w-full hover:text-lime-500"
      >
        {title}
      </a>
    </motion.li>
  );
};

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [zIndex, setZIndex] = useState(50);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleToggle = () => {
    toggleOpen();
    setZIndex(isOpen ? 50 : 1000);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full h-full"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ zIndex }}
    >
      <motion.div
        className="absolute top-0 left-0 w-64 h-full backdrop-blur-sm bg-white/20"
        variants={sidebarVariants}
      >
        <motion.ul className="p-8 mt-20" variants={navVariants}>
          {navItems.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              href={item.href}
              onClick={handleToggle}
            />
          ))}
        </motion.ul>
      </motion.div>

      <MenuToggle toggle={handleToggle} />
    </motion.nav>
  );
};

export default NavBar;
