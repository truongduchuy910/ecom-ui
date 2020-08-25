import { OrderItems } from "./orderItems";
import { Row, Col } from "reactstrap";
import { formatMoney } from "../../lib/chip";
import { Divider } from "../src/Divider";
import theme from "../src/theme";
import { css } from "../src/css";
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
        borderRadius: 8,
        padding: 15,
        margin: 15,
        backgroundColor: theme.backgroundColor,
      }}
    >
      <Row>
        <Col sm={12} md={6}>
          <div style={{ marginBottom: theme.spacing(3) }}>
            <h5 style={css.h5}>Địa Chỉ:</h5>
            <a>{order?.customer?.name}</a>
            <a>{order?.customer?.phone}</a>
            <a>{order?.customer?.address}</a>
          </div>
          <div style={{ marginBottom: theme.spacing(3) }}>
            <h5 style={css.h5}>Trạng Thái: </h5>
            {stepName.map((step, index) =>
              index <= order.step ? (
                <i key={index}>
                  {index != 0 ? " > " : null} {step}
                </i>
              ) : null
            )}
          </div>
        </Col>

        <Col>
          <div style={{ marginBottom: theme.spacing(3) }}>
            <OrderItems items={order.items} />
          </div>
        </Col>
        <Col xs={12}>
          <a>Tổng: {formatMoney(order.total)}</a>
        </Col>
      </Row>
    </div>
  );
}
