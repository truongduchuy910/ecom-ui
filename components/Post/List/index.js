import { gql, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { Query, SellerContext } from "../../../apollo";
import { Loading } from "../../Loading";
import { One } from "./One";

const Posts = ({ option = 1, PostWhereInput, limit = 3 }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { post: { seller: theme.seller, ...PostWhereInput }, first: limit, skip: 0 };
    const { data, error, loading, fetchMore } = useQuery(gql`query($first:Int,$skip:Int, $post: PostWhereInput) {
        allPosts(first:$first,skip:$skip, where: $post) {
            id
            title
            file {
                publicUrl
            }
            url
        }
    }`, { variables });

    // method
    const [mor, setMor] = useState(true);
    const more = mor ? () => {
        try {
            variables.skip = data?.allPosts?.length;
            fetchMore({
                variables,
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult.allPosts?.length) {
                        setMor(false)
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        allPosts: [...prev.allPosts, ...fetchMoreResult.allPosts],
                    });
                },
            });
        } catch (e) {
            setMor(false)
        }
    } : false;
    // modify
    const posts = data?.allPosts.map(post => {

        return { ...post, guilde: theme.server + post?.file?.publicUrl };
    })
    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One posts={posts} more={more} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />
}
export default Posts