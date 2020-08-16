import { List as Products } from "../components/Product/list";
import { Container } from "reactstrap";
import { Fragment } from "react";
import { List as Banners } from "../components/Banner/list";
const Index = () => {
  return (
    <div>
      
      {/*  */}
      <Banners />

      {/*  */}
      <Container>
        <h5>Best Seller</h5>
        <Products first={4} lg={4} suggestions="bestSeller" more={false} />
        <h5>New</h5>
        <Products first={4} lg={4} suggestions="new" more={false} />
        <h5>Sale</h5>
        <Products first={4} lg={4} sale more={false} />
      </Container>
    </div>
  );
};
export default Index;
