import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Loading } from "../Loading";
import { One } from "./One";
import { Query, SellerContext } from "../../apollo";


const Banners = ({ option = 1, onChoose }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { banner: { seller: theme.seller } };
    const { data, error, loading } = useQuery(gql`query($banner: BannerWhereInput) {
        allBanners(where: $banner) {
            id
            file {
                publicUrl
            }
        }
    }`, { variables });
    // modify
    const banners = data?.allBanners.map(banner => {
        banner?.file?.publicUrl = theme.server + banner?.file?.publicUrl;
        return banner;
    })
    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One banners={banners} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />

}
export default Banners