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
          style={{
            backgroundColor: feedbackClicked ? 'green' : '#2e6ca6',
            boxShadow:'0 4px 8px rgb(0,0,0)',
              
          }}
          onClick={handleAssessmentClick}
        >
          Take Assessment
        </button>


        <svg className=" mt-2 mb-2 w-[65px] h-[55px]" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="arrows">
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=".5 5.5 .5 8 8 15.5 15.5 8 15.5 5.5 8 13" className="colorStroke000000 svgStroke"></polygon>
            <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.3 6.7 15.5 .5 15.5 3 8 10.5 .5 3 .5 .5 8 8"></polyline>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <path d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3L0.9,5.1C0.7,5,0.5,5,0.3,5C0.1,5.1,0,5.3,0,5.5V8
		c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5C7.7,16,7.9,16,8,16s0.3,0,0.4-0.1l7.5-7.5C15.9,8.3,16,8.1,16,8V5.5C16,5.3,15.9,5.1,15.7,5z
		 M15,7.8l-7,7l-7-7V6.7l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0L15,6.7V7.8z" fill="#060000" className="color000000 svgShape"></path>
            <path d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8.9,6.4c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0L15,1.7v1.1l-7,7l-7-7V1.7
		l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7L0.9,0.1C0.7,0,0.5,0,0.3,0C0.1,0.1,0,0.3,0,0.5V3c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5
		C7.7,11,7.9,11,8,11s0.3,0,0.4-0.1l7.5-7.5C15.9,3.3,16,3.1,16,3V0.5C16,0.3,15.9,0.1,15.7,0z" fill="#060000" className="color000000 svgShape"></path>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="#110101" points="8 8 2 2 2 4.5 8 10.5 15.5 3 15.5 .5" className="colorf9c00c svgShape"></polygon>
            <polygon fill="#110101" points="8 13 2 7 2 9.5 8 15.5 15.5 8 15.5 5.5" className="colorf9c00c svgShape"></polygon>
            <path fill="#000a0a" d="M8,16c-0.1,0-0.3,0-0.4-0.1L0.1,8.4C0.1,8.3,0,8.1,0,8V5.5C0,5.3,0.1,5.1,0.3,5C0.5,5,0.7,5,0.9,5.1L8,12.3
				l7.1-7.1C15.3,5,15.5,5,15.7,5C15.9,5.1,16,5.3,16,5.5V8c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,16,8.1,16,8,16z M1,7.8l7,7l7-7V6.7
				l-6.6,6.6c-0.2,0.2-0.5,0.2-0.7,0L1,6.7V7.8z" className="color3e3643 svgShape"></path>
            <path fill="#000a0a" d="M8,11c-0.1,0-0.3,0-0.4-0.1L0.1,3.4C0.1,3.3,0,3.1,0,3V0.5C0,0.3,0.1,0.1,0.3,0C0.5,0,0.7,0,0.9,0.1l7.5,7.5
				c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L1,1.7v1.1l7,7l7-7V1.7L9.6,7.1c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l6.3-6.3
				C15.3,0,15.5,0,15.7,0C15.9,0.1,16,0.3,16,0.5V3c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,11,8.1,11,8,11z" className="color3e3643 svgShape"></path>
          </g>
          <g fill="#060000" className="color000000 svgShape">
            <path fill="#000808" d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3V16c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,8.3,16,8.1,16,8V5.5
				C16,5.3,15.9,5.1,15.7,5z" className="color27a7c4 svgShape"></path>
            <path fill="#00000a" d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8,7.3V11c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,3.3,16,3.1,16,3V0.5
				C16,0.3,15.9,0.1,15.7,0z" className="color3bb3e3 svgShape"></path>
            <path fill="#000608" d="M0.8,5.1C0.7,5,0.5,5,0.3,5S0,5.3,0,5.5V8c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,16,7.9,16,8,16v-3.7L0.8,5.1z" className="color36b6dd svgShape"></path>
            <path fill="#00070a" d="M0.8,0.1C0.7,0,0.5,0,0.3,0S0,0.3,0,0.5V3c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,11,7.9,11,8,11V7.3L0.8,0.1z" className="color4fc6f5 svgShape"></path>
          </g>
        </svg>

      </div>

      <div className="flow-item">
        <button
          className="flow-button"
          style={{ backgroundColor: feedbackClicked ? 'green' : '#2e6ca6',boxShadow:'0 4px 8px rgb(0,0,0)', }}
          onClick={handleFeedbackClick}
        >
          Take Feedback
        </button>




        <svg className=" mt-2 mb-2 w-[65px] h-[55px]" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="arrows">
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=".5 5.5 .5 8 8 15.5 15.5 8 15.5 5.5 8 13" className="colorStroke000000 svgStroke"></polygon>
            <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.3 6.7 15.5 .5 15.5 3 8 10.5 .5 3 .5 .5 8 8"></polyline>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <path d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3L0.9,5.1C0.7,5,0.5,5,0.3,5C0.1,5.1,0,5.3,0,5.5V8
		c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5C7.7,16,7.9,16,8,16s0.3,0,0.4-0.1l7.5-7.5C15.9,8.3,16,8.1,16,8V5.5C16,5.3,15.9,5.1,15.7,5z
		 M15,7.8l-7,7l-7-7V6.7l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0L15,6.7V7.8z" fill="#060000" className="color000000 svgShape"></path>
            <path d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8.9,6.4c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0L15,1.7v1.1l-7,7l-7-7V1.7
		l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7L0.9,0.1C0.7,0,0.5,0,0.3,0C0.1,0.1,0,0.3,0,0.5V3c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5
		C7.7,11,7.9,11,8,11s0.3,0,0.4-0.1l7.5-7.5C15.9,3.3,16,3.1,16,3V0.5C16,0.3,15.9,0.1,15.7,0z" fill="#060000" className="color000000 svgShape"></path>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="#110101" points="8 8 2 2 2 4.5 8 10.5 15.5 3 15.5 .5" className="colorf9c00c svgShape"></polygon>
            <polygon fill="#110101" points="8 13 2 7 2 9.5 8 15.5 15.5 8 15.5 5.5" className="colorf9c00c svgShape"></polygon>
            <path fill="#000a0a" d="M8,16c-0.1,0-0.3,0-0.4-0.1L0.1,8.4C0.1,8.3,0,8.1,0,8V5.5C0,5.3,0.1,5.1,0.3,5C0.5,5,0.7,5,0.9,5.1L8,12.3
				l7.1-7.1C15.3,5,15.5,5,15.7,5C15.9,5.1,16,5.3,16,5.5V8c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,16,8.1,16,8,16z M1,7.8l7,7l7-7V6.7
				l-6.6,6.6c-0.2,0.2-0.5,0.2-0.7,0L1,6.7V7.8z" className="color3e3643 svgShape"></path>
            <path fill="#000a0a" d="M8,11c-0.1,0-0.3,0-0.4-0.1L0.1,3.4C0.1,3.3,0,3.1,0,3V0.5C0,0.3,0.1,0.1,0.3,0C0.5,0,0.7,0,0.9,0.1l7.5,7.5
				c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L1,1.7v1.1l7,7l7-7V1.7L9.6,7.1c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l6.3-6.3
				C15.3,0,15.5,0,15.7,0C15.9,0.1,16,0.3,16,0.5V3c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,11,8.1,11,8,11z" className="color3e3643 svgShape"></path>
          </g>
          <g fill="#060000" className="color000000 svgShape">
            <path fill="#000808" d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3V16c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,8.3,16,8.1,16,8V5.5
				C16,5.3,15.9,5.1,15.7,5z" className="color27a7c4 svgShape"></path>
            <path fill="#00000a" d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8,7.3V11c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,3.3,16,3.1,16,3V0.5
				C16,0.3,15.9,0.1,15.7,0z" className="color3bb3e3 svgShape"></path>
            <path fill="#000608" d="M0.8,5.1C0.7,5,0.5,5,0.3,5S0,5.3,0,5.5V8c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,16,7.9,16,8,16v-3.7L0.8,5.1z" className="color36b6dd svgShape"></path>
            <path fill="#00070a" d="M0.8,0.1C0.7,0,0.5,0,0.3,0S0,0.3,0,0.5V3c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,11,7.9,11,8,11V7.3L0.8,0.1z" className="color4fc6f5 svgShape"></path>
          </g>
        </svg>

      </div>

      <div className="flow-item">
        <p className="flow-paragraph" style={{ backgroundColor: paraColor, boxShadow:'0 4px 8px rgb(0,0,0)', }}>
          Awaiting Feedback: Faculty
        </p>




        <svg className=" mt-2 mb-2 w-[65px] h-[55px]" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="arrows">
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=".5 5.5 .5 8 8 15.5 15.5 8 15.5 5.5 8 13" className="colorStroke000000 svgStroke"></polygon>
            <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.3 6.7 15.5 .5 15.5 3 8 10.5 .5 3 .5 .5 8 8"></polyline>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <path d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3L0.9,5.1C0.7,5,0.5,5,0.3,5C0.1,5.1,0,5.3,0,5.5V8
		c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5C7.7,16,7.9,16,8,16s0.3,0,0.4-0.1l7.5-7.5C15.9,8.3,16,8.1,16,8V5.5C16,5.3,15.9,5.1,15.7,5z
		 M15,7.8l-7,7l-7-7V6.7l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0L15,6.7V7.8z" fill="#060000" className="color000000 svgShape"></path>
            <path d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8.9,6.4c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0L15,1.7v1.1l-7,7l-7-7V1.7
		l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7L0.9,0.1C0.7,0,0.5,0,0.3,0C0.1,0.1,0,0.3,0,0.5V3c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5
		C7.7,11,7.9,11,8,11s0.3,0,0.4-0.1l7.5-7.5C15.9,3.3,16,3.1,16,3V0.5C16,0.3,15.9,0.1,15.7,0z" fill="#060000" className="color000000 svgShape"></path>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="#110101" points="8 8 2 2 2 4.5 8 10.5 15.5 3 15.5 .5" className="colorf9c00c svgShape"></polygon>
            <polygon fill="#110101" points="8 13 2 7 2 9.5 8 15.5 15.5 8 15.5 5.5" className="colorf9c00c svgShape"></polygon>
            <path fill="#000a0a" d="M8,16c-0.1,0-0.3,0-0.4-0.1L0.1,8.4C0.1,8.3,0,8.1,0,8V5.5C0,5.3,0.1,5.1,0.3,5C0.5,5,0.7,5,0.9,5.1L8,12.3
				l7.1-7.1C15.3,5,15.5,5,15.7,5C15.9,5.1,16,5.3,16,5.5V8c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,16,8.1,16,8,16z M1,7.8l7,7l7-7V6.7
				l-6.6,6.6c-0.2,0.2-0.5,0.2-0.7,0L1,6.7V7.8z" className="color3e3643 svgShape"></path>
            <path fill="#000a0a" d="M8,11c-0.1,0-0.3,0-0.4-0.1L0.1,3.4C0.1,3.3,0,3.1,0,3V0.5C0,0.3,0.1,0.1,0.3,0C0.5,0,0.7,0,0.9,0.1l7.5,7.5
				c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L1,1.7v1.1l7,7l7-7V1.7L9.6,7.1c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l6.3-6.3
				C15.3,0,15.5,0,15.7,0C15.9,0.1,16,0.3,16,0.5V3c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,11,8.1,11,8,11z" className="color3e3643 svgShape"></path>
          </g>
          <g fill="#060000" className="color000000 svgShape">
            <path fill="#000808" d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3V16c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,8.3,16,8.1,16,8V5.5
				C16,5.3,15.9,5.1,15.7,5z" className="color27a7c4 svgShape"></path>
            <path fill="#00000a" d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8,7.3V11c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,3.3,16,3.1,16,3V0.5
				C16,0.3,15.9,0.1,15.7,0z" className="color3bb3e3 svgShape"></path>
            <path fill="#000608" d="M0.8,5.1C0.7,5,0.5,5,0.3,5S0,5.3,0,5.5V8c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,16,7.9,16,8,16v-3.7L0.8,5.1z" className="color36b6dd svgShape"></path>
            <path fill="#00070a" d="M0.8,0.1C0.7,0,0.5,0,0.3,0S0,0.3,0,0.5V3c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,11,7.9,11,8,11V7.3L0.8,0.1z" className="color4fc6f5 svgShape"></path>
          </g>
        </svg>


      </div>

      <div className="flow-item" style={{ borderRadius: '50px', }}>
        <p className="flow-paragraph" style={{ backgroundColor: paraColor,boxShadow:'0 4px 8px rgb(0,0,0)', }}>
          Awaiting Feedback: Industry
        </p>



        <svg className=" mt-2 mb-2 w-[65px] h-[55px]" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="arrows">
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points=".5 5.5 .5 8 8 15.5 15.5 8 15.5 5.5 8 13" className="colorStroke000000 svgStroke"></polygon>
            <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9.3 6.7 15.5 .5 15.5 3 8 10.5 .5 3 .5 .5 8 8"></polyline>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <path d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3L0.9,5.1C0.7,5,0.5,5,0.3,5C0.1,5.1,0,5.3,0,5.5V8
		c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5C7.7,16,7.9,16,8,16s0.3,0,0.4-0.1l7.5-7.5C15.9,8.3,16,8.1,16,8V5.5C16,5.3,15.9,5.1,15.7,5z
		 M15,7.8l-7,7l-7-7V6.7l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0L15,6.7V7.8z" fill="#060000" className="color000000 svgShape"></path>
            <path d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8.9,6.4c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0L15,1.7v1.1l-7,7l-7-7V1.7
		l6.6,6.6c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7L0.9,0.1C0.7,0,0.5,0,0.3,0C0.1,0.1,0,0.3,0,0.5V3c0,0.1,0.1,0.3,0.1,0.4l7.5,7.5
		C7.7,11,7.9,11,8,11s0.3,0,0.4-0.1l7.5-7.5C15.9,3.3,16,3.1,16,3V0.5C16,0.3,15.9,0.1,15.7,0z" fill="#060000" className="color000000 svgShape"></path>
          </g>
          <g display="none" fill="#060000" className="color000000 svgShape">
            <polygon fill="#110101" points="8 8 2 2 2 4.5 8 10.5 15.5 3 15.5 .5" className="colorf9c00c svgShape"></polygon>
            <polygon fill="#110101" points="8 13 2 7 2 9.5 8 15.5 15.5 8 15.5 5.5" className="colorf9c00c svgShape"></polygon>
            <path fill="#000a0a" d="M8,16c-0.1,0-0.3,0-0.4-0.1L0.1,8.4C0.1,8.3,0,8.1,0,8V5.5C0,5.3,0.1,5.1,0.3,5C0.5,5,0.7,5,0.9,5.1L8,12.3
				l7.1-7.1C15.3,5,15.5,5,15.7,5C15.9,5.1,16,5.3,16,5.5V8c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,16,8.1,16,8,16z M1,7.8l7,7l7-7V6.7
				l-6.6,6.6c-0.2,0.2-0.5,0.2-0.7,0L1,6.7V7.8z" className="color3e3643 svgShape"></path>
            <path fill="#000a0a" d="M8,11c-0.1,0-0.3,0-0.4-0.1L0.1,3.4C0.1,3.3,0,3.1,0,3V0.5C0,0.3,0.1,0.1,0.3,0C0.5,0,0.7,0,0.9,0.1l7.5,7.5
				c0.2,0.2,0.2,0.5,0,0.7s-0.5,0.2-0.7,0L1,1.7v1.1l7,7l7-7V1.7L9.6,7.1c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l6.3-6.3
				C15.3,0,15.5,0,15.7,0C15.9,0.1,16,0.3,16,0.5V3c0,0.1-0.1,0.3-0.1,0.4l-7.5,7.5C8.3,11,8.1,11,8,11z" className="color3e3643 svgShape"></path>
          </g>
          <g fill="#060000" className="color000000 svgShape">
            <path fill="#000808" d="M15.7,5c-0.2-0.1-0.4,0-0.5,0.1L8,12.3V16c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,8.3,16,8.1,16,8V5.5
				C16,5.3,15.9,5.1,15.7,5z" className="color27a7c4 svgShape"></path>
            <path fill="#00000a" d="M15.7,0c-0.2-0.1-0.4,0-0.5,0.1L8,7.3V11c0.1,0,0.3,0,0.3-0.2l7.5-7.5C16,3.3,16,3.1,16,3V0.5
				C16,0.3,15.9,0.1,15.7,0z" className="color3bb3e3 svgShape"></path>
            <path fill="#000608" d="M0.8,5.1C0.7,5,0.5,5,0.3,5S0,5.3,0,5.5V8c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,16,7.9,16,8,16v-3.7L0.8,5.1z" className="color36b6dd svgShape"></path>
            <path fill="#00070a" d="M0.8,0.1C0.7,0,0.5,0,0.3,0S0,0.3,0,0.5V3c0,0.1,0,0.3,0.2,0.3l7.5,7.5C7.7,11,7.9,11,8,11V7.3L0.8,0.1z" className="color4fc6f5 svgShape"></path>
          </g>
        </svg>



      </div>

      <div className="flow-item">
        <button
          className="flow-button"
          style={{ backgroundColor: reportButtonColor, boxShadow:'0 4px 8px rgb(0,0,0)', }}
        >
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Flowchart;
