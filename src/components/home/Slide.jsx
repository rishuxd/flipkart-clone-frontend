import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = (props) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  };

  return (
    <Container>
      <SlideHeader>
        <span>Deal of the Day</span>
        <div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
            alt="timer"
          />
          <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        </div>
      </SlideHeader>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        centerMode={true}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {props.products.map((product) => (
          <img src={product.url} alt="" />
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 10px;
  background-color: #fff;
`;

const SlideHeader = styled.div`
  padding: 15px 20px;
  display: flex;

  span {
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
  }

  div {
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;

    img {
      width: 24px;
    }
  }
`;

export default Slide;
