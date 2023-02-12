import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  background: #2874f0;
  color: #f0f0f0;
  z-index: 10;
`;

const WidthContainer = styled.div`
  max-width: 1248px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 137px;
  align-items: flex-end;

  a {
    &:nth-child(2) {
      font-size: 11px;
      font-style: italic;
      margin-top: -1px;

      span {
        color: #ffe500;
        font-weight: 500;
        margin-right: 2px;
      }
    }
  }
`;

const LoginButton = styled.div`
  align-items: center;
  max-width: 150px;
  margin: 0 20px;
  display: flex;
  a {
    font-weight: 500;
    color: #2874f0;
    background-color: #fff;
    cursor: pointer;
    border-radius: 2px;
    padding: 4px 40px;
    border: 1px solid #dbdbdb;
    text-decoration: none;
  }
`;

const BecomeASeller = styled.div`
  align-items: center;
  max-width: 150px;
  margin: 0 20px;
  display: flex;
  flex: 0 0 auto;
  a {
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
`;

const More = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  margin: 0 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #fff;

  img {
    transform: rotate(-90deg);
    margin: 1px 0 0 8px;
    transition: transform 0.1s;
  }

  &:hover {
    img {
      transform: rotate(90deg);
    }
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  margin: 0 20px;
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;

    img {
      margin: 0 8px;
      height: 16px;
      width: 16px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <WidthContainer>
        <LogoDiv>
          <a>
            <img
              width={75}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
            />
          </a>
          <a>
            Explore
            <span>Plus</span>
            <img
              width={10}
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </a>
        </LogoDiv>
        <Search />
        <LoginButton>
          <a href="">Login</a>
        </LoginButton>
        <BecomeASeller>
          <a href="">Become a Seller</a>
        </BecomeASeller>
        <More>
          More
          <img src="\images\more-icon.svg" alt="" />
        </More>
        <Cart>
          <a href="">
            <img src="\images\cart-icon.svg" alt="" />
            <span>Cart</span>
          </a>
        </Cart>
      </WidthContainer>
    </Container>
  );
};

export default Header;
