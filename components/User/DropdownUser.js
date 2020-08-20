import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { page } from "../../config.json";
import Link from "next/link";
import { USER } from "../../apollo/action";
import { Fragment } from "react";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller, root: true }) {
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
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <AiOutlineUser />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <a onClick={onClick}>
              Hi {data?.user?.isSeller ? "seller" : null} {data.user.email}
            </a>
          </DropdownItem>
          <Link href="/signout">
            <DropdownItem href="">
              <a onClick={onClick}>Đăng Xuất</a>
            </DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    ) : (
      <Link href="/signin">
        <a>
          <IoIosLogIn />
        </a>
      </Link>
    )
  ) : (
    <label>server</label>
  );
}
