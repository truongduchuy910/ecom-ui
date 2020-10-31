import { Container, Row, Col } from "reactstrap";
import { TextWrap } from "./TextWrap";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";

export const BgDivider = () => {
  const theme = useContext(SellerContext);
  return (
    <section
      style={{
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(7),

        background: `url(/yensaodatquang/assets/img/xay-nha-yen.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row
          style={{
            minHeight: "60vh",
          }}
        >
          <Col xs={12} md={6} lg={5}>
            <div
              style={{
                backgroundColor: theme.primary,
                marginTop: -30,
                height: "100%",
                padding: theme.spacing(5),
              }}
            >
              <TextWrap>
                <div style={{}}>
                  <p
                    style={{
                      color: theme.backgroundColor,
                      fontSize: "2.3rem",
                      marginBottom: 0,
                    }}
                  >
                    Tư Vấn Thi Công
                  </p>
                  <p
                    style={{
                      color: theme.backgroundColor,
                      textTransform: "uppercase",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      marginBottom: 0,
                    }}
                  >
                    Nhà Yến.
                  </p>
                  <p
                    style={{
                      color: theme.backgroundColor,
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Ở Quảng Nam có một mỏ đá tự nhiên. Tương đương với loại đá ở
                    Cù Lao Chàm. Cho nên Yến Sào Đất Quảng đã vận dụng loại đá
                    đó làm nhà Yến. Làm độ bền của thanh làm tổ gần như vĩnh
                    cửu. Và chất lượng tổ Yến cho ra hoàn toàn không thua gì Yến
                    trên đảo.
                  </p>
                </div>
              </TextWrap>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
