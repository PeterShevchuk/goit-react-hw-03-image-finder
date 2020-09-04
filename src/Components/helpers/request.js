import axios from "axios";

export const withCreadentials = (filter, page = 1) => {
  return `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${filter}&image_type=photo&orientation=horizontal&per_page=30&page=${page}`;
};

export const request = async (method, url, body = null) => {
  const result = await axios[method](url, body);
  return result.data;
};
