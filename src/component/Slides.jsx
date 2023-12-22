import Carousel from "react-multi-carousel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Typography, styled } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./slides.css";
const StyledBanner = styled("img")({
  width: "100%",
  height: "300px",
  objectFit: "cover",
});

const Title = styled(Typography)`
  color: #ffffff;
  display: flex;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slides = ({ movies }) => {
  //   console.log(movies);
  return (
    <Box style={{ marginTop: 20 }}>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map((movie) => (
          <div className="card">
            {/* <> */}
            <StyledBanner
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <>⭐ {movie.vote_average.toFixed(1)}</>
                <StarBorderIcon />
              </div>
              <Title
                style={{
                  margin: "10px 0px 0px 10px",
                  height: "30px",
                  alignContent: "center",
                }}
              >
                <>{movie.original_title}</>
              </Title>
              {/* <Button variant="outlined">watch options</Button> */}
              <br />
              <button
                style={{
                  width: "200px",
                  height: "40px",
                  backgroundColor: "rgba(72, 71, 71, 0.471)",
                  color: "#5799EF",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                Watch Options
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <PlayArrowIcon style={{ color: "white" }} />
                  <h5>Trailer</h5>
                </div>
                <InfoOutlinedIcon />
              </div>
            </div>
            {/* </> */}
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slides;
