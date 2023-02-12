import styled from "styled-components";
import { navData } from "../../constants/data";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(0 0 0 / 16%);
  min-height: 112px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  color: #212121;
  width: 100%;
`;

const Box = styled.div`
  &:first-child {
    padding-left: 22px;
  }
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;

  img {
    height: 64px;
    width: 64px;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    p {
      color: #2874f0;
    }
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavContainer>
        {navData.map((data) => (
          <Box>
            <img src={data.url} alt="" />
            <p>{data.text}</p>
          </Box>
        ))}
      </NavContainer>
    </Container>
  );
};

export default NavBar;
