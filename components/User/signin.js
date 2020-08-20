import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { onSignIn, init } from "../../apollo/action";
import { getErrorMessage } from "../../lib/chip";
import { useApollo } from "../../apollo/client";
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
        onSignIn({ user: item });
        await router.push({ pathname: "/" });
        await client.resetStore();
        init();
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }
  return (
    <Fragment>
      <h2>Đăng Nhập</h2>
      <form noValidate onSubmit={handleSubmit}>
        <h5>Tài khoản</h5>
        <input
          required
          id="email"
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
          id="password"
          style={{ border: "1px solid black", padding: 3, paddingLeft: 13 }}
        />

        <button
          type="submit"
          style={{
            marginTop: 21,
          }}
        >
          Tiếp Tục
        </button>
        {errorMsg}
      </form>
    </Fragment>
  );
}
