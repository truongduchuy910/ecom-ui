import { Link } from "../src/Link";

export function Item({ brand }) {
  return (
    <Link href={{ pathname: "/products", query: { brand: brand.url } }}>
      <a>{brand.name}</a>
    </Link>
  );
}
