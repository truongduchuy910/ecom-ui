import { Fragment, useState } from "react";
import Hashtags from "../Hashtag";


const News = () => {
    const [hashtag, setCategory] = useState()
    return <Fragment>
        <Hashtags onChoose={hashtag => setCategory(hashtag.url)} />

    </Fragment>
}
export default News;