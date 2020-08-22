import { page } from "../../config/yensaodatquang.json";
import { config } from "../config";
export function SignInBg({ children, style }) {
  return (
    <div
      style={{
        ...style,
        background: `url(${page.signInBg})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
