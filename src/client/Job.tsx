import React from "react";

const Job = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow p-4">
          <h1 className="text-3xl font-semibold text-purple-800">Job Title</h1>
          <p className="text-gray-600">Company Name</p>
          <p className="text-gray-600">Location</p>
          <p className="text-gray-600">Job Type</p>
          <p className="text-gray-600">Posted on: September 15, 2023</p>
          <p className="mt-4">Job Description:</p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            ante vel est vestibulum euismod. Nulla facilisi. Etiam in odio eu
            elit vestibulum fermentum. Phasellus eget libero nec urna malesuada
            vestibulum.
          </p>

          <a href="#" className="mt-4 block text-blue-500 hover:underline">
            Apply using MOT profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
