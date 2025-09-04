// Achievements.jsx
import React from "react";
import { achievementsData } from "./data/constants";

const Achievements = () => {
    return (
        <div 
        id="achievements"
        className="p-10 text-lime-500 bg-transparent">
            <h2 className="text-4xl font-extrabold mb-10 text-center decoration-lime-500">
                Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {achievementsData.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                        <div
                            key={index}
                            className="bg-neutral-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <Icon className="text-4xl text-white mb-4" />
                            <h3 className="text-lime-500 text-2xl font-semibold mb-2">{achievement.title}</h3>
                            <p className="text-gray-300">{achievement.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Achievements;
