import { Fragment } from "react";
import { page } from "../../config.json";
import Link from "next/link";
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
          style={{ maxWidth: 50 }}
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
