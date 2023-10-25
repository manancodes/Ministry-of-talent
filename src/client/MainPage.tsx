import React from "react";

const MainPage = () => {
  return (
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-extrabold mb-4">Find Your Dream Job</h1>
        <p className="text-xl mb-8">Explore thousands of job opportunities</p>
        <a
          href="/jobs"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
        >
          Browse Job Listings
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Featured Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Job Cards */}
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold text-gray-800">Job Title 1</h3>
            <p className="text-gray-600">Company Name 1</p>
            <p className="text-gray-600">Location 1</p>
            <a
              href="/job-details"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </a>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold text-gray-800">Job Title 2</h3>
            <p className="text-gray-600">Company Name 2</p>
            <p className="text-gray-600">Location 2</p>
            <a
              href="/job-details"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </a>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold text-gray-800">Job Title 3</h3>
            <p className="text-gray-600">Company Name 3</p>
            <p className="text-gray-600">Location 3</p>
            <a
              href="/job-details"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View Details
            </a>
          </div>
          {/* Repeat this card structure for more featured jobs */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
