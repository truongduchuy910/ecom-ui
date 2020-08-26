import { useRouter } from "next/router";
import { theme } from "../../config/index";
export function Item({ brand, style }) {
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
        ...style,
        color: theme.color,
        fontWeight: exist ? "bold" : null,
      }}
      onClick={handleClick}
    >
      {brand.name}
    </a>
  );
}
