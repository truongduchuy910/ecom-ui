import { useRouter } from "next/router";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
export function Item({ brand, style }) {
  const router = useRouter();
  const theme = useContext(SellerContext);

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
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {brand.name}
    </a>
  );
}
