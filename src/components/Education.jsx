import React from "react";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { education, certifications } from "./data/constants"; // import both

const Education = () => {
    return (
        <section className="bg-transparent text-white py-16 px-6" id="education">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-12 text-lime-500">
                    Education & Certifications
                </h2>

                {/* Education Timeline */}
                <div className="relative border-l-4 border-lime-500 ml-6 mb-16">
                    {education.map((edu) => (
                        <div key={edu.id} className="mb-12 ml-6 relative">
                            {/* Milestone Dot */}
                            <span className="absolute -left-8 flex items-center justify-center w-12 h-12 bg-lime-500 text-black rounded-full shadow-lg">
                                <FaGraduationCap className="w-6 h-6" />
                            </span>
                            <div className="bg-neutral-900 p-6 rounded-xl shadow-lg hover:shadow-lime-500/40 transition-shadow">
                                <h3 className="text-xl font-semibold text-lime-400">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-300">{edu.institution}</p>
                                <p className="text-gray-400 text-sm mb-2">{edu.year}</p>

                                {/* Description as Bullet Points */}
                                {Array.isArray(edu.description) ? (
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {edu.description.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-300">{edu.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Certifications Section */}
                <h3 className="text-2xl font-semibold mb-8 text-lime-400 text-center">
                    Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col space-y-2"
                        >
                            <div className="flex items-center space-x-3">
                                <FaCertificate className="text-lime-500 w-6 h-6" />
                                <span className="text-white font-medium text-lg">{cert.name}</span>
                            </div>
                            <span className="text-gray-400 text-sm">
                                {cert.issuer}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
