// Imports
import React, { useState } from 'react';
import ImageUpload from './ImageUpload.jsx';
import ImagePreview from './ImagePreview.jsx';
import PredictionResult from './PredictionResult.jsx';
import Navbar from '../frontendcomponents/Navbar.jsx';

function Uploaded() {
  // Stores the uploaded image file (raw file data)
  const [image, setImage] = useState(null);

  // Stores the preview URL for displaying the image in the browser
  const [preview, setPreview] = useState(null);

  // Stores the result returned from the prediction API
  const [result, setResult] = useState('');

  
   //Handles the image input change event
   //Triggers when the user selects a file
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    setImage(file); // Saves the file to state for upload
    setPreview(URL.createObjectURL(file)); // Create a temporary URL for preview
    setResult(''); // Clear any previous prediction result
  };

   //Handles the image upload to the server and sends the file to a backend endpoint and receives prediction data
  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // If no image is selected, do nothing
    if (!image) return;

    // Create a FormData object to send image as multipart/form-data
    const formData = new FormData();
    formData.append('image', image); // Append image under key 'image'

    // Update result state to indicate that processing has started
    setResult('Processing...');

    try {
      // Make a POST request to the backend with the form data
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      // Parse the JSON response from the server
      const data = await response.json();

      // Check if predictions exist in the response
      if (data.predictions?.length > 0) {
        const top = data.predictions[0]; // Get the top prediction
        // Format the result with tag name and probability
        setResult(`Prediction: ${top.tagName} (${(top.probability * 100).toFixed(2)}%)`);
      } else {
        setResult('No prediction received.');
      }
    } catch (err) {
      // Log any errors to the console for debugging
      console.error(err);
      // Show error message to the user
      setResult('Error occurred during prediction.');
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="centered-tan-box">
        <h1>Car Type Classifier</h1>

        {/* ImageUpload component: file input + upload button */}
        <ImageUpload onChange={handleImageChange} onUpload={handleUpload} />

        {/* ImagePreview component: shows image preview if available */}
        <ImagePreview preview={preview} />

        {/* PredictionResult component: displays prediction or error text */}
        <PredictionResult result={result} />
      </div>
    </div>
  );
}

export default Uploaded;