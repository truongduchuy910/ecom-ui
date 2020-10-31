import { Fragment } from "react";
import Products from "../List/index";

const One = ({ product }) => {
    return <Fragment>
        <h1>{product.name}</h1>
        <Products ProductWhereInput={{ category: { id: product?.category?.id }, id_not: product.id }} />
    </Fragment>
}
export default One;