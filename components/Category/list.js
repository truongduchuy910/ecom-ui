import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";

import { page, theme } from "../../config/index";

import { Spinner } from "reactstrap";
import { Loading } from "../src/Loading";
import { useRouter } from "next/router";
import { css } from "../src/css";
import { useState } from "react";

const GET_CATEGORIES = gql`
  query($seller: UserWhereInput, $category: String) {
    allCategories(where: { seller: $seller, url: $category }) {
      id
      name
      label
      url
      childs {
        id
        name
        label
        url
      }
      parent {
        id
        name
        label
        url
      }
    }
  }
`;
export function List() {
  const router = useRouter();
  const { category } = router.query;
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: page.seller, category },
  });
  const [open, setOpen] = useState(false);
  if (error) return <i>{error}</i>;
  if (loading) return <Loading />;
  return !loading && data ? (
    <div>
      <h5 style={css.h5}>
        {category ? data.allCategories[0].name : "Danh Mục"}
      </h5>

      <Item
        categories={[
          {
            id: "all-category",
            name: category ? "Trở lại mục trước" : null,
            url: "back",
          },
        ]}
        style={{ display: "block" }}
      />

      {category
        ? data.allCategories[0].childs.map((cate) => (
            <Item key={cate.id} categories={[cate]} level={0} />
          ))
        : data.allCategories
            ?.slice(0, open ? data.allCategories.length : 7)
            .map((category) => (
              <Item
                key={category.id}
                categories={[category]}
                level={0}
                style={{ display: "block" }}
              />
            ))}
      {data?.allCategories?.length > 7 ? (
        open ? (
          <a onClick={() => setOpen(false)} style={{ color: theme.primary }}>
            Rút gọn
          </a>
        ) : (
          <a onClick={() => setOpen(true)} style={{ color: theme.primary }}>
            Xem thêm
          </a>
        )
      ) : null}
    </div>
  ) : null;
}
