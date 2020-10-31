import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { gql, useQuery } from "@apollo/client";
import { getErrorMessage } from "../../lib/chip";


import { Link } from "../src/Link";
const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function CategoriesDropdownMenu() {
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: theme.seller },
  });
  if (error) return null;
  if (loading) return null;

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav>Danh Mục</DropdownToggle>
      <DropdownMenu right>
        {data?.allCategories.map((category) => (
          <Link
            key={category.id}
            href={{ pathname: "/products", query: { category: category.url } }}
          >
            <DropdownItem href="">{category.name}</DropdownItem>
          </Link>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
