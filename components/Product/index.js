import { gql, useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { Query, SellerContext } from "../../apollo";
import { Loading } from "../Loading";
import { One } from "./One";

const Products = ({ option = 1, ProductWhereInput, limit = 3 }) => {
    // data
    let theme = useContext(SellerContext);
    let variables = { product: { seller: theme.seller, ...ProductWhereInput }, first: limit, skip: 0 };
    const { data, error, loading, fetchMore } = useQuery(gql`query($first:Int,$skip:Int, $product: ProductWhereInput) {
        allProducts(first:$first,skip:$skip, where: $product) {
            id
            name
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
            variables.skip = data?.allProducts?.length;
            fetchMore({
                variables,
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult.allProducts?.length) {
                        setMor(false)
                        return prev;
                    }
                    return Object.assign({}, prev, {
                        allProducts: [...prev.allProducts, ...fetchMoreResult.allProducts],
                    });
                },
            });
        } catch (e) {
            setMor(false)
        }
    } : false;
    // modify
    const products = data?.allProducts.map(product => {

        return { ...product, guilde: theme.server + product?.file?.publicUrl };
    })
    // render
    if (!(error || loading)) {
        switch (option) {
            case 1: return <One products={products} more={more} />
            default:
                return <pre>Invalid components.</pre>
        }
    } else return <Loading />
}
export default Products