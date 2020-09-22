import { SignIn as In } from "../components/User/signin";
import { SignUp as Up } from "../components/User/signup";
import { Container, Col, Row } from "reactstrap";
import { ListBanner } from "../components/Banner/list";

import { useContext } from "react";
import { SellerContext } from "../components/src/SellerProvider";
export default function SignIn() {
  const theme = useContext(SellerContext);
  return (
    <Container>
      <section
        style={{
          marginTop: 34,
          marginBottom: 34,
          backgroundColor: theme.backgroundColor,
          padding: theme.spacing(4),
        }}
      >
        <Row>
          <Col xs={12} md={4} style={{ paddingTop: theme.spacing(4) }}>
            <In />
            <Up />
          </Col>
          <Col xs={12} md={8}>
            <div style={{ height: "100%" }}>
              <div
                style={{
                  width: "100%",
                  height: "60vh",
                  background: `url(${theme.server + theme.file?.publicUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: theme.spacing(2),
                }}
              ></div>{" "}
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
