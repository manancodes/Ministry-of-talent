import React, { useState } from "react";
import EditProfile from "./EditProfile";

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Details", content: <EditProfile /> },
    {
      id: 2,
      title: "MOT Profile",
      content:
        "This page will have a Ministry of Talent profile created using AI which can be used to apply for jobs. It will be ATS friendly and will increase the chances of application shortlisting which is the painpoint of most of the aspiring developers.",
    },
  ];

  return (
    <div className="w-2/3 mx-auto mt-10">
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "bg-purple-800 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-lg`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id ? "block" : "hidden"
            } p-4 border border-gray-300 rounded-lg`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabLayout;
