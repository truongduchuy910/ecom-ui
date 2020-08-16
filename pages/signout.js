import { useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import cache, { USER, onSignOut } from "../apollo/action";
const SignOutMutation = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;
function SignOut() {
  const client = useApolloClient();
  const router = useRouter();
  const [signOut] = useMutation(SignOutMutation);

  useEffect(() => {
    client.clearStore().then(() => {
      signOut().then(() => {
        onSignOut();
        localStorage.removeItem("token");
        router.push({ pathname: "/signin" }).then(() => {
          router.reload();
        });
      });
    });
  }, [signOut, router, client]);

  return <i>sign-out</i>;
}

export default SignOut;
