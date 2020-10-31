import { gql, useQuery } from "@apollo/client";
import { Loading } from "../../Loading";
import One from "./One";
const Item = ({ option = 1, PostWhereInput }) => {
  const { data, loading, error } = useQuery(gql`
    query($condition: PostWhereInput) {
      allPosts(first: 1, where: $condition) {
        id
        url
        title
        hashtags {
          id
        }
      }
    }
  `, { variables: { condition: PostWhereInput } })
  if (!(error || loading)) {
    if (data?.allPosts.length)
      switch (option) {
        case 1: return <One post={data?.allPosts[0]} />
      } else return <pre>No result.</pre>
  } else return <Loading />
}
export default Item