import { page } from "../../config/index";

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { MdCompareArrows, MdDoneAll } from "react-icons/md";
import {
  removeWishListItem,
  removeCompareItem,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

import { theme } from "../../config/index";
import { css } from "../src/css";

export function ImgProduct({ product, style, onClick }) {
  const { data } = useQuery(gql`
    query {
      wishlist @client
    }
  `);

  const isInWishlist = data?.wishlist?.some((item) => item.id === product.id);

  let ImgSrcs = product?.images || [];
  if (product.image) {
    ImgSrcs = [{ file: product.image }].concat(ImgSrcs);
  }
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      style={{
        position: "inherit",
      }}
    >
      <img
        src={
          ImgSrcs[imgIndex]
            ? page.server + ImgSrcs[imgIndex]?.file?.publicUrl
            : "/assets/img/no-image.jpg"
        }
        onClick={onClick}
        style={{ ...style, width: "100%" }}
        key={ImgSrcs[imgIndex]?.file?.publicUrl}
      />

      {/* icon wishlist */}
      <i
        onClick={() =>
          isInWishlist
            ? removeWishListItem(product)
            : addProductToLocalWishlist(product)
        }
        style={css.btnIcon()}
      >
        {isInWishlist ? <MdDoneAll /> : <IoIosHeartEmpty />}
      </i>
    </div>
  );
}
