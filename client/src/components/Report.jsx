import React from "react";

function Report({ data, onClose }) {
  const nestedData = data.data;
  
  const assessments = nestedData.assessments.map((assessment, index) => (
    <li key={index}>
      <h4>{assessment.title}</h4>
      <p>{assessment.content}</p>
    </li>
  ));

  const recommendations = nestedData.recommendations.map(
    (recommendation, index) => (
      <li key={index}>
        <h4>{recommendation.title}</h4>
        <p>{recommendation.content}</p>
      </li>
    )
  );
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <h2>{nestedData.riskLevel}</h2>

      <h3>Assessments</h3>
      <ul>{assessments}</ul>

      <h3>Recommendations</h3>
      <ul>{recommendations}</ul>
    </div>
  );
}

export default Report;
