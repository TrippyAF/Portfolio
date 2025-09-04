// components/Contact.jsx
import React from "react";
import { contactInfo } from "./data/constants";

const ContactMe = () => {
  return (

    <section 
    id="contact"
    className="bg-transparent text-white py-16 px-6 md:px-20">
      <h2 className="text-5xl font-extrabold text-center text-lime-500 mb-10">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-neutral-900 hover:bg-lime-500 hover:text-black transition-all duration-300 p-5 rounded-lg shadow-md group cursor-pointer"
            >
              <div className="text-3xl group-hover:scale-110 transition">
                <Icon />
              </div>
              <div>
                <p className="text-sm uppercase opacity-70">{item.label}</p>
                <p className="text-lime-500 text-lg font-medium break-all">{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactMe;
