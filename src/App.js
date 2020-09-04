import React, { Fragment, Component } from "react";
import "./App.css";

import Loader from "react-loader-spinner";

import { withCreadentials, request } from "./Components/helpers/request";
import Button from "./Components/Button/Button";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  state = {
    imageGallery: [],
    ImageModal: {},
    totalPages: 0,
    totalImages: 0,
    page: 1,
    filter: "",
    loader: false,
  };
  componentDidMount(){
    document.addEventListener("keydown", this.keyUp, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyUp, false);
  }
  keyUp = (e) => {
    if(e.keyCode === 27) {this.closeModal()}
  }
  getImages = async ({ filter }) => {
    if (filter === this.state.filter) {return;}
    const result = await request("get", withCreadentials(filter, 1));
    this.setState({ imageGallery: result.hits, totalPages: result.totalHits, totalImages: result.total, page: 1, filter: filter});
  };
  loadMore = async () => {
    let page = (this.state.page += 1);
    const result = await request("get", withCreadentials(this.state.filter, page));
    await this.setState((prev) => ({ imageGallery: [...prev.imageGallery, ...result.hits], page: page}));
    this.scrollPage();
  };
  showModal = (id) => {
    this.setState((prev) => ({ ImageModal: prev.imageGallery.find(image=> image.id === id)}));
  }
  closeModal = () => {
    this.setState({ ImageModal: {}});
  }
  scrollPage = () => {
    window.scrollTo(0, 0);
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: "smooth",
    });

  }
  render() {
    const { totalPages, imageGallery, loader, ImageModal } = this.state;
    return (
      <Fragment>
        <Searchbar getImages={this.getImages} />
        {Object.keys(ImageModal).length? <Modal ImageModal={ImageModal} closeModal={this.closeModal}/> : null}
        {imageGallery && <ImageGallery imageGallery={imageGallery} showModal={this.showModal}/>}
        {loader && <span className="loader"><Loader type="Audio" color="#00BFFF" height={300} width={300}/></span>}
        {imageGallery.length && imageGallery.length !== totalPages ? <Button loadMore={this.loadMore} /> : null}
      </Fragment>
    );
  }
}

export default App;
