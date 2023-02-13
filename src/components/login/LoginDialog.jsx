import { Dialog } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  max-height: 90vh;
  background: #fff;
  border-radius: 4px;
  margin: 0 auto;
  overflow: auto;

  display: flex;
  height: 528px;
`;

const Left = styled.div`
  background-image: url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png);
  background-position: center 85%;
  background-repeat: no-repeat;
  background-color: #2874f0;
  color: #fff;
  padding: 40px 33px;
  font-size: 15px;
  width: 40%;
  display: inline-block;
  vertical-align: top;

  span {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    margin-top: 16px;
    line-height: 150%;
    color: #dbdbdb;
  }
`;

const Right = styled.div`
  width: 60%;
  display: inline-block;
  vertical-align: top;
  padding: 56px 35px 16px;
  position: relative;
  background-color: #fff;
`;

const LoginInput = styled.div`
  position: relative;
  margin-bottom: 34px;
  font-size: 16px;

  input {
    padding: 8px 10px 10px 0;
    width: 100%;
    color: #000;
    font-size: inherit;
    border: none;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
  }

  span {
    position: relative;
    display: block;
    width: 100%;

    &::before {
      left: 50%;
      transform-origin: left;
    }
    &::after {
      right: 50%;
      transform-origin: right;
    }
    &::after,
    ::before {
      content: "";
      height: 1px;
      width: 50%;
      transform: scale(0);
      bottom: 1px;
      position: absolute;
      will-change: transform;
      background: #2874f0;
      transition: transform 0.2s ease;
      transform: scale(1);
    }
  }

  label {
    color: #878787;
    font-weight: 16px;
    font-weight: 400;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(10px);
    transition: transform 0.2s ease;
    transform-origin: left;
    pointer-events: none;
  }
`;

const LoginTerms = styled.div`
  color: #878787;
  font-size: 12px;
  font-weight: 400;

  a {
    color: #2874f0;
    text-decoration: none;
  }
`;

const RequestOtp = styled.div`
  margin-top: 16px;

  button {
    background: #fb641b;
    border: none;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    width: 100%;
    height: 48px;
    font-size: 15px;
    border-radius: 2px;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    display: inline-block;
    transition: box-shadow 0.2s ease;
  }
`;

const NewAccount = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  text-align: center;

  a {
    color: #2874f0;
    font-weight: 500;
    text-decoration: none;
  }
`;

const LoginDialog = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <Container>
        <Left>
          <span>Login</span>
          <p>Get access to Orders, Wishlist and Recommendations</p>
        </Left>
        <Right>
          <form action="">
            <LoginInput>
              <input type="text" />
              <span></span>
              <label htmlFor="">Enter Email/Mobile Number</label>
            </LoginInput>
            <LoginTerms>
              By continuing, you agree to Flipkart's
              <a href=""> Terms of Use </a>
              and
              <a href=""> Privacy Policy</a>
            </LoginTerms>
            <RequestOtp>
              <button>Request OTP</button>
            </RequestOtp>
            <NewAccount>
              <a href="">New to Flipkart? Create an account</a>
            </NewAccount>
          </form>
        </Right>
      </Container>
    </Dialog>
  );
};

export default LoginDialog;
