import { Row, Container, Col } from "reactstrap";
import { theme } from "../../config";
import { css } from "../src/css";
import { TextWrap } from "./TextWrap";
const Item = ({ src, title = "", content = "" }) => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: theme.spacing(4),
      }}
    >
      <img
        src={src}
        style={{ width: "100%", borderRadius: theme.spacing(2) }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: theme.spacing(2),
          zIndex: 2,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div>
          <h2 style={{ fontWeight: "bold" }}>{title}</h2>
          <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
export const Feature = () => {
  return (
    <section
      style={{
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
      }}
    >
      <Container>
        <TextWrap>
          <h5
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              color: theme.secondary,
              fontSize: "1rem",
              marginBottom: theme.spacing(3),
            }}
          >
            Thương Hiệu
          </h5>
          <h2 style={{ ...css.h2, textAlign: "center", fontWeight: "bold" }}>
            Chất Lượng. Cao Cấp. Tinh Túy.
          </h2>
          <p style={{ textAlign: "center", marginBottom: theme.spacing(5) }}>
            Yến Sào Đất Quảng tự vào với chất lượng cao cấp, sự tinh túy được
            quê hương Quảng Nam ban tặng.
          </p>
        </TextWrap>
        <Row style={{ marginBottom: theme.spacing(5) }}>
          <Col xs={12} md={4}>
            <Item
              src={"/yensaodatquang/assets/img/xay-dung-nha-yen.jpg"}
              title="Xây Dựng"
              content="Hang đá nhân tạo"
            />
          </Col>
          <Col xs={12} md={4}>
            <Item
              src={"/yensaodatquang/assets/img/khai-thac-to-yen.jpg"}
              title="Khai Thác"
              content="Tuyển chọn tổ tốt nhất"
            />
          </Col>
          <Col xs={12} md={4}>
            <Item
              src={"/yensaodatquang/assets/img/gia-cong-to-yen.jpg"}
              title="Gia Công"
              content="Làm sạch lông thủ công"
            />
          </Col>
        </Row>
        <TextWrap>
          <p style={{ color: theme.secondary }}>
            Yến Sào được xếp vào bát trân (8 món ăn thuộc hàng tuyệt phẩm, chỉ
            vua chúa mới được sử dụng), bên cạnh nem công, chả phượng, da tê
            ngưu, bàn tay gấu, gân nai, môi đười ươi và thịt chân voi.
          </p>
        </TextWrap>
      </Container>
    </section>
  );
};
