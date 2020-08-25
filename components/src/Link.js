import { Children } from "react";

import { config } from "../config";
import NextLink from "next/link";
import { useSpring } from "react-spring";

export const Link = ({ children, style, href = "", onClick }) => {
  const props = useSpring({});
  const link = (
    <a style={{ ...style, color: config.theme.color }} onClick={onClick}>
      {children}
    </a>
  );
  return href ? <NextLink href={href}>{link}</NextLink> : link;
};
