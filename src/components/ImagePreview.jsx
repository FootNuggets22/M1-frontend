import React from 'react';
import './ComponentStyles.css';

function ImagePreview({ preview }) {
  if (!preview) return null;
  return <img src={preview} alt="Preview" className="preview" />;
}

export default ImagePreview;
