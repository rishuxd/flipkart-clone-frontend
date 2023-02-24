import styled from "styled-components";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  margin-top: 56px;
`;

const Home = () => {
  const dispatch = useDispatch();

  // fetching the collection "getProducts" from the redux store
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <NavBar />
      <Banner />
      <Slide products={products} />
    </Container>
  );
};

export default Home;
