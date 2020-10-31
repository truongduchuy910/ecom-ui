import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Loading } from "../Loading";
import { One } from "./One";
import { Query, SellerContext } from "../../apollo";


const Brands = ({ option = 1, onChoose }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { brand: { seller: theme.seller } };
    const { data, error, loading } = useQuery(gql`query($brand: BrandWhereInput) {
        allBrands(where: $brand) {
            id
            name
            url
        }
    }`, { variables });

    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One brands={data?.allBrands} onChoose={onChoose} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />


}
export default Brands