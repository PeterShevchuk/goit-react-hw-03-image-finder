import React from "react";
// import PropTypes from "prop-types";

import "./ImageGalleryItem.css";

const ImageGalleryItem = ({image,showModal}) => {
  return (
    <li className="ImageGalleryItem" onClick={()=>showModal(image.id)}>
      <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

// Filter.propTypes = {
//   inputHeandlerFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   resetInput: PropTypes.func.isRequired,
// };
