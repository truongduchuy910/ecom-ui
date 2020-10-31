import { gql, useQuery } from "@apollo/client";
import { Loading } from "../../Loading";
import One from "./One";
const Item = ({ option = 1, ProductWhereInput }) => {
  const { data, loading, error } = useQuery(gql`
    query($condition: ProductWhereInput) {
      allProducts(first: 1, where: $condition) {
        id
        url
        image {
          publicUrl
        }
        name
        price
        sale
        images {
          file {
            publicUrl
          }
        }
        brand {
          name
          url
        }
        category {
          id
          name
          url
        }
        description
        file {
          publicUrl
        }
        guide
        altImages
      }
    }
  `, { variables: { condition: ProductWhereInput } })
  if (!(error || loading)) {
    if (data?.allProducts.length)
      switch (option) {
        case 1: return <One product={data?.allProducts[0]} />
      } else return <pre>No result.</pre>
  } else return <Loading />
}
export default Item