import React from "react";
import "./ComponentStyles.css";

function ImageUpload({ onChange, onUpload }) {
  return (
    <form onSubmit={onUpload} className="upload-form">
      <label className="custom-file-upload">
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          required
        />
        Choose File
      </label>
      <button type="submit">Upload and Predict</button>
    </form>
  );
}

export default ImageUpload;
