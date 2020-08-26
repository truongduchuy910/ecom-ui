import { SignIn as In } from "../components/User/signin";
import { SignUp as Up } from "../components/User/signup";
import { Container, Col, Row } from "reactstrap";
import { Divider } from "../components/src/Divider";
import { BirdBg } from "../components/src/BirdBg";
import { Box } from "../components/src/Box";
import { SignInBg } from "../components/src/SignInBg";
import { IoIosThermometer } from "react-icons/io";
import theme from "../components/src/theme";
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
        <SignInBg style={{ borderRadius: 8 }}>
          <div
            style={{
              maxWidth: 500,
              // marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: theme.backgroundColor,
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
        </SignInBg>
      </section>
    </Container>
  );
}
