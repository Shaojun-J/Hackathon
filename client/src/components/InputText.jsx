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
      <div className="overlap-4">
        <form onSubmit={handleSubmit}>
          <textarea
            className="text-input" // Add a CSS class for styling if needed
            name="post"
            placeholder="Enter post..."
            onChange={handleChange}
            value={formData.post}
            rows="5"
            cols="50"
          />
          <button type="submit" className="check-button">
            Check
          </button>
        </form>
        {isReportVisible && (
          <Report data={response} onClose={handleCloseReport} />
        )}
      </div>
    </>
  );
};

export default InputText;
