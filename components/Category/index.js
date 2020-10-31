import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Loading } from "../Loading";
import { One } from "./One";
import { Query, SellerContext } from "../../apollo";


const Categories = ({ option = 1, onChoose }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { category: { seller: theme.seller } };
    const { data, error, loading } = useQuery(gql`query($category: CategoryWhereInput) {
        allCategories(where: $category) {
            id
            name
            url
        }
    }`, { variables });
    // modify
    const categories = data?.allCategories.map(category => {
        return { ...category, img: theme.server + category?.file?.publicUrl };
    })
    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One categories={categories} onChoose={onChoose} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />

}
export default Categories