import { Container, Row, Col } from "reactstrap";
import { Box } from "./Box";
import { BirdBg } from "./BirdBg";

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img src="/assets/img/nha-xuong.JPG" />
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h4>Công Ty Yến Sào Đất Quảng</h4>
              <p>Địa Chỉ: xã Bình Đào, huyện Thăng Bình, tỉnh Quảng Nam.</p>
              <p>Mã Số Thuế: 4001040242</p>
              <p>Tư Vấn Sản Phẩm: 0914758179 (chị Vinh)</p>
              <p>Thi Công Nhà Yến: 0973799915 (anh Long)</p>
              <a href="facebook.com/yensaodatquang.vn/">
                Facebook: Yến Sào Đất Quảng Thương Hiệu Chính Hãng
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};
