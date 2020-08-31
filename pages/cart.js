import { Cart as CartInfo } from "../components/Cart/index";
import { Container } from "reactstrap";
import { theme } from "../config/index";

const Cart = () => {
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
