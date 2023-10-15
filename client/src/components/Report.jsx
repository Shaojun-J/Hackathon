import React from "react";

const Report = ({ data, onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Report;
