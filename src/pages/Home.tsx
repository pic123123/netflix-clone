import { getMovies, IGetMoviesResult } from "api";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { makeImagePath } from "utils/util";

const Wrapper = styled.div`
  background: red;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px; ;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [nowPlayingResult, setNowPlayingResult] = useState<IGetMoviesResult>({
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [
      { id: 0, backdrop_path: "", poster_path: "", title: "", overview: "" },
    ],
    total_pages: 0,
    total_results: 0,
  });
  useEffect(() => {
    const initGetData = async () => {
      const nowPlayingResult: IGetMoviesResult = await getMovies();
      console.log(nowPlayingResult);
      setNowPlayingResult(nowPlayingResult);
      setIsLoading(false);
    };

    initGetData();
  }, []);
  const [index, setIndex] = useState(0);
  const incraseIndex = () => setIndex((prev) => prev + 1);

  //https://image.tmdb.org/t/p/w500/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(
              nowPlayingResult?.results[0].backdrop_path || ""
            )}
          >
            <Title>{nowPlayingResult?.results[0].title}asd</Title>
            <Overview>{nowPlayingResult?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i}>{i}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
