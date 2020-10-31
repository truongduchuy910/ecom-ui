import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Loading } from "../Loading";
import { One } from "./One";
import { Query, SellerContext } from "../../apollo";


const Hashtags = ({ option = 1, onChoose }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { hashtag: { seller: theme.seller } };
    const { data, error, loading } = useQuery(gql`query($hashtag: HashtagWhereInput) {
        allHashtags(where: $hashtag) {
            id
            name
            url
        }
    }`, { variables });
    // modify
    const hashtags = data?.allHashtags.map(hashtag => {
        return { ...hashtag, img: theme.server + hashtag?.file?.publicUrl };
    })
    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One hashtags={hashtags} onChoose={onChoose} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />
}
export default Hashtags