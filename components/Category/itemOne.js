// show in product detail
import { Link } from "../src/Link";
export function Item({ category }) {
  return (
    <Link href={{ pathname: "/products", query: { category: category.url } }}>
      <a>{category.name}</a>
    </Link>
  );
}
