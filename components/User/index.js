import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { USER } from "../../apollo/action";
import { useRouter } from "next/router";
import { Fragment } from "react";

export function Users() {
  const { data } = useQuery(USER);
  return typeof window !== "undefined" ? (
    data?.user?.id ? (
      <Fragment>
        <Link href="">
          <a>
            Hi {data?.user?.isSeller ? "seller" : null} {data.user.email}
          </a>
        </Link>

        <Link href="/signout">
          <a>Signout</a>
        </Link>
      </Fragment>
    ) : (
      <Link href="/signin">
        <a>Signin</a>
      </Link>
    )
  ) : (
    <label>server</label>
  );
}
