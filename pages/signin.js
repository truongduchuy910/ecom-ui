import { SignIn as In } from "../components/User/signin";
import { SignUp as Up } from "../components/User/signup";
import { Container, Col, Row } from "reactstrap";
import { Divider } from "../components/src/Divider";
import { BirdBg } from "../components/src/BirdBg";
import { Box } from "../components/src/Box";
import { NhaYenBg } from "../components/src/NhaYenBg";
export default function SignIn() {
  return (
    <Container>
      <section style={{ marginTop: 34, marginBottom: 34 }}>
        <NhaYenBg>
          <div
            style={{
              maxWidth: 500,
              // marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              padding: 30,
              height: "100%",
            }}
          >
            <Divider />

            <In />
            <Divider />
            <Up />
            <Divider />
          </div>
        </NhaYenBg>
      </section>
    </Container>
  );
}
