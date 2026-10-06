import React from "react";

function Contact() {
  return (
    <>
      <div className="min-h-dvh h-auto bg-blue-300 flex items-center justify-center pt-20">
        <div className="w-full max-w-lg bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Connect with <span className="text-blue-600">Me</span>
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name:
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email:
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact No:
              </label>

              <input
                type="tel"
                placeholder="0000000000"
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
