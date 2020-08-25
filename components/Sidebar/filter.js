import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Item as Category } from "../Category/item";
import { Item as Attribute } from "../Attribute/item";
import { formatMoney } from "../../lib/chip";
import Link from "next/link";
import { css } from "../src/css";
import theme from "../src/theme";
import { Item as Brand } from "../Brand/item";
const GET_CATE = gql`
  query($category: String, $attributes: [String], $brand: String) {
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
    allBrands(where: { url: $brand }) {
      id
      name
      url
    }
  }
`;
export const Filter = ({
  category = "-",
  brand = "-",
  search,
  price_from,
  price_to,
  attributes,
}) => {
  const variables = {
    category,
    attributes,
    brand,
  };

  const { data, error } = useQuery(GET_CATE, {
    variables,
  });
  console.log(data);
  return (
    <Fragment>
      {search ? (
        <div>
          <h5
            style={{
              ...css.h5,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Tìm kiếm:
          </h5>
          <a>{search}</a>
        </div>
      ) : null}
      {price_to != 999999999 ? (
        <label>
          Giá từ {formatMoney(price_from)} đến {formatMoney(price_to)}
        </label>
      ) : null}

      {data?.allCategories.length ? (
        <div>
          <h5
            style={{
              ...css.h5,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Danh mục:
          </h5>
          <Category
            categories={data?.allCategories || []}
            style={{ display: "inline-block" }}
          />
        </div>
      ) : null}
      {data?.allAttributes.map((attribute) => (
        <div>
          <h5
            style={{
              ...css.h5,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thuộc Tính:
          </h5>
          <Attribute
            key={attribute.id}
            attribute={attribute}
            style={{ display: "inline", marginRight: 8 }}
          />
        </div>
      ))}
      {data?.allBrands.length ? (
        <div>
          <h5
            style={{
              ...css.h5,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thương Hiệu:{" "}
          </h5>
          <Brand
            brand={data?.allBrands[0]}
            style={{ display: "inline-block" }}
          />
        </div>
      ) : null}
    </Fragment>
  );
};
