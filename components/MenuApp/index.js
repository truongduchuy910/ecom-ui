import { CategoriesDropdownMenu as Users } from "../User/DropdownUser";
import { Icon as CartIcon } from "../Cart/icon";
import { Icon as WishlistIcon } from "../Wishlist/icon";
import { Icon as OrderIcon } from "../Order/icon";
import { Link } from "../src/Link";
import { Container } from "reactstrap";
import { page } from "../../config/index";

import { Logo } from "../src/logo";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { theme } from "../../config/index";

import { css } from "../src/css";
import { useQuery, gql } from "@apollo/client";
const GET_USER = gql`
  query {
    user @client
  }
`;
export default function MenuApp() {
  const router = useRouter();
  const { data } = useQuery(GET_USER);
  const isLogin = data?.user;
  // ANIMATION

  return (
    <section
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        backgroundColor: theme.backgroundColor,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 40,
            width: "100%",
          }}
        >
          <Logo
            style={{
              float: "left",
              marginLeft: theme.spacing(3),
              minHeight: 40,
            }}
            onClick={() => {
              router.push("/");
            }}
          />
          <h1
            style={{
              float: "left",
              marginLeft: theme.spacing(3),
              fontSize: "1.2rem",
              width: "100%",
              padding: 0,
              marginBottom: 0,
              color: theme.primary,
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            {page.name}
          </h1>

          <WishlistIcon
            style={{
              ...css.iconBorder,
              float: "right",
            }}
          />
          <CartIcon
            style={{
              ...css.iconBorder,
              float: "right",
            }}
          />
          <OrderIcon
            style={{
              ...css.iconBorder,
              float: "right",
            }}
          />
          <Users />
        </div>
      </Container>
    </section>
  );
}
