import { OrderItems } from "./orderItems";
import { Row, Col } from "reactstrap";
import { formatMoney } from "../../lib/chip";
import { Divider } from "../src/Divider";
export function Item({ order }) {
  const stepName = [
    "Đặt thành công",
    "Đã đóng gói",
    "Đã vận chuyển",
    "Đã thanh toán",
    "Hoàn thành",
  ];
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 8,
        padding: 15,
        margin: 15,
      }}
    >
      <Row>
        <Col sm={12} md={6}>
          <h5>Địa Chỉ:</h5>
          <a>{order?.customer?.name}</a>
          <a>{order?.customer?.phone}</a>
          <a>{order?.customer?.address}</a>
          <h5>Trạng Thái: </h5>
          {stepName.map((step, index) =>
            index <= order.step ? (
              <i key={index}>
                {index != 0 ? " > " : null} {step}
              </i>
            ) : null
          )}
        </Col>

        <Col>
          <OrderItems items={order.items} />
        </Col>
        <Col xs={12}>
          <a>Tổng: {formatMoney(order.total)}</a>
        </Col>
      </Row>
    </div>
  );
}
