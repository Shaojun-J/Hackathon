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

  const getClassNameByRiskLevel = (riskLevel) => {
    switch (riskLevel) {
        case 'Low Risk':
          return 'low-risk';
        case 'Medium Risk':
          return 'medium-risk';
        case 'High Risk':
          return 'high-risk';
        default:
          return '';
      }
    };

  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <div className={getClassNameByRiskLevel(nestedData.riskLevel)}>
        <h2>{nestedData.riskLevel}</h2>
      </div>

    <div className="assessments">
      <h2>Assessments</h2>
      <ul>{assessments}</ul>
    </div>

    <div className="recommendations">
      <h2>Recommendations</h2>
      <ul>{recommendations}</ul>
    </div>
    </div>
  );
}

export default Report;
