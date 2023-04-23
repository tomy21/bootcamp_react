import axios from "axios";
// import handlingPagesClick from "../Components/Body/CardBody"

// let handlingPagesClick = data.selected;

export const getMoviesList = async (page) => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?page=${page}&api_key=${process.env.REACT_APP_APIKEY}`,{
      params: {
        limit:5
      }
    }
  );
  console.log({limit: movie.data.results[0]})
  return movie.data.results
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return search.data;
};
