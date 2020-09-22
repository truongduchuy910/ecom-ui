import { CategoriesDropdownMenu as Users } from "../User/DropdownUser";
import { Icon as CartIcon } from "../Cart/icon";
import { Icon as WishlistIcon } from "../Wishlist/icon";
import { Icon as OrderIcon } from "../Order/icon";
import { Container } from "reactstrap";
import { Logo } from "../src/logo";
import { useRouter } from "next/router";

import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
export default function MenuApp() {
  const router = useRouter();
  const theme = useContext(SellerContext);
  const { data } = useQuery(
    gql`
      query {
        user @client
      }
    `,
    {}
  );
  const isLogin = data?.user;
  // ANIMATION

  return (
    <section
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        top: 0,
        backgroundColor: theme.productBackgroundColor,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container fluid>
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
              marginRight: theme.spacing(3),
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
              fontSize: "0.9rem",
              width: "100%",
              padding: 0,
              margin: 0,
              color: theme.primary,
              cursor: "pointer",
              wordWrap: "initial",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            {theme.store}
          </h1>
          <WishlistIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <CartIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <OrderIcon
            style={{
              ...theme.css.iconBorder,
              float: "right",
            }}
          />
          <Users />
        </div>
      </Container>
    </section>
  );
}
