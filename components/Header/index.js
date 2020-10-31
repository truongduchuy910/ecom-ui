import { One } from "./One";
import { Two } from "./Two";
const Header = ({ option = 1 }) => {
  switch (option) {
    case 1:
      return <One />;
      case 2:
      return <Two />;
    default:
      return <pre>Invalid components.</pre>;
  }
};
export default Header;
