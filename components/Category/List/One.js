import { Fragment, useState } from "react";

export function One({ categories = [],
    onChoose = () => { }, limit = 7 }) {
    const [choose, setChoose] = useState()
    const [more, setMore] = useState(false)

    return (
        <Fragment>
            <h5>Categories</h5>
            {categories.length ? categories.slice(0, more ? categories.length : limit).map(category => {
                return (<pre
                    key={category.id}
                    onClick={() => {
                        setChoose(category.id);
                        onChoose(category);
                    }}>{category.name}</pre>)
            }) : <pre>no result.</pre>}
            {categories.length > limit ? <pre onClick={() => setMore(!more)}>{more ? 'less' : 'more'}</pre> : null}
        </Fragment>
    );
}
