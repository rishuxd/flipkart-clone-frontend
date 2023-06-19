import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, styled, Grid } from "@mui/material";
import LeftDetails from "./LeftDetails";
import RightDetail from "./RightDetail";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, product, id, loading]);

  return (
    <Container1>
      {product && Object.keys(product).length && (
        <Container2 container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <LeftDetails product={product} />
          </Grid>
          <Right item lg={8} md={8} sm={8} xs={12}>
            <RightDetail product={product} />
          </Right>
        </Container2>
      )}
    </Container1>
  );
};

const Container1 = styled(Box)`
  background-color: #f2f2f2;
  margin-top: 50px;
`;

const Container2 = styled(Grid)`
  background-color: #fff;
  display: flex;
`;

const Right = styled(Grid)`
  margin-top: 40px;
`;
export default ProductDetail;
