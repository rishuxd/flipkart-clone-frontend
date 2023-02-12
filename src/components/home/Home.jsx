import styled from "styled-components";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Container = styled.div`
  margin-top: 56px;
`;
const Box = styled.div`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Box>
        <Banner />
      </Box>
    </Container>
  );
};

export default Home;
