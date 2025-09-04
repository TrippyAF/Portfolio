
// import React, { Suspense, lazy } from "react";
// import LoadingSpinner from "./components/LoadingSpinner";
// import Threebackground from "./components/Threebackground";

// // lazy imports
// const NavBar = lazy(() => import("./components/NavBar"));
// const HeroSection = lazy(() => import("./components/HeroSection"));
// const AboutMe = lazy(() => import("./components/AboutMe"));

// export default function App() {
//   return (
//     <div className="bg-black min-h-screen">
//       <Threebackground />
//       <div className="relative z-10">
//         <Suspense
//           fallback={
//             <div className="flex justify-center items-center min-h-screen">
//               <LoadingSpinner />
//             </div>
//           }
//         >
//           <NavBar />
//           <HeroSection />
//           <AboutMe />
//         </Suspense>
//       </div>
//     </div>
//   );
// }
// App.jsx
import React, { Suspense, lazy } from "react";
import Threebackground from "./components/Threebackground";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components
const NavBar = lazy(() => import("./components/NavBar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const Experience = lazy (()=> import("./components/Experience"));
const Projects = lazy (()=> import("./components/Projects"));
const Skills = lazy (()=> import("./components/Skills"));
const Education = lazy (()=> import("./components/Education"));
const Achievements = lazy (()=> import("./components/Achievements"));
const ContactMe = lazy (()=> import("./components/ContactMe"));
const ButtonToTop = lazy (()=> import("./components/ButtonToTop"));

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Threebackground />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          <NavBar />
          <HeroSection />
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <ContactMe />
          <ButtonToTop />
        </Suspense>
      </div>
    </div>
  );
}
App.jsx


