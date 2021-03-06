/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import FileList from "../../components/FileList/FileList";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { ContainerGeneralPages } from "../GeneralStyledComponents/GeneralStyledPages";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <ContainerGeneralPages className="trending">
        {content &&
          content.map((contentFile) => (
            <FileList
              key={contentFile.id}
              id={contentFile.id}
              poster={contentFile.poster_path}
              title={contentFile.title || contentFile.name}
              date={contentFile.first_air_date || contentFile.release_date}
              media_type="movie"
              vote_average={contentFile.vote_average}
            />
          ))}
      </ContainerGeneralPages>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
