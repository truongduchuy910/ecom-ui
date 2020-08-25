import { useEffect } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import cache, {
  USER,
  onSignOut,
  init as reloadApolloState,
} from "../apollo/action";
import { BirdBg } from "../components/src/BirdBg";
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
    client
      .resetStore()
      .then(() => {
        signOut()
          .then(() => {
            onSignOut();

            localStorage.removeItem("token");

            router.push({ pathname: "/signin" }).then(() => {
              reloadApolloState();
            });
          })
          .catch(() => {});
      })
      .catch(() => {
        router.push("/");
      });
  }, [signOut, router, client]);

  return null;
}

export default SignOut;
