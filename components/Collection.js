import { Fragment, useState } from "react";
import Categories from "../Category";
import Products from "../Product";


const Collection = ({ ProductWhereInput }) => {
    const [category, setCategory] = useState()
    return <Fragment>
        <Categories onChoose={category => setCategory(category.url)} />
        <Products ProductWhereInput={{ ...ProductWhereInput, category: { url: category } }} />
    </Fragment>
}
export default Collection;