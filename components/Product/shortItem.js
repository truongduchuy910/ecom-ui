import { Fragment } from "react";
import { page } from "../../config/yensaodatquang.json";
import Link from "next/link";
import theme from "../src/theme";
export const Item = ({ product }) => {
  return (
    <>
      <th>
        <img
          src={
            page.server +
            (product.image
              ? product.image.publicUrl
              : product.images[0]?.file.publicUrl)
          }
          style={{ maxWidth: 50, marginRight: theme.spacing(3) }}
        />
      </th>
      <th>
        <Link href="products/[slug]" as={"products/" + product.url}>
          <a>{product.name}</a>
        </Link>
      </th>
    </>
  );
};
