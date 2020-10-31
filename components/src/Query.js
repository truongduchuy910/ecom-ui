import { useQuery } from "@apollo/client";

export const Query = ({ query, variables, children }) => {
  const { data, error, loading } = useQuery(query, { variables });
  return children({ data, error, loading });
};
