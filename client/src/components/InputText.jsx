import React, { useState } from "react";
import Report from "./Report";

const InputText = () => {
  const [formData, setFormData] = useState({ post: "" });
  const [response, setResponse] = useState(null);
  const [isReportVisible, setReportVisible] = useState(false);

  // Define the input change handler function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // send out inputText to the backend server through an post request
    e.preventDefault();

    const res = await fetch("http://localhost:9000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setResponse(data);
    setReportVisible(true);
  };

  const handleCloseReport = () => {
    setReportVisible(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div class="flex border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <textarea
            id="message"
            className="flex-grow px-4 py-2 text-sm text-gray-900 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none"
            name="post"
            placeholder="Enter your post here..."
            onChange={handleChange}
            value={formData.post}
            rows="5"
          />

          <button type="submit" class="px-4 py-2 text-xs font-medium text-center text-white bg-blue-400 rounded-r-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-500 hover:bg-blue-500 focus:outline-none">
            Check
          </button>
        </div>
      </form>

      {isReportVisible && (
        <Report data={response} onClose={handleCloseReport} />
      )}
    </>
  );
};

export default InputText;
