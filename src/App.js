import './App.css';

import React, { useState, useEffect } from 'react';
import LeftColumn from './components/LeftColumn';
import RightPanel from './components/RightColumn';

const App = () => {
  const [function_function_version, setFuntionToVersionMap] = useState();
  const [function_name_options, setFunctionNameOptions]  = useState([])
  const [function_version_options, setFunctionVersionOptions]  = useState([])
  const [selected_function_name, onSelectFunctionName] = useState();
  const [selected_function_version, onSelectFunctionVersion] = useState();
  const [jsonData, setJsonData] = useState({
    "test": "test"
  });

  const handleSelectOption1 = (value) => {
    onSelectFunctionName(value);
    console.log('Selected Function Options', function_function_version[value] )
    setFunctionVersionOptions(function_function_version[value])
  };

  const handleSelectOption2 = (value) => {
    onSelectFunctionVersion(value);
    fetch(`http://127.0.0.1:8001/get_function?name=${selected_function_name}&&version=${value}`)
      .then(response => response.json())
      .then(data => {
        setJsonData(data)
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8001/")
      .then(response => response.json())
      .then(data => {
        const name_to_versions = {}
        const function_names = []
        data.forEach(item => {
          name_to_versions[item.name] = item.versions
          function_names.push(item.name)
        })
        setFunctionNameOptions(function_names)
        setFuntionToVersionMap(name_to_versions)
        setFunctionVersionOptions(name_to_versions[function_names[0]])
        onSelectFunctionName(function_names[0])
      })
      .catch(error => console.error('Error fetching options:', error));
  }, []);

  return (
    <div className="app">
      <LeftColumn
        function_options={function_name_options}
        function_versions={function_version_options}
        selected_function_name={selected_function_name}
        selected_function_version={selected_function_version}
        onSelectFunctionName={handleSelectOption1}
        onSelectFunctionVersion={handleSelectOption2}
        jsonData={jsonData}
      />
      <RightPanel data={jsonData.function} />
    </div>
  );
};

export default App;
