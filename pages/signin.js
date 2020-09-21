import { SignIn as In } from "../components/User/signin";
import { SignUp as Up } from "../components/User/signup";
import { Container, Col, Row } from "reactstrap";
import { Divider } from "../components/src/Divider";
import { SignInBg } from "../components/src/SignInBg";
import { theme } from "../config/index";
import { ListBanner } from "../components/Banner/list";
export default function SignIn() {
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
              <ListBanner style={{ height: "100%" }} />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
