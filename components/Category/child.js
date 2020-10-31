import { Link } from "../src/Link";
import { categoryVar, queryVar } from "../../apollo/action";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export function Item({ category }) {
  const router = useRouter();
  let query = router.query;
  let exist = query.category == category.url;
  const handleClick = () => {
    query.category = category.url;
    if (category.url === "all") delete query.category;
    router.push({ query });
  };
  return (
    <a style={{ fontWeight: exist ? "bold" : null }} onClick={handleClick}>
      {category.name}
    </a>
  );
}
