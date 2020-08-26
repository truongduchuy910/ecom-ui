const spacing = [0, 5, 8, 13, 21, 34, 55];
import { theme } from "../../config/index";
export default {
  ...theme,
  spacing: (n) => spacing[n],
};
