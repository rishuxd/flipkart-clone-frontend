import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { bannerData } from "../../constants/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Image = styled.img`
  width: 100%;
  height: 280px;
`;

const Banner = () => {
  return (
    <Box>
      <Carousel
        infinite={true}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {bannerData.map((data) => (
          <Image src={data.url} alt="" />
        ))}
      </Carousel>
    </Box>
  );
};

const Box = styled.div`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;

export default Banner;
