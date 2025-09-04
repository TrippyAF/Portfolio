import React from "react";
import { skills } from "./data/constants"; // We'll keep skills data in constants.js

const Skills = () => {
  return (
    <section 
    id="skills"
    className="bg-transparent text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-lime-500">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-lime-500/40 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-lime-400">
                {category.title}
              </h3>

              {/* Each skill */}
              {category.items.map((skill, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 rounded-full lightsaber-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
