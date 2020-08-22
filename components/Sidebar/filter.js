import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Item as Category } from "../Category/item";
import { Item as Attribute } from "../Attribute/item";
import { formatMoney } from "../../lib/chip";
const GET_CATE = gql`
  query($category: String, $attributes: [String]) {
    allCategories(where: { url: $category }) {
      id
      name
      url
    }
    allAttributes(where: { url_in: $attributes }) {
      id
      name
      url
    }
  }
`;
export const Filter = ({
  category = "-",
  brand,
  search,
  price_from,
  price_to,
  attributes,
}) => {
  const variables = {
    category,
    attributes,
  };

  const { data, error } = useQuery(GET_CATE, {
    variables,
  });

  return (
    <Fragment>
      {search ? <label>Tìm kiếm: {search}</label> : null}
      {price_to != 999999999 ? (
        <label>
          Giá từ {formatMoney(price_from)} đến {formatMoney(price_to)}
        </label>
      ) : null}

      {data?.allCategories.length ? (
        <Fragment>
          <Category categories={data?.allCategories || []} />
        </Fragment>
      ) : null}
      {data?.allAttributes.map((attribute) => (
        <Attribute
          key={attribute.id}
          attribute={attribute}
          style={{ display: "inline", marginRight: 8 }}
        />
      ))}
    </Fragment>
  );
};
