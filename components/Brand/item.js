import Link from "next/link";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
import { theme } from "../../config/yensaodatquang.json";
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
        fontWeight: exist ? "bold" : null,
        fontSize: "0.8rem",
        textTransform: "uppercase",
      }}
      onClick={handleClick}
    >
      {brand.name}
    </a>
  );
}
