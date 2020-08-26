import { page } from "../../../config/index";

export function Divider() {
  return (
    <center>
      <img
        style={{ height: 40, marginTop: 5, marginBottom: 5 }}
        src={page.divider}
      />
    </center>
  );
}
