import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { gql, useQuery } from "@apollo/client";

import { Link } from "../src/Link";
import { USER } from "../../apollo/action";

import { AiOutlineUser } from "react-icons/ai";


import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function CategoriesDropdownMenu({ onClick }) {
  const theme = useContext(SellerContext);
  const { data } = useQuery(USER);
  return typeof window !== "undefined" ? (
    data?.user?.id ? (
      <UncontrolledDropdown nav inNavbar style={{ listStyle: "none" }}>
        <DropdownToggle
          nav
          caret
          style={{ color: theme.primary, margin: 0, padding: 0 }}
        >
          <AiOutlineUser style={theme.css.iconBorder} />
        </DropdownToggle>
        <DropdownMenu
          right
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <DropdownItem>
            <a onClick={onClick} style={{ color: theme.color }}>
              Hi {data?.user?.isSeller ? "seller" : null} {data.user.email}
            </a>
          </DropdownItem>
          <Link
            href="/signout"
            onClick={onClick}
            style={{ color: theme.color }}
          >
            <DropdownItem href="" style={{ color: theme.color }}>
              Đăng Xuất
            </DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    ) : (
      <Link
        href="/signin"
        style={{ color: theme.primary, margin: 0, padding: 0 }}
      >
        <AiOutlineUser style={theme.css.iconBorder} />
      </Link>
    )
  ) : (
    <label>server</label>
  );
}
