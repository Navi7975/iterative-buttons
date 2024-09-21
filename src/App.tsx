import React from 'react';
import './AssessmentFlow.css';


const App: React.FC = () => {
  return (
    <div className="main-container">
      <div className="container container1">
        <button className="center-button">Take Assessment </button>
      </div>
      <div className="container container2">
        <button className="left-button">Awaiting Feedback: Faculty</button>
        <button className="right-button">Awaiting Feedback: Industry</button>
      </div>
      <div className="container container3">
        <button className="center-button">Generate Report</button>
      </div>
    </div>
  );
};

export default App;
