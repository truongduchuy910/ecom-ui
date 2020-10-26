import { Item as Product } from "../Product/shortItem";
import { OrderItem } from "./orderItem";
export function OrderItems({ items }) {
  return items
    ? items.map((item) => <OrderItem key={item.id} item={item} />)
    : null;
}
