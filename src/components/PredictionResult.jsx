import React from 'react';
import './ComponentStyles.css';

function PredictionResult({ result }) {
  // Renders a div that says the results
  return <div className="result">{result}</div>;
}

export default PredictionResult;