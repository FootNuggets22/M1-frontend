import React from "react";
import "./ComponentStyles.css";

function ImageUpload({ onChange, onUpload }) {
  return (
    // Form handles the submission of the selected image
    <form onSubmit={onUpload} className="upload-form">
      
      {/* Custom styled file input */}
      <label className="custom-file-upload">
        <input
          type="file"
          accept="image/*"//restricts it so only images can be submitted
          onChange={onChange}//onChange triggers the handler when a file is chosen
          required
        />
        Choose File {/* Text shown as a styled button */}
      </label>

      {/* Submit button triggers the onUpload function */}
      <button type="submit">Upload and Predict</button>
    </form>
  );
}

export default ImageUpload;