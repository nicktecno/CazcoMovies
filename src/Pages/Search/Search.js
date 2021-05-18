/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import "./Search.css";
import axios from "axios";
import { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";
import FileList from "../../components/FileList/FileList";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { ContainerGeneralPages } from "../GeneralStyledComponents/GeneralStyledPages";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search" style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            styled={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <FiSearch size="20px" />
          </Button>
        </div>

        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <ContainerGeneralPages className="trending">
        {content &&
          content.map((contentFile) => (
            <FileList
              key={contentFile.id}
              id={contentFile.id}
              poster={contentFile.poster_path}
              title={contentFile.title || contentFile.name}
              date={contentFile.first_air_date || contentFile.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={contentFile.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </ContainerGeneralPages>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
