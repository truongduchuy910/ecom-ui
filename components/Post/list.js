import { gql, useQuery } from "@apollo/client";

import { Loading } from "../src/Loading";

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
    variables: { seller: theme.seller },
  });

  if (loading || error) return <Loading />;

  let source = attributes ? attributes : data.allAttributes;
  return !loading && data ? (
    <div>
      <img
        src={theme.server + data.allPosts[0]?.file?.publicUrl}
        style={{ borderRadius: 15 }}
      />

      {JSON.stringify(data)}
    </div>
  ) : null;
}
