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

const style = {
  button: (top, color = theme.backgroundColor) => ({
    position: "absolute",
    top,
    right: 5,
    padding: 3,
    paddingTop: 5,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color,
    fontWeight: 800,
    backgroundColor: theme.primary,
  }),
};
import theme from "../src/theme";
export function ImgProduct({ product }) {
  const { data } = useQuery(gql`
    query {
      cartItems @client
      wishlist @client
      compare @client
    }
  `);

  const isIncart = data?.cartItems?.some(
    (item) => item.product.id === product.id
  );
  const isInWishlist = data?.wishlist?.some((item) => item.id === product.id);
  const isInCompare = data?.compare?.some((item) => item.id === product.id);

  let ImgSrcs = product?.images || [];
  if (product.image) {
    ImgSrcs = [{ file: product.image }].concat(ImgSrcs);
  }
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div style={{ position: "inherit" }}>
      {/* {open ? (
        <animated.div style={props}>
          <QuickView
            product={product}
            onClick={() => {
              toggle(false);
            }}
          />
        </animated.div>
      ) : null} */}
      <img
        src={
          ImgSrcs[imgIndex]
            ? page.server + ImgSrcs[imgIndex]?.file?.publicUrl
            : "/assets/img/no-image.jpg"
        }
        style={{ width: "100%", borderRadius: theme.spacing(2) }}
        key={ImgSrcs[imgIndex]?.file?.publicUrl}
      />
      {/* icon compare */}
      {/* <i
        onClick={() =>
          isInCompare
            ? removeCompareItem(product)
            : addProductToLocalCompare(product)
        }
        style={style.button(5)}
      >
        {isInCompare ? <MdDoneAll /> : <MdCompareArrows />}
      </i> */}
      {/* icon wishlist */}
      <i
        onClick={() =>
          isInWishlist
            ? removeWishListItem(product)
            : addProductToLocalWishlist(product)
        }
        style={style.button(5)}
      >
        {isInWishlist ? <MdDoneAll /> : <IoIosHeartEmpty />}
      </i>
    </div>
  );
}
