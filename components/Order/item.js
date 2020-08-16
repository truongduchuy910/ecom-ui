import { OrderItems } from "./orderItems";
export function Item({ order }) {
  const stepName = [
    "Đặt thành công",
    "Đã đóng gói",
    "Đã vận chuyển",
    "Đã thanh toán",
    "Hoàn thành",
  ];
  return (
    <div style={{ border: "1px solid #eee", padding: 15, margin: 15 }}>
      <h6>Reciper:</h6>
      <a>{order?.customer?.name}</a>
      <a>{order?.customer?.phone}</a>
      <a>{order?.customer?.address}</a>
      <h6>Status: </h6>
      {stepName.map((step, index) =>
        index <= order.step ? (
          <i key={index}>
            {index != 0 ? " > " : null} {step}
          </i>
        ) : null
      )}
      <OrderItems items={order.items} />
    </div>
  );
}
