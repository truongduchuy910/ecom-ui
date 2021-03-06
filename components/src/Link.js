import NextLink from "next/link";
import { useSpring } from "react-spring";
import { theme } from "../../config";

export const Link = ({ children, style, href = "", onClick }) => {
  const link = (
    <a style={{ ...style, display: "inline-block" }} onClick={onClick}>
      {children}
    </a>
  );
  return href ? <NextLink href={href}>{link}</NextLink> : link;
};
