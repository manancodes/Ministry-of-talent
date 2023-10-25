import React from "react";

const JobListing = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Job Listings
        </h1>

        {/* Filter Section */}
        <div className="bg-white rounded shadow p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Filter Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-600 font-semibold">
                Location
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold">
                Job Type
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
              </select>
            </div>
            <div>
              <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* You can map through your job listings data here */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Job Title
            </h2>
            <p className="text-gray-600">Company Name</p>
            <p className="text-gray-600">Location</p>
            <p className="text-gray-600">Job Type</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">
              View Details
            </a>
          </div>

          {/* Repeat this card for each job listing */}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
