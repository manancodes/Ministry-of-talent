import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "99889988",
    education: "B.Tech from VIT",
    workingStyles: "Remote",
    problemSolving: "",
    companySizePreference: "Small",
    introduction: "",
    additionalInfo: "",
    projects: [
      {
        projectName: "",
        projectDescription: "",
      },
    ],
    experiences: [
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addProjectRow = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          projectName: "",
          projectDescription: "",
        },
      ],
    });
  };

  const deleteExperienceRow = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const addExperienceRow = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        {
          jobTitle: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const deleteProjectRow = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className=" mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl text-purple-800 font-semibold mb-4">Profile</h2>
        <div>
          {isEditing ? (
            <button
              className="mb-4 bg-purple-800 text-white rounded-md py-2 px-4 hover:bg-purple-950"
              onClick={handleSaveClick}
            >
              Save
            </button>
          ) : (
            <button
              className="mb-4 bg-purple-800 text-white rounded-md py-2 px-4 hover:bg-purple-950"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
          <button
            className="mb-4 ml-12 bg-purple-800 text-white rounded-md py-2 px-4 hover:bg-purple-950"
            onClick={handleEditClick}
          >
            Generate resume✨
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="introduction"
          >
            Introduction
          </label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="education"
          >
            Education
          </label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="companySizePreference"
          >
            Working style
          </label>
          <select
            id="workingStyles"
            name="workingStyles"
            value={formData.workingStyles}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          >
            <option value="Remote">Remote</option>
            <option value="OnSite">On Site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="problemSolving"
          >
            How do you to like to approach problems?
          </label>
          <textarea
            id="problemSolving"
            name="problemSolving"
            value={formData.problemSolving}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="companySizePreference"
          >
            Preferred Company Size
          </label>
          <select
            id="companySizePreference"
            name="companySizePreference"
            value={formData.companySizePreference}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="additionalInfo"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-md p-2 ${
              !isEditing ? "cursor-not-allowed" : ""
            }`}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-purple-800 text-xl font-semibold mb-2"
            htmlFor="projects"
          >
            Projects
          </label>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={`projectName${index}`}
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Project Name
              </label>
              <input
                type="text"
                id={`projectName${index}`}
                name="projectName"
                value={project.projectName}
                onChange={(e) => handleProjectChange(e, index)}
                className={`w-full border border-gray-300 rounded-md p-2 ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
                disabled={!isEditing}
              />
              <label
                htmlFor={`projectDescription${index}`}
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Project Description
              </label>
              <textarea
                id={`projectDescription${index}`}
                name="projectDescription"
                value={project.projectDescription}
                onChange={(e) => handleProjectChange(e, index)}
                className={`w-full border border-gray-300 rounded-md p-2 ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
                disabled={!isEditing}
              />
              {isEditing && (
                <button
                  className="text-red-500 ml-2"
                  onClick={() => deleteProjectRow(index)}
                >
                  Remove Project
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              className="bg-purple-800 text-white rounded-md py-2 px-4 hover:bg-purple-950"
              onClick={addProjectRow}
            >
              Add Project
            </button>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-purple-800 text-xl font-semibold mb-2"
            htmlFor="experiences"
          >
            Experiences
          </label>
          {formData.experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={`jobTitle${index}`}
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id={`jobTitle${index}`}
                name="jobTitle"
                value={experience.jobTitle}
                onChange={(e) => handleExperienceChange(e, index)}
                className={`w-full border border-gray-300 rounded-md p-2 ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
                disabled={!isEditing}
              />
              <label
                htmlFor={`company${index}`}
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id={`company${index}`}
                name="company"
                value={experience.company}
                onChange={(e) => handleExperienceChange(e, index)}
                className={`w-full border border-gray-300 rounded-md p-2 ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
                disabled={!isEditing}
              />
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor={`startDate${index}`}
                    className="block text-gray-600 text-sm font-semibold mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id={`startDate${index}`}
                    name="startDate"
                    value={experience.startDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className={`w-full border border-gray-300 rounded-md p-2 ${
                      !isEditing ? "cursor-not-allowed" : ""
                    }`}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`endDate${index}`}
                    className="block text-gray-600 text-sm font-semibold mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id={`endDate${index}`}
                    name="endDate"
                    value={experience.endDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className={`w-full border border-gray-300 rounded-md p-2 ${
                      !isEditing ? "cursor-not-allowed" : ""
                    }`}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <label
                htmlFor={`experienceDescription${index}`}
                className="block text-gray-600 text-sm font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id={`experienceDescription${index}`}
                name="experienceDescription"
                value={experience.description}
                onChange={(e) => handleExperienceChange(e, index)}
                className={`w-full border border-gray-300 rounded-md p-2 ${
                  !isEditing ? "cursor-not-allowed" : ""
                }`}
                disabled={!isEditing}
              />
              {isEditing && (
                <button
                  className="text-red-500 ml-2"
                  onClick={() => deleteExperienceRow(index)}
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              className="bg-purple-800 text-white rounded-md py-2 px-4 hover-bg-purple-950"
              onClick={addExperienceRow}
            >
              Add Experience
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
