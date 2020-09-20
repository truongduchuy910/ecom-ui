import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";

import { page } from "../../config.json";
import { Spinner } from "reactstrap";
import { Loading } from "../src/Loading";
import { useRouter } from "next/router";

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
  console.log(category);
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: page.seller, category },
  });
  if (error) return <i>{error}</i>;
  if (loading) return <Loading />;
  return !loading && data ? (
    <div>
      <h5>{category ? data.allCategories[0].name : "Danh Mục"}</h5>

      <Item
        categories={[
          {
            id: "all-category",
            name: category ? "Quay Về" : null,
            url: "back",
          },
        ]}
      />

      {category
        ? data.allCategories[0].childs.map((cate) => (
            <Item key={cate.id} categories={[cate]} level={0} />
          ))
        : data.allCategories.map((category) => (
            <Item key={category.id} categories={[category]} level={0} />
          ))}
    </div>
  ) : null;
}
