// show in product detail
import Link from "next/link";
export function Item({ attribute }) {
  return (
    <Link
      href={{
        pathname: "/products",
        query: { attributes: [attribute.url].toString() },
      }}
    >
      <a style={{ display: "inline-block", marginLeft: 13 }}>
        {attribute.name}
      </a>
    </Link>
  );
}
