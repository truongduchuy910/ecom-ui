import { Cart as CartInfo } from "../components/Cart/index";
import { Container } from "reactstrap";
import { useContext } from "react";
import { SellerContext } from "../components/src/SellerProvider";

const Cart = () => {
  const theme = useContext(SellerContext);
  return (
    <div>
      <Container
        style={{
          marginTop: 35,
          backgroundColor: theme.backgroundColor,
          paddingTop: theme.spacing(3),
        }}
      >
        <CartInfo />
      </Container>
    </div>
  );
};
export default Cart;
