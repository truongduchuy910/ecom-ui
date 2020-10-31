import { useRouter } from "next/router";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
export function Item({ hashtag, style }) {
  const router = useRouter();
  const theme = useContext(SellerContext);

  let query = router.query;
  const exist = query.hashtag == hashtag.url;
  const handleClick = () => {
    query.hashtag = hashtag.url;
    if (hashtag.url === "all") delete query.hashtag;

    router.push({ pathname: "/posts", query });
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
      {hashtag.name}
    </a>
  );
}
