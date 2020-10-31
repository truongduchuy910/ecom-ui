import { useQuery } from "@apollo/client";

export const Query = ({ query, variables, children }) => {
  const { data, error, loading, fetchMore } = useQuery(query, { variables });
  function more(collection = '') {
    const count = data[collection]?.length;
    variables.first = count;
    try {
      fetchMore({
        variables,
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.allProducts?.length) {
            return prev;
          }
          return Object.assign({}, prev, {
            allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts],
          });
        },
      });
    } catch (e) { }
  }
  return children({ data, error, loading, more });
};
