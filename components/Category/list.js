import { gql, useQuery } from "@apollo/client";

import { Item } from "./item";

import { page } from "../../config";
import { Spinner } from "reactstrap";

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
  if (loading)
    return <Spinner className="w-100" type="grow" size="sm" color="primary" />;
  return !loading && data ? (
    <div>
      <p>--------------------</p>
      <Item categories={[{ id: "all-category", name: "All ", url: "all" }]} />
      {data.allCategories.map((category) => (
        <Item key={category.id} categories={[category]} level={0} />
      ))}
    </div>
  ) : null;
}
