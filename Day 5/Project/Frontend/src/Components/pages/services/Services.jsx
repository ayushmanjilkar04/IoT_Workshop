import React from "react";

function Services() {
  return (
    <>
      <div className="min-h-dvh h-auto bg-gray-100 flex items-center justify-center">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12">
            Project <span className="text-blue-600">Features</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                React Routing
              </h2>

              <p className="text-gray-700 text-justify">
                Easy navigation between the Home, About, Services, and Contact
                pages using React Router without reloading the website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Contact Form
              </h2>

              <p className="text-gray-700 text-justify">
                A simple contact form that allows users to enter their name,
                email, and contact details to get in touch through the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
