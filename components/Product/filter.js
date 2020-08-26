import { gql, useQuery } from "@apollo/client";
import { Item as Category } from "../Category/item";
import { Item as Attribute } from "../Attribute/item";
import { formatMoney } from "../../lib/chip";
import { Link } from "../src/Link";
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
  return (
    <section
      style={{
        paddingRight: 0,
      }}
    >
      {search ? (
        <div style={css.filter}>
          <h6
            style={{
              ...css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Tìm kiếm:
          </h6>
          <a style={{ color: theme.color }}>{search}</a>
        </div>
      ) : null}
      {price_to != 999999999 ? (
        <div style={css.filter}>
          <h6
            style={{
              ...css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Giá:{" "}
          </h6>
          {formatMoney(price_from)} - {formatMoney(price_to)}
        </div>
      ) : null}

      {data?.allCategories.length ? (
        <div style={css.filter}>
          <h6
            style={{
              ...css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Danh mục:{" "}
          </h6>
          <Category
            categories={data?.allCategories || []}
            style={{ display: "inline-block", margin: 0, padding: 0 }}
          />
        </div>
      ) : null}
      {data?.allAttributes?.length ? (
        <div style={css.filter}>
          <h6
            style={{
              ...css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thuộc Tính:
          </h6>{" "}
          {data?.allAttributes.map((attribute) => (
            <Attribute
              key={attribute.id}
              attribute={attribute}
              style={{ display: "inline", marginRight: 8 }}
            />
          ))}
        </div>
      ) : null}
      {data?.allBrands.length ? (
        <div style={css.filter}>
          <h6
            style={{
              ...css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thương Hiệu:
          </h6>{" "}
          <Brand
            brand={data?.allBrands[0]}
            style={{ display: "inline-block" }}
          />
        </div>
      ) : null}
    </section>
  );
};