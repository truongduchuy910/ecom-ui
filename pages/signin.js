import { SignIn as In } from "../components/User/signin";
import { SignUp as Up } from "../components/User/signup";
import { Container, Col, Row } from "reactstrap";
import { Divider } from "../components/src/Divider";
import { SignInBg } from "../components/src/SignInBg";
import { theme } from "../config/index";

export default function SignIn() {
  return (
    <Container>
      <section
        style={{
          marginTop: 34,
          marginBottom: 34,
          backgroundColor: theme.backgroundColor,
        }}
      >
        <div
          style={{
            maxWidth: 500,
            // marginLeft: "auto",
            marginRight: "auto",
            borderRadius: theme.spacing(2),
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
      </section>
    </Container>
  );
}
