import { List as AttributeGroups } from "../AttributeGroups/listOne";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { formatMoney } from "../../lib/chip";
import Link from "next/link";
import { page } from "../../config";
export const Item = ({ product }) => {
  const imageSrc =
    page.server +
    (product.image
      ? product.image.publicUrl
      : product?.images[0]?.file.publicUrl);

  return (
    <div>
      <img src={imageSrc} key={imageSrc} />
      <Link as={"/products/" + product.url} href="/products/[slug]">
        <a>
          <h6>{product.name}</h6>
        </a>
      </Link>

      <p>{formatMoney(product.price)}</p>
      <AttributeGroups attributeGroups={product.attributeGroups} />
      <button
        onClick={() => {
          addProductToLocalCart({product});
        }}
      >
        Add to Cart
      </button>
      <button onClick={() => addProductToLocalWishlist(product)}>
        Add to Wishlist
      </button>
      <button onClick={() => addProductToLocalCompare(product)}>
        Add to Compare
      </button>
    </div>
  );
};
