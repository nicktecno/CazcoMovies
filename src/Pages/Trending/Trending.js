import axios from "axios";
import { useEffect, useState } from "react";
import FileList from "../../components/FileList/FileList";
import { ContainerGeneralPages } from "../GeneralStyledComponents/GeneralStyledPages";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const results = data.results;
    const resultsFormatted = results.splice(0, 10);
    console.log(resultsFormatted);

    setContent(resultsFormatted);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">Top 10 Trending</span>
      <ContainerGeneralPages className="trending">
        {content &&
          content.map((contentFile) => (
            <FileList
              key={contentFile.id}
              id={contentFile.id}
              poster={contentFile.poster_path}
              title={contentFile.title || contentFile.name}
              date={contentFile.first_air_date || contentFile.release_date}
              media_type={contentFile.media_type}
              vote_average={contentFile.vote_average}
            />
          ))}
      </ContainerGeneralPages>
    </div>
  );
};

export default Trending;
