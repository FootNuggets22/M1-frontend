import React, { useState } from 'react';
import ImageUpload from './ImageUpload.jsx';
import ImagePreview from './ImagePreview.jsx';
import PredictionResult from './PredictionResult.jsx';
import Navbar from '../frontendcomponents/Navbar.jsx';

function Uploaded() {
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
      if (data.predictions?.length > 0) {
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
      <Navbar />
      <div className="centered-tan-box">
        <h1>Car Type Classifier</h1>
        <ImageUpload onChange={handleImageChange} onUpload={handleUpload} />
        <ImagePreview preview={preview} />
        <PredictionResult result={result} />
      </div>
    </div>
  );
}

export default Uploaded;

