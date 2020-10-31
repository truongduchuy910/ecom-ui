import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { MdCompareArrows, MdDoneAll } from "react-icons/md";
import {
  removeWishListItem,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { useQuery, gql } from "@apollo/client";
import { useContext, useState } from "react";

import { SellerContext } from "../src/SellerProvider";

export function ImgProduct({ product, style, onClick }) {
  const theme = useContext(SellerContext);
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
  ImgSrcs = ImgSrcs.map((src) => theme.server + src?.file?.publicUrl);
  if (product.altImages) {
    ImgSrcs = product.altImages.split(",").concat(ImgSrcs);
  }
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div
      style={{
        position: "inherit",
      }}
    >
      <img
        src={ImgSrcs[imgIndex] ? ImgSrcs[imgIndex] : "/img/no-img.png"}
        onClick={onClick}
        style={{ ...style, width: "100%", cursor: "pointer" }}
        key={ImgSrcs[imgIndex]?.file?.publicUrl}
      />

      {/* icon wishlist */}
      <i
        onClick={() =>
          isInWishlist
            ? removeWishListItem(product)
            : addProductToLocalWishlist(product)
        }
        style={theme.css.btnIcon()}
      >
        {isInWishlist ? <MdDoneAll /> : <IoIosHeartEmpty />}
      </i>
    </div>
  );
}
