import React from 'react';
import './ComponentStyles.css';

function ImageUpload({ onChange, onUpload }) {
  return (
    <form onSubmit={onUpload} className="upload-form">
      <input type="file" accept="image/*" onChange={onChange} required />
      <button type="submit">Upload and Predict</button>
    </form>
  );
}

export default ImageUpload;
