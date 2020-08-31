import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
const GET_PARENT = gql`
  query($url: String) {
    allCategories(where: { url: $url }) {
      parent {
        url
      }
      childs {
        url
      }
    }
  }
`;
export function Item({ category, style }) {
  const router = useRouter();

  const { data } = useQuery(GET_PARENT, { variables: { url: category?.url } });
  let query = router.query;

  const childUrl = category?.childs
    ? category?.childs.map((category) => category?.url).toString()
    : [];
  console.log(category?.parent);
  const handleClick = () => {
    if (category?.url === "back") {
      if (category?.parent) query.category = category?.parent.url;
      else delete query.category;
      delete query.categories;
      router.push({ query });
    } else {
      query.category = category?.url;
      query.categories = childUrl;
      router.push({ query });
    }
  };
  return category ? (
    <a
      style={{
        ...style,
        fontWeight: query.category === category?.url ? "bold" : null,
      }}
      onClick={handleClick}
    >
      {category?.label ? category?.label : category?.name}
    </a>
  ) : null;
}
