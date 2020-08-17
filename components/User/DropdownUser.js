import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";
import { page } from "../../config";
import Link from "next/link";
import { USER } from "../../apollo/action";
import { Fragment } from "react";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller, root: true }) {
      id
      name
      url
    }
  }
`;
export function CategoriesDropdownMenu() {
  const { data } = useQuery(USER);
  return typeof window !== "undefined" ? (
    data?.user?.id ? (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hi {data?.user?.isSeller ? "seller" : null} {data.user.email}
        </DropdownToggle>
        <DropdownMenu right>
          <Link href="/signout">
            <DropdownItem href="">
              <a>Đăng Xuất</a>
            </DropdownItem>
          </Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    ) : (
      <Link href="/signin">
        <a>Đăng Nhập</a>
      </Link>
    )
  ) : (
    <label>server</label>
  );
}
