import { Grid } from "@mui/material";
import { imageURL } from "../../constants/data";
import styled from "styled-components";

const Container = styled(Grid)`
  margin: 0 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 10px;
`;
const MidSlide = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <Container>
      <Grid container lg={12} md={12} sm={12} xs={12}>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
      <Image src={url} alt="" />
    </Container>
  );
};

export default MidSlide;
