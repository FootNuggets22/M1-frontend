import React from 'react';
import './ComponentStyles.css';

function ImagePreview({ preview }) {
// If there is no preview URL available, don't render anything
if (!preview) return null;

// If a preview URL exists, render an image with that URL
return <img src={preview} alt="Preview" className="preview" />;
}

export default ImagePreview;
