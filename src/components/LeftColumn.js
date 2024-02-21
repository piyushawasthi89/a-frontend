// LeftColumn.js
import React from 'react';

const LeftColumn = ({ function_options, function_versions, selected_function_name, selected_function_version, onSelectFunctionName, onSelectFunctionVersion, jsonData }) => {
  return (
    <div className="left-column">
        <label htmlFor="dropdown1">Select Function: </label>
        <select id="dropdown1" value={selected_function_name} onChange={(e) => onSelectFunctionName(e.target.value)}>
            {function_options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <br/>
        <label htmlFor="dropdown2">Select Version: </label>
        <select id="dropdown2" value={selected_function_version} onChange={(e) => onSelectFunctionVersion(e.target.value)}>
            {function_versions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
            ))}
        </select>

        <div>
          Updated Problem Statement: {jsonData.updated_prompt}
        </div>
    </div>
  );
};

export default LeftColumn;
