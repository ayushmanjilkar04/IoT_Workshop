import React from "react";

function Home() {
  return (
    <>
      <div className="min-h-dvh h-auto bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My <span className="text-blue-600">React Project</span>
          </h1>

          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            A simple React application built as part of my internship,
            demonstrating modern UI design, reusable components, routing, and
            responsive layouts.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
