import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { page, theme } from "../../config/index";

import { getErrorMessage } from "../../lib/chip";
import { Loading } from "../src/Loading";
import { css } from "../src/css";
import { IoIosOptions } from "react-icons/io";
import { useState } from "react";
const GET_ATTRIBUTES = gql`
  query($seller: UserWhereInput) {
    allPosts(where: { seller: $seller }) {
      id
      file {
        publicUrl
      }
    }
  }
`;
export function List({ attributes }) {
  const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
    variables: { seller: page.seller },
  });

  if (loading || error) return <Loading />;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      <img
        src={page.server + data.allPosts[0]?.file?.publicUrl}
        style={{ borderRadius: 15 }}
      />

      {JSON.stringify(data)}
    </div>
  ) : null;
}
