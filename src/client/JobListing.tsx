import React from "react";

const JobListing = () => {
  const Jobs = [
    {
      id: "1",
      name: "TechnoWave",
      title: "Frontend Developer",
      location: "Silicon Valley",
      type: "Hybrid",
      features: [
        "Apply for 10 jobs",
        "Get your tailored profile",
        "No expiration date",
      ],
      applied: true,
    },
    {
      id: "2",
      name: "Softwarify",
      title: "React Developer",
      location: "New York",
      type: "Remote",
      description:
        "Update your details and generate a new profile any time you want",
      features: [
        "Unlimited resumes",
        "Unlimited changes",
        "Unlimited applications",
        "Priority support",
        "Cancel any time",
      ],
    },
    {
      id: "3",
      name: "Connecticom",
      title: "Angular Developer",
      location: "California",
      type: "On-Site",
      features: [
        "Apply for 10 jobs",
        "Get your tailored profile",
        "No expiration date",
      ],
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-purple-800 font-semibold text-gray-800 mb-4">
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
              <label className="block text-white font-semibold">empty</label>
              <button className="w-full bg-purple-800 text-white font-semibold py-2 rounded">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* You can map through your job listings data here */}
          {Jobs.map((job) => (
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600">{job.name}</p>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-600">{job.type}</p>
              {job.applied ? (
                <p className="block mt-4 text-purple-800">Already applied!</p>
              ) : (
                <a
                  href={`/jobs/${job.id}`}
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  View Details
                </a>
              )}
            </div>
          ))}

          {/* Repeat this card for each job listing */}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
