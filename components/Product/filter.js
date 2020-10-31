import { gql, useQuery } from "@apollo/client";
import { Item as Category } from "../Category/item";
import { Item as Attribute } from "../Attribute/item";
import { formatMoney } from "../../lib/chip";

import { Item as Brand } from "../Brand/item";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { SellerContext } from "../src/SellerProvider";
import { Fragment, useContext } from "react";
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
  const theme = useContext(SellerContext);

  const router = useRouter();
  const variables = {
    category,
    attributes,
    brand,
  };

  const { data, error } = useQuery(GET_CATE, {
    variables,
  });
  const removeSearch = () => {
    let query = router.query;
    delete query.search;
    router.push({ query });
  };
  const removePrice = () => {
    let query = router.query;
    delete query.price_from;
    delete query.price_to;
    router.push({ query });
  };

  return (
    <section
      style={{
        paddingRight: 0,
      }}
    >
      {search ? (
        <div style={theme.css.filter}>
          <h6
            style={{
              ...theme.css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Tìm kiếm:
          </h6>
          <a style={{ color: theme.color }}>{search}</a>
          <IoIosRemoveCircleOutline
            onClick={removeSearch}
            style={theme.css.removeIcon}
          />
        </div>
      ) : null}
      {price_to != 999999999 ? (
        <div style={theme.css.filter}>
          <h6
            style={{
              ...theme.css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Giá:
          </h6>
          {formatMoney(price_from)} - {formatMoney(price_to)}
          <IoIosRemoveCircleOutline
            onClick={removePrice}
            style={theme.css.removeIcon}
          />
        </div>
      ) : null}

      {data?.allCategories.length ? (
        <div style={theme.css.filter}>
          <h6
            style={{
              ...theme.css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Danh mục:
          </h6>
          <Category
            category={data?.allCategories[0]}
            style={{ display: "inline-block", marginBottom: 0, padding: 0 }}
          />
        </div>
      ) : null}
      {data?.allAttributes?.length ? (
        <div style={theme.css.filter}>
          <h6
            style={{
              ...theme.css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thuộc Tính:
          </h6>
          {data?.allAttributes.map((attribute) => (
            <Fragment>
              <Attribute
                key={attribute.id}
                attribute={attribute}
                style={{ display: "inline", marginRight: 8 }}
                removeIcon
              />
            </Fragment>
          ))}
        </div>
      ) : null}
      {data?.allBrands.length ? (
        <div style={theme.css.filter}>
          <h6
            style={{
              ...theme.css.h6,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Thương Hiệu:
          </h6>
          <Brand
            brand={data?.allBrands[0]}
            style={{ display: "inline-block" }}
          />
        </div>
      ) : null}
    </section>
  );
};
