import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export function Item({ brand }) {
  return (
    <Link href={{ pathname: "/products", query: { brand: brand.url } }}>
      <a>{brand.name}</a>
    </Link>
  );
}
