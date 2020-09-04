import React from "react";
// import PropTypes from "prop-types";

import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ imageGallery, showModal }) => {
  return (
    <ul className="ImageGallery">
      {imageGallery.map((image) => (
        <ImageGalleryItem key={image.id} image={image} showModal={showModal}/>
      ))}
    </ul>
  );
};

export default ImageGallery;

// Phonebook.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
