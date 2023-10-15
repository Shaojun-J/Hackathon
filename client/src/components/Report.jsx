import React from "react";

function Report({ data, onClose }) {
  const nestedData = data.data;

  const assessments = nestedData.assessments.map((assessment, index) => (
    <li key={index} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{assessment.title}</h3>
      <p className="text-gray-700">{assessment.content}</p>
    </li>
  ));

  const recommendations = nestedData.recommendations.map(
    (recommendation, index) => (
      <li key={index} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{recommendation.title}</h3>
        <p className="text-gray-700">{recommendation.content}</p>
      </li>
    )
  );

  const getClassNameByRiskLevel = (riskLevel) => {
    switch (riskLevel) {
      case 'Low Risk':
        return 'bg-green-500 text-white';
      case 'Medium Risk':
        return 'bg-yellow-500 text-black';
      case 'High Risk':
        return 'bg-red-500 text-white';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-700 bg-opacity-50 z-50">
      <div className="popup bg-white p-8 rounded-lg shadow-xl w-3/4 max-w-2xl">
        <button onClick={onClose} className="absolute top-2 right-2 p-2 rounded bg-red-500 text-sm text-white hover:bg-red-600">
          Close
        </button>

        <div className={`mt-8 p-4 rounded ${getClassNameByRiskLevel(nestedData.riskLevel)}`}>
          <h2 className="text-xl font-bold mb-4">{nestedData.riskLevel}</h2>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Assessments</h2>
          <ul className="list-disc pl-6">{assessments}</ul>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Recommendations</h2>
          <ul className="list-disc pl-6">{recommendations}</ul>
        </div>
      </div>
    </div>

  );
}

export default Report;
