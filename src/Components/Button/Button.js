import React from "react";
// import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ loadMore }) => {
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: "smooth",
  // });

  return <button className="Button" onClick={loadMore}>Load more</button>;
};

export default Button;

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// };
