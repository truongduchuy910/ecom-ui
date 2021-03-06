import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { onSignIn, init } from "../../apollo/action";
import { getErrorMessage } from "../../lib/chip";
import { useApollo } from "../../apollo/client";
import { css } from "../src/css";
import { theme } from "../../config/index";

export const SignInMutation = gql`
  mutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      token
      item {
        id
        email
        isAdmin
        isSeller
      }
    }
  }
`;

export function SignIn() {
  const router = useRouter();
  const client = useApollo();
  const [signIn] = useMutation(SignInMutation);
  const [errorMsg, setErrorMsg] = useState();
  const redirect = router.query?.redirect;
  async function handleSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    try {
      await client.clearStore();
      const { data } = await signIn({
        variables: {
          email: email,
          password: password,
        },
      });
      if (data.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: { token, item },
        } = data;
        localStorage.setItem("token", token);
        await client.resetStore();
        await router.push({ pathname: redirect ? redirect : "/" });

        init();
        onSignIn({ user: item });
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }
  return (
    <Fragment>
      <h2 style={css.h2}>Đăng Nhập</h2>
      <form noValidate onSubmit={handleSubmit}>
        <h5 style={css.h5}>Tài khoản</h5>
        <input
          required
          id="email"
          label="Tài khoản"
          name="email"
          placeholder="Nhập Tài khoản"
          style={{
            ...css.input,
            width: "100%",
            marginBottom: theme.spacing(3),
            borderRadius: theme.spacing(2),
          }}
        />
        <h5 style={css.h5}>Mật khẩu</h5>
        <input
          required
          name="password"
          label="Mật khẩu"
          placeholder="Nhập Mật khẩu"
          type="password"
          id="password"
          style={{
            ...css.input,
            width: "100%",
            borderRadius: theme.spacing(2),
          }}
        />

        <button
          type="submit"
          style={{
            ...css.button,
            marginTop: 21,
          }}
        >
          Tiếp Tục
        </button>
        <p> {errorMsg}</p>
      </form>
    </Fragment>
  );
}
