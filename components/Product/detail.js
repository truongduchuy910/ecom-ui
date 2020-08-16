//
// Cac component khac su dung query va them vao thuoc tinh cua no de dieu huong
// Vo tinh lam cho [slug] khi su dung dynamic router xuat hien o trang dieu huong
// Nen viet cac itemOne khac de tranh di
//
import { Item as BrandItem } from "../../components/Brand/itemOne";
import { Item as CategoryItem } from "../../components/Category/itemOne";
import { List as AttributeGroups } from "../../components/AttributeGroups/listOne";

import { formatMoney } from "../../lib/chip";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { Fragment } from "react";
import { page } from "../../config";
export function Product({ product }) {
  return (
    <div>
      {product.image ? (
        <img src={page.server + product?.image?.publicUrl} />
      ) : null}

      <img src={page.server + product?.images[0]?.file?.publicUrl} />
      <h1>{product.name}</h1>
      <h5>{formatMoney(product.price)}</h5>
      {product.sale ? (
        <h5>{formatMoney(product.price - product.sale)}</h5>
      ) : null}
      <p>{product.description}</p>

      {product.file ? <img src={page.server + product.file.publicUrl} /> : null}

      <p>{product.guide}</p>
      {product.brand ? <BrandItem brand={product.brand} /> : null}
      {product.category ? <CategoryItem category={product.category} /> : null}
      {product.attributeGroups ? (
        <AttributeGroups attributeGroups={product.attributeGroups} />
      ) : null}
      <button
        onClick={() => {
          addProductToLocalCart({product});
        }}
      >
        Add To Cart
      </button>
      <button
        onClick={() => {
          addProductToLocalCompare(product);
        }}
      >
        Add To Compare
      </button>
      <button
        onClick={() => {
          addProductToLocalWishlist(product);
        }}
      >
        Add To Wishlist
      </button>
    </div>
  );
}
