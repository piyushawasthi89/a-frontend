import React from 'react';
// import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

const RightPanel = ({ data }) => {
  return (
    <div className="right-panel">
      <JsonView src={data} />
    </div>
  );
};

export default RightPanel;
