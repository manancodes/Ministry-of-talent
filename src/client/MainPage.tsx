import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container  mx-auto p-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Welcome to Ministry of Talent
        </h1>
        <p className="text-lg text-center mb-6">
          Find your dream job and create personalized resumes for a successful
          job application.
        </p>

        <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
            <p>
              Explore a wide range of job listings from various companies and
              industries. Our platform offers a diverse selection of job
              opportunities to match your skills and career goals.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Resume Builder</h2>
            <p>
              Create personalized resumes quickly and easily. Our resume builder
              tool allows you to input your details, skills, and experience,
              generating a professional resume that stands out to potential
              employers.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl  font-semibold mb-4">
              Application Tracking
            </h2>
            <p>
              Keep track of your job applications in one place. Our platform
              helps you manage and organize your job search, making it easier to
              follow up with potential employers and schedule interviews.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Industry Insights</h2>
            <p>
              Stay informed with industry trends and insights. We provide
              valuable resources and information to help you make informed
              decisions and excel in your job search.
            </p>
          </div>
        </div>
      </div>
      <div className="m-12 rounded-lg shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-4 text-center">
        <h1 className="text-white text-m font-bold">
          1024 people found their dream job on Ministry of Talent!
          <a href="/Profile" className="ml-4">
            Create your profile
          </a>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
