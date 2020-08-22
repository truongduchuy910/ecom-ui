import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { onSignIn, init as reloadApollo } from "../../apollo/action";
import { getErrorMessage } from "../../lib/chip";
import { useApollo } from "../../apollo/client";
import { SignInMutation } from "./signin";
import { compose } from "redux";
const SignUpMutation = gql`
  mutation($email: String!, $password: String!) {
    createUser(data: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
export function SignUp() {
  const [signUp] = useMutation(SignUpMutation);
  const [signIn] = useMutation(SignInMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();
  const client = useApollo();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function letSignIn({ email, password }) {
    try {
      const { data: dataSignIn } = await signIn({
        variables: {
          email: email,
          password: password,
        },
      });
      // if success
      if (dataSignIn.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: { token, item },
        } = dataSignIn;
        localStorage.setItem("token", token);
        onSignIn({ user: item });
        await router.push({ pathname: "/" });
        await client.resetStore();
        reloadApollo();
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }

  //if (email && password) letSignIn();
  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email?.value;
    const password = event.currentTarget.elements.password?.value;
    const confirm = event.currentTarget.elements.confirm?.value;
    console.log(email, password, confirm);
    // pre check
    if (!email) {
      setErrorMsg("Vui lòng nhập tên tài khoản");
      return;
    }
    if (password !== confirm) {
      setErrorMsg("Nhập khẩu nhập lại không khớp");
      return;
    }
    // Sign up
    try {
      await client.clearStore();
      const { data } = await signUp({
        variables: {
          email,
          password,
        },
      });
      // if Success
      if (data.createUser) {
        // try login
        letSignIn({ email, password });
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }
  return (
    <Fragment>
      <h2>Đăng Ký Tài Khoản</h2>
      <form noValidate onSubmit={handleSubmit}>
        <h5>Tài khoản</h5>
        <input
          required
          label="Tài khoản"
          name="email"
          placeholder="Nhập Tài khoản"
          style={{ border: "1px solid black", padding: 3, paddingLeft: 13 }}
        />
        <h5>Mật khẩu</h5>
        <input
          required
          name="password"
          label="Mật khẩu"
          placeholder="Nhập Mật khẩu"
          type="password"
          style={{ border: "1px solid black", padding: 3, paddingLeft: 13 }}
        />
        <h5>Nhập Lại Mật Khẩu</h5>

        <input
          required
          name="confirm"
          label="Mật khẩu"
          placeholder="Nhập Lại Mật Khẩu"
          type="password"
          style={{ border: "1px solid black", padding: 3, paddingLeft: 13 }}
        />

        <button
          type="submit"
          style={{
            marginTop: 21,
          }}
        >
          Đăng Ký
        </button>
        <p>{errorMsg}</p>
      </form>
    </Fragment>
  );
}
