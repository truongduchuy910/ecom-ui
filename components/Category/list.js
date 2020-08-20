import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";

import { page } from "../../config.json";
import { Spinner } from "reactstrap";
import { Loading } from "../src/Loading";

const GET_CATEGORIES = gql`
  query($seller: UserWhereInput) {
    allCategories(where: { seller: $seller, root: true }) {
      id
      name
      label
      url
      childs {
        id
        name
        label
        url
        childs {
          id
          name
          label
          url
          childs {
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
          }
        }
      }
    }
  }
`;
export function List() {
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: { seller: page.seller },
  });
  if (error) return <i>{error}</i>;
  if (loading) return <Loading />;
  return !loading && data ? (
    <div>
      <h5>Danh Mục</h5>
      <Item
        categories={[{ id: "all-category", name: "Tất Cả ", url: "all" }]}
        
      />
      {data.allCategories.map((category) => (
        <Item
          
          key={category.id}
          categories={[category]}
          level={0}
        />
      ))}
    </div>
  ) : null;
}
