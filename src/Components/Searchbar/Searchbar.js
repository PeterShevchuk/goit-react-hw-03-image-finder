import React, { Component } from "react";
// import PropTypes from "prop-types";

import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    filter: "",
  };
  inputHeandlerFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  searchSubmit = (e) => {
    e.preventDefault();
    if (this.state.filter === "") {
      alert("Введіть текс пошуку");
      return;
    }
    this.props.getImages(this.state);
  };
  render() {
    const { filter } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.searchSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input className="SearchForm-input" name="text" type="text" onChange={(e) => this.inputHeandlerFilter(e)} placeholder="Search images and photos" value={filter} />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// Сontacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   removeContact: PropTypes.func.isRequired,
// };
