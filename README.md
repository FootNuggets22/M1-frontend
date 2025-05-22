# Car Type Classifier – React Frontend

This React application is a car type classification web app. It allows users to upload an image of a car, preview it, and send it to a backend service for prediction. The result is then displayed to the user.

## Features

- **Image Upload:** Upload car images from your local device.
- **Live Preview:** Displays the selected image before upload.
- **Prediction Request:** Sends the image to a backend API for classification.
- **Result Display:** Shows the predicted car type and confidence score.

---

## Project Structure
/src
├── frontendcomponents/
│ └── Navbar.jsx
├── Uploaded.jsx ← Main component
├── ImageUpload.jsx
├── ImagePreview.jsx
└── PredictionResult.jsx

---

## Dependencies

- React
- JavaScript ES6+
- A backend prediction server (e.g., built with Express, Flask, etc.)

 ## Example of output

 Prediction: Sedan (87.43%)

