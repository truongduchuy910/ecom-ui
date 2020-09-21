import { theme } from "../../config";
import { Link } from "../src/Link";
import { IoIosBasket } from "react-icons/io";

export const MoreProducts = () => {
  return (
    <Link
      style={{ color: theme.primary, marginBottom: theme.spacing(4) }}
      href={{ pathname: "/products" }}
    >
      <IoIosBasket style={{ marginBottom: 2, marginRight: theme.spacing(1) }} />
      Xem Sản Phẩm
    </Link>
  );
};
