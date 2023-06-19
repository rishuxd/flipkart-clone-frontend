import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Slide = (props) => {
  return (
    <Container>
      <Left>
        <h2>{props.title}</h2>
        <a href="">VIEW ALL</a>
      </Left>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {props.products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box>
              <Image src={product.url} alt="" />
              <p>{product.title.shortTitle}</p>
              <p>{product.discount}</p>
              <p>{product.tagline}</p>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  // display: flex;
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin: 0 10px;
  margin-bottom: 10px;
`;

const Left = styled.div`
  background-color: #2874;
  width: 250px;
  text-align: center;
  padding: 28px 10px 124px;

  h2 {
    font-size: 30px;
    font-weight: 400;
    line-height: 1.38;
    margin-bottom: 24px;
  }

  a {
    background: #2874f0;
    color: #fff;
    font-size: 13px;
    border-radius: 2px;
    padding: 10px 20px;
    font-weight: 500;
    box-shadow: 0 2px 4px 0 rgba(0 0 0 / 20%);
    text-decoration: none;
    cursor: pointer;
  }
`;

const Box = styled.div`
  text-align: center;

  p {
    font-size: 14px;
    padding-top: 5px;

    &:nth-child(2) {
      font-weight: 600;
      color: #212121;
    }

    &:nth-child(3) {
      color: green;
    }
    &:nth-child(4) {
      color: #212121;
      opacity: 0.6;
    }
  }
`;

const Image = styled.img`
  width: auto;
  height: 150px;
`;

export default Slide;
