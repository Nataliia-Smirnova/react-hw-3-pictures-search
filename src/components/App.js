import React from 'react';
import PhotoApi from '../services/photo-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import '../styles.css';

// 17889682-7384d09bbfdcaf741bb48a713
// https://pixabay.com/api/?key=17889682-7384d09bbfdcaf741bb48a713&q=yellow+flowers&per_page=12&page=1

class App extends React.Component {
  state = {
    photos: [],
    page: 1,
    newQuery: '',
    isLoading: false,
    showModal: false,
    currentPhoto: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newQuery !== this.state.newQuery) {
      this.fetchPhotos();
    }
    this.scroll();
  }

  scroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchPhotos = () => {
    const { page, newQuery } = this.state;
    const options = { page, newQuery };

    this.setState({ isLoading: true });

    PhotoApi.fetchPhotos(options)
      .then(response =>
        this.setState(prevState => ({
          photos: [...prevState.photos, ...response.data.hits],
          page: prevState.page + 1,
        })),
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = query => {
    this.setState({ newQuery: query, page: 1, photos: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = src => {
    this.setState({ currentPhoto: src });
    this.toggleModal();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery photos={this.state.photos} openModal={this.openModal} />
        {this.state.isLoading && <Loader />}
        {this.state.photos.length > 0 && !this.state.isLoading && (
          <Button fetchPhotos={this.fetchPhotos} />
        )}
        {this.state.showModal && (
          <Modal src={this.state.currentPhoto} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
