import { page } from "../../config";

import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import {
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
const style = {
  button: (top) => ({
    position: "absolute",
    top,
    right: 21,
    padding: 3,
    paddingTop: 5,
    width: 30,
    height: 30,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: "50%",
  }),
};
export function ImgProduct({ product }) {
  const imageSrc =
    page.server +
    (product.image
      ? product.image.publicUrl
      : product?.images[0]?.file.publicUrl);
  return (
    <div style={{ position: "inherit" }}>
      <img src={imageSrc} key={imageSrc} />
      {/* icon wishlist */}
      <i
        onClick={() => {
          addProductToLocalWishlist(product);
        }}
        style={style.button(5)}
      >
        <IoIosHeartEmpty />
      </i>
      {/* icon compare */}
      <i
        onClick={() => addProductToLocalCompare(product)}
        style={style.button(45)}
      >
        <MdCompareArrows />
      </i>
    </div>
  );
}
