"use client";

import React, { useState, useEffect } from "react";

const DataFormSubmission = () => {
  const [formSubmissions, setFormSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = localStorage.getItem("formSubmissions");
    if (storedSubmissions) {
      setFormSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  return (
    <div className="mt-[4rem]">
      <p className="ml-5"> Home / Data</p>
      <div className="bg-stone-100 rounded-lg p-5 m-5">
        {formSubmissions.map((submission, index) => (
          <div key={index} className="py-2">
            <p>Form #{index+1}:</p>
            <p>First Name: {submission.firstName}</p>
            <p>Last Name: {submission.lastName}</p>
            <p>Email: {submission.email}</p>
            <hr /> {/* Add a separator line between submissions */}
          </div>
        ))}
      </div>
      <a href="http://localhost:3000/">Return Homepage</a>
    </div>
  );
};

export default DataFormSubmission;
