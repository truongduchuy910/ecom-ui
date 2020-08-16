import { Item } from "../Product/shortItem";
import { formatMoney } from "../../lib/chip";
export function OrderItem({ item }) {
  return item ? (
    <tr>
      <th>{item.quantity}</th>
      <th>{formatMoney(item.price)}</th>
      <Item product={item.product} />
    </tr>
  ) : null;
}
