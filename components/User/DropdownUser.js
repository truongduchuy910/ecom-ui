import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { page } from "../../config/index";

import { Link } from "../src/Link";
import { USER } from "../../apollo/action";
import { Fragment } from "react";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { theme } from "../../config/index";
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
  const { data } = useQuery(USER);
  return typeof window !== "undefined" ? (
    data?.user?.id ? (
      <UncontrolledDropdown nav inNavbar style={{ listStyle: "none" }}>
        <DropdownToggle
          nav
          caret
          style={{ color: theme.primary, margin: 0, padding: 0 }}
        >
          <AiOutlineUser />
        </DropdownToggle>
        <DropdownMenu
          right
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          <DropdownItem>
            <a onClick={onClick}>
              Hi {data?.user?.isSeller ? "seller" : null} {data.user.email}
            </a>
          </DropdownItem>
          <Link href="/signout" onClick={onClick}>
            <DropdownItem href="">Đăng Xuất</DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    ) : (
      <Link
        href="/signin"
        style={{ color: theme.primary, margin: 0, padding: 0 }}
      >
        <IoIosLogIn style={{ color: theme.primary }} />
      </Link>
    )
  ) : (
    <label>server</label>
  );
}
