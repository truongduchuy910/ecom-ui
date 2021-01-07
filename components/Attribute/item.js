import { useRouter } from "next/router";
import { removeItemOnce } from "../../lib/chip";
import { FiThermometer } from "react-icons/fi";

import { filterAttributeVar } from "../../apollo/client";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
import { IoIosRemoveCircleOutline } from "react-icons/io";
export function Item({ attribute, style, removeIcon }) {
  const router = useRouter();
  const theme = useContext(SellerContext);

  let query = router.query;
  let currentAttributes = query.attributes ? query.attributes.split(",") : [];
  const exist = currentAttributes.includes(attribute.url);
  const handleClick = () => {
    if (exist) {
      currentAttributes = removeItemOnce(currentAttributes, attribute.url);
    } else {
      currentAttributes = currentAttributes.concat([attribute.url]);
    }

    query.attributes = currentAttributes.toString();
    if (attribute.url === "all") delete query.attributes;
    router.push({ query });
  };

  return (
    <a
      style={{
        ...style,
        color: theme.color,
        fontWeight: exist ? "bold" : null,
        display: "block",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {attribute.name}
      {removeIcon ? (
        <IoIosRemoveCircleOutline style={theme.css.removeIcon} />
      ) : null}
    </a>
  );
}
