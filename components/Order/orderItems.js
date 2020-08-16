import { Item as Product } from "../Product/shortItem";
import { OrderItem } from "./orderItem";
export function OrderItems({ items }) {
  return items ? (
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Price</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  ) : null;
}
