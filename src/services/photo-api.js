import axios from 'axios';

const API_KEY = '17889682-7384d09bbfdcaf741bb48a713';

const fetchPhotos = ({ newQuery = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${newQuery}&per_page=12&page=${page}`,
  );
};

export default { fetchPhotos };
