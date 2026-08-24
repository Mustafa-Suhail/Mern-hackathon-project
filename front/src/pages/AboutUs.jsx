import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl">
        Welcome to our Health & Management Portal. We are dedicated to providing
        a seamless experience for users, managers, and administrators. Our goal
        is to simplify healthcare and organizational management by offering
        tools for appointments, assignments, and performance tracking — all in
        one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-3 text-indigo-500">Our Mission</h3>
          <p className="text-gray-600">
            To empower communities with efficient healthcare and management
            solutions, ensuring accessibility and transparency.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-3 text-green-500">Our Vision</h3>
          <p className="text-gray-600">
            Building a connected ecosystem where users, managers, and admins
            collaborate to achieve better outcomes.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-500">Our Values</h3>
          <p className="text-gray-600">
            Integrity, innovation, and inclusivity guide everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
