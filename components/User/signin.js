import { useState } from "react";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { onSignIn } from "../../apollo/action";
import { getErrorMessage } from "../../lib/chip";
import { useApollo } from "../../apollo/client";
const SignInMutation = gql`
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
  const [signIn] = useMutation(SignInMutation);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();
  const client = useApollo();
  async function handleSubmit(event) {
    event.preventDefault();

    const emailElement = event.currentTarget.elements.email;
    const passwordElement = event.currentTarget.elements.password;

    try {
      await client.clearStore();

      const { data } = await signIn({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      });
      if (data.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: { token, item },
        } = data;
        localStorage.setItem("token", token);
        onSignIn({ user: item });
        router.reload();
        await router.push({ pathname: "/" });
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error));
    }
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <input required id="email" label="Tài khoản" name="email" />
      <input
        required
        name="password"
        label="Mật khẩu"
        type="password"
        id="password"
      />

      <button type="submit">Đăng Nhập</button>
      {errorMsg}
    </form>
  );
}
