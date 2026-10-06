import React from "react";

function About() {
  return (
    <>
      <div className="min-h-dvh h-auto bg-blue-300 flex items-center justify-center">
        <div className="max-w-4xl text-center mt-0">
          <h1 className=" text-5xl md:text-6xl font-bold text-red-500 mb-6 hover:translate-x-2 transition-transform duration-300">
            About 
          </h1>

          <p className="text-gray-700 font-bold text-lg text-justify max-w-3xl mx-auto mb-6 hover:text-black">
            Welcome to our IoT Internship 2026 project! We are focused on building
        innovative, efficient, and responsive solutions for modern IoT
        applications. Our goal is to bridge the gap between hardware and
        software by creating practical, real-world systems.
          </p>

          <p className="text-gray-700 font-bold text-lg max-w-3xl mx-auto text-justify">
            The project focuses on learning and applying React concepts such as
            reusable components, React Router, responsive design, and Tailwind
            CSS while building a simple and user-friendly web application.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
