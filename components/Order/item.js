import { OrderItems } from "./orderItems";
import { Row, Col } from "reactstrap";
import { formatMoney } from "../../lib/chip";
import { theme, page } from "../../config/index";
import { css } from "../src/css";
import { gql, useMutation } from "@apollo/client";
const UPDATE_step = gql`
  mutation($id: ID!, $step: Int) {
    updateOrder(id: $id, data: { step: $step }) {
      id
      step
    }
  }
`;
export function Item({ order, user, onChange }) {
  const [updateStep] = useMutation(UPDATE_step);
  const stepName = ["Đặt thành công", "Đã đóng gói", "Đã vận chuyển"];

  const isSeller = user?.isSeller == true && user.id == page.seller.id;
  const onConfirm = async () => {
    const id = order.id;
    const step = Number(order.step) + 1;
    const { data } = await updateStep({
      variables: {
        id,
        step,
      },
    });
    onChange();
  };
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
            <h5
              style={{
                ...css.h5,
                display: "inline-block",
                marginRight: theme.spacing(2),
              }}
            >
              Đặt ngày:
            </h5>
            <a style={{ display: "inline-block" }}>
              {new Date(order?.time).toLocaleDateString()}
            </a>
          </div>
          <div style={{ marginBottom: theme.spacing(3) }}>
            <h5 style={css.h5}>Địa Chỉ:</h5>
            <a style={{ display: "block" }}>{order?.customer?.name}</a>
            <a style={{ display: "block" }}>{order?.customer?.phone}</a>
            <a style={{ display: "block" }}>{order?.customer?.address}</a>
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
          <h5
            style={{
              ...css.h5,
              display: "inline-block",
              marginRight: theme.spacing(2),
            }}
          >
            Tổng:
          </h5>
          <a
            style={{
              marginBottom: theme.spacing(3),
              display: "inline-block",
            }}
          >
            {formatMoney(order.total)}
          </a>

          {isSeller && order.step < 2 ? (
            <button
              style={{ ...css.button }}
              onClick={() => {
                onConfirm();
              }}
            >
              Xác Nhận {stepName[Number(order.step) + 1]}
            </button>
          ) : null}
        </Col>

        <Col>
          <div style={{ marginBottom: theme.spacing(3) }}>
            <OrderItems items={order.items} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
