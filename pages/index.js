import { List as Products } from "../components/Product/list";
import { Container, Row, Col } from "reactstrap";
import { List as Banners } from "../components/Banner/list";
import { IntroBox } from "../components/IntroBox";
import { Divider } from "../components/src/Divider";
const Index = () => {
  return (
    <div>
      {/*  */}
      <Banners />
      <Container>
        <IntroBox />
      </Container>
      <Container>
        <h2 className="text-center mt-4">Sản Phẩm Bán Chạy</h2>
        <Divider />
        <Products first={4} lg={3} suggestions="bestSeller" more={false} />
      </Container>
      <Container>
        <h2 className="text-center mt-4">Sản Phẩm Mới Ra</h2>
        <Divider />
        <Products first={4} lg={3} suggestions="new" more={false} />
      </Container>

      <Container>
        <h2 className="text-center mt-4">Sản Phẩm Khuyến Mãi</h2>
        <Divider />
        <Products first={4} lg={3} sale more={false} />
      </Container>
    </div>
  );
};
export default Index;
