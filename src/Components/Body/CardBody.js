import '../../style/customStyle.css'
import { getMoviesList, searchMovie } from "../../api/axiosClient";
import { useEffect, useState } from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const CardBody = (i) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMoviesList().then((result) => {
      setPopularMovies(result);
    });
    setLoading(false)
  }, []);

  const handlingPagesClick = (data) => {
    const page = data.selected
    console.log(page)
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }

    if(q.length == 0){
      window.location.reload()
    }
  };

  const PopularMovieList = () => {
    return popularMovies.slice(0,9).map((movie, i) => {
      return (
        <>
        <div className="movie-wrapper" key={movie.i}>
          <img className="movie-image" src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}/>
          <div className="movie-title">{movie.title}</div>
          <div className="movie-date">{movie.release_date}</div>
          <div className="movie-vote"><FaStar className='star'/> {movie.vote_average}</div>
          <div className="price-order">
            <div className="price">
              <div className="harga-coret">
              Rp. 105.000
            </div>
            <div className="harga-net">
              Rp. 73.000
            </div>
            </div>
            <div className="button-cart">
              <FaCartPlus/>
            </div>
          </div>
        </div>
        </>
      );
    });
  };
  console.log({ popularMovies: popularMovies });

  return (
    <>
      <div className="header-content">
        <div className="title-content">
          <h1>List Film</h1>
        </div>
        <div className="search-content">
          <input
            type="text"
            className="search-input"
            placeholder="Cari film disini. . . ."
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>
      <div className="movie-container">
        <PopularMovieList />
      </div>
      <div className="paginate">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={15}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={handlingPagesClick}
          containerClassName="pagination justify-content-end paginate-custome"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </>
  );
};

export default CardBody;
