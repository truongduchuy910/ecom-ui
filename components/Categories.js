import { gql, useQuery } from "@apollo/client";
import { Fragment, useContext } from "react";
import { SellerContext } from "../apollo";

import Products from "../components/Product/List/index";
function FCategories() {
  const theme = useContext(SellerContext);
  const { data, loading, error } = useQuery(
    gql`
      query($category: CategoryWhereInput) {
        allCategories(where: $category) {
          id
          name
          url
        }
      }
    `,
    { variables: { category: { seller: theme.seller } } }
  );
  return (
    <Fragment>
      {data?.allCategories.map((category) => {
        return (
          <Fragment>
            <h2>{category.name}</h2>
            <Products
              ProductWhereInput={{ category: { id: category.id } }}
              limit={3}
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
}
export default FCategories;
