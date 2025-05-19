import React from 'react';
import './ComponentStyles.css';

function PredictionResult({ result }) {
  // Render a div with a class of 'result' containing the result text
  return <div className="result">{result}</div>;
}

export default PredictionResult;