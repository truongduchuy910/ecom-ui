import { Link } from "../src/Link";
import { IoIosBasket } from "react-icons/io";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";

export const MoreProducts = () => {
  const theme = useContext(SellerContext);
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
