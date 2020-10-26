import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";
import { Loading } from "../src/Loading";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import { IoIosList, IoIosArrowRoundBack } from "react-icons/io";
import { SellerContext } from "../src/SellerProvider";

const GET_CATEGORIES = gql`
  query($seller: UserWhereInput, $category: String, $root: Boolean) {
    allCategories(
      where: {
        seller: $seller
        OR: [{ url: $category }, { parent_is_null: $root }]
      }
    ) {
      id
      name
      label
      url
      parent {
        url
      }
      childs {
        id
        name
        label
        url
      }
    }
  }
`;
export function List() {
  const theme = useContext(SellerContext);

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { category } = router.query;
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: {
      seller: theme.seller,
      category,
      root: category ? false : true,
    },
  });
  if (error || loading) return <Loading />;
  return !loading && data ? (
    <div>
      <h5 style={theme.css.h5}>
        <IoIosList style={theme.css.iconHeader} />
        {category ? data?.allCategories[0]?.name : "Danh Mục"}
      </h5>

      {category
        ? data?.allCategories[0]?.childs.map((cate) => (
            <Item
              key={cate.id}
              category={cate}
              style={{ display: "block", marginBottom: theme.spacing(2) }}
            />
          ))
        : data.allCategories
            ?.slice(0, open ? data.allCategories.length : 7)
            .map((category) => (
              <Item
                key={category.id}
                category={category}
                style={{ display: "block", marginBottom: theme.spacing(2) }}
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

      {category ? (
        <a
          style={{
            display: "block",
            marginBottom: theme.spacing(2),
            color: theme.primary,
          }}
          onClick={() => {
            let query = router.query;
            if (data.allCategories[0]?.parent)
              query.category = data.allCategories[0].parent.url;
            else delete query.category;
            router.push({ query });
          }}
        >
          <IoIosArrowRoundBack /> Quay lại
        </a>
      ) : null}
    </div>
  ) : null;
}
