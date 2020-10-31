import { Fragment, useContext } from "react";

import { Link } from "../src/Link";
import { SellerContext } from "../src/SellerProvider";

export const Item = ({ product }) => {
  const theme = useContext(SellerContext);
  return (
    <div style={{ display: "block" }}>
      <th>
        <img
          src={
            theme.server +
            (product.image
              ? product.image.publicUrl
              : product.images[0]?.file.publicUrl)
          }
          style={{ maxWidth: 50, marginRight: theme.spacing(3) }}
        />
      </th>
      <th>
        <Link href={{ pathname: "/detail", query: { detail: product.url } }}>
          {product.name}
        </Link>
      </th>
    </div>
  );
};
