import Link from "next/link";
import { Fragment } from "react";
import Categories from "../Category/List/index";
import Hashtags from "../Hashtag/List/index";
import { useRouter } from "next/router";

export const One = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Link href="/">
        <a>home</a>
      </Link>
      <Categories
        option="Header"
        onChoose={(category) => {
          router.push({
            pathname: "/products",
            query: { category: category.url },
          });
        }}
      />
      <Hashtags
        option="Header"
        onChoose={(hashtag) => {
          router.push({
            pathname: "/hashtag",
            query: { hashtag: hashtag.url },
          });
        }}
      />
    </Fragment>
  );
};
