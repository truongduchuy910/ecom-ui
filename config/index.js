import json from "./hypedanang.json";
import { SellerContext } from "../components/src/SellerProvider";
const spacing = [0, 5, 8, 13, 21, 34, 55, 89];
export const page = {
  ...json.page,
  seller: { host: typeof window !== "undefined" ? window.location.host : null },
};
export const theme = {
  SellerContext,
  ...json.theme,
  spacing: (n) => spacing[n],
};
