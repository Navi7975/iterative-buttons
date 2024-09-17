import React, { useEffect, useState } from 'react';
import './Flowchart.css';

const Flowchart: React.FC = () => {
  const [assessmentClicked, setAssessmentClicked] = useState(false);
  const [feedbackClicked, setFeedbackClicked] = useState(false);
  const [paraColor, setParaColor] = useState('#2e6ca6'); // Initial color for paragraphs
  const [reportButtonColor, setReportButtonColor] = useState('#2e6ca6'); // Initial color for "Generate Report" button
  const [startTransition, setStartTransition] = useState(false); // To track when both buttons are clicked

  const handleAssessmentClick = () => {
    setAssessmentClicked(true); // Change assessment button color to green
  };

  const handleFeedbackClick = () => {
    setFeedbackClicked(true); // Change feedback button color to green
  };

  useEffect(() => {
    if (assessmentClicked && feedbackClicked) {
      // Both buttons clicked, start paragraph and report button transitions
      setStartTransition(true);
    }
  }, [assessmentClicked, feedbackClicked]);

  useEffect(() => {
    if (startTransition) {
      // Change paragraph color to green after 1 second
      const paragraphTimer = setTimeout(() => {
        setParaColor('green');
      }, 3000);

      // Change "Generate Report" button to green 2 seconds after paragraph turns green
      const reportTimer = setTimeout(() => {
        setReportButtonColor('green');
      }, 5000);

      // Clean up timers
      return () => {
        clearTimeout(paragraphTimer);
        clearTimeout(reportTimer);
      };
    }
  }, [startTransition]);

  return (
    <div className="flowchart-container">
      <div className="flow-item">
        <button
          className="flow-button"
          style={{ backgroundColor: assessmentClicked ? 'green' : '#2e6ca6' }}
          onClick={handleAssessmentClick}
        >
          Take Assessment
        </button>
        <div className="arrow">↓</div>
      </div>

      <div className="flow-item">
        <button
          className="flow-button"
          style={{ backgroundColor: feedbackClicked ? 'green' : '#2e6ca6' }}
          onClick={handleFeedbackClick}
        >
          Take Feedback
        </button>
        <div className="arrow">↓</div>
      </div>

      <div className="flow-item">
        <p className="flow-paragraph" style={{ backgroundColor: paraColor }}>
          Awaiting Feedback from Faculty
        </p>
        <div className="arrow">↓</div>
      </div>

      <div className="flow-item" style={{ borderRadius: '50px',  }}>
        <p className="flow-paragraph" style={{ backgroundColor: paraColor }}>
          Awaiting Feedback from Industry Mentor
        </p>
        <div className="arrow">↓</div>
      </div>

      <div className="flow-item">
        <button
          className="flow-button"
          style={{ backgroundColor: reportButtonColor }}
        >
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Flowchart;
