import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import PredictionResult from "../src/components/PredictionResullt";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    setResult('Processing...');

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.predictions && data.predictions.length > 0) {
        const top = data.predictions[0];
        setResult(`Prediction: ${top.tagName} (${(top.probability * 100).toFixed(2)}%)`);
      } else {
        setResult('No prediction received.');
      }
    } catch (err) {
      console.error(err);
      setResult('Error occurred during prediction.');
    }
  };

  return (
    <div className="app">
      <h1>Car Type Classifier</h1>
      <ImageUpload onChange={handleImageChange} onUpload={handleUpload} />
      <ImagePreview preview={preview} />
      <PredictionResult result={result} />
    </div>
  );
}

export default App;
