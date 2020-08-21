import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
import { theme } from "../../config.json";
export function Item({ brand }) {
  const router = useRouter();
  let query = router.query;
  const exist = query.brand == brand.url;
  const handleClick = () => {
    query.brand = brand.url;
    if (brand.url === "all") delete query.brand;
    router.push({ query });
  };
  return (
    <a
      style={{
        color: theme.color,
        marginLeft: 13,
        fontWeight: exist ? "bold" : null,
      }}
      onClick={handleClick}
    >
      {brand.name}
    </a>
  );
}
