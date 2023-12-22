import { Typography, Box, styled } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./upnext.css";

const Component = styled(Box)`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 20px;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled(Box)`
  //   background-color: grey;
  margin: 10px;
  width: 300px;
  color: #ffffff;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;

const Poster = styled("img")({
  width: 88,
});

const UpNext = ({ movies }) => {
  console.log(movies);
  return (
    <Component>
      <Typography>Up next</Typography>
      {movies.splice(0, 3).map((movie) => (
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="poster"
          />
          <Typography
            style={{
              marginTop: "0px",
              display: "flex",
              //   justifyContent: "center",
              alignItems: "start",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <PlayCircleOutlineIcon className="play" />
            <h4 style={{ margin: "0px" }}>{movie.original_title}</h4>
          </Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default UpNext;
