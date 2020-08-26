import { Fragment } from "react";
import { page } from "../../config/index";

import { Link } from "../src/Link";
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
        <Link href={{ pathname: "detail", query: { detail: product.url } }}>
          {product.name}
        </Link>
      </th>
    </>
  );
};
