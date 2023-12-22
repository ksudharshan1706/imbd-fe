import { useState, useEffect } from "react";

import { Box, styled } from "@mui/material";

import { getCategoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constants";

// components
import Header from "../component/common/header/Header";
import Banner from "../component/Banner";
import UpNext from "../component/UpNext";
import Slides from "../component/Slides";

const Container = styled(Box)`
  padding: 0 115px !important;
  padding: 20px;
`;

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await getCategoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <h3
          style={{
            color: "white",
            fontFamily: "sans-serif",
            marginLeft: "0px",
            paddingLeft: "0px",
          }}
        >
          Favorites Movies
        </h3>
        <Slides movies={movies} />

        <br />
        <h3
          style={{
            color: "white",
            fontFamily: "sans-serif",
            marginLeft: "0px",
            paddingLeft: "0px",
          }}
        >
          Latest Movies
        </h3>
        <Slides movies={movies} />
      </Container>
    </>
  );
};

export default Home;
