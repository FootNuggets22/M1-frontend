// Imports
import React, { useState } from 'react';
import './Uploaded.css';
import ImageUpload from './ImageUpload'; 
import ImagePreview from './ImagePreview'; 
import PredictionResult from "./PredictionResult";


function Uploaded() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');

  // Function that runs when the user selects an image
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file from the input
    setImage(file); // Save the file in state
    setPreview(URL.createObjectURL(file)); // Generate and set a preview URL for the image
    setResult(''); // Clear any previous result
  };

  // Function that handles image upload and communicates with the backend
  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!image) return; // If no image is selected, do nothing

    const formData = new FormData(); // Create a new FormData object to send the image file
    formData.append('image', image); // Append the image file to the form data

    setResult('Processing...'); // Update UI to show a loading message

    try {
      // Send POST request to the backend server with the image data
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      // Parse the JSON response from the server
      const data = await response.json();

      // Check if predictions are available in the response
      if (data.predictions && data.predictions.length > 0) {
        const top = data.predictions[0]; // Take the top (most confident) prediction
        // Format and display the prediction tag and its confidence percentage
        setResult(`Prediction: ${top.tagName} (${(top.probability * 100).toFixed(2)}%)`);
      } else {
        // If no predictions returned, show a message
        setResult('No prediction received.');
      }
    } catch (err) {
      // Log any errors to the console and update the UI
      console.error(err);
      setResult('Error occurred during prediction.');
    }
  };

  // Render the UI
  return (
    <div className="app">
      <h1>Car Type Classifier</h1>

      {/* Component for selecting and uploading an image */}
      <ImageUpload onChange={handleImageChange} onUpload={handleUpload} />

      {/* Component to show the image preview */}
      <ImagePreview preview={preview} />

      {/* Component to display the result of the prediction */}
      <PredictionResult result={result} />
    </div>
     
  );
}

// Export the App component as the default export
export default Uploaded;
