import { Fragment, useState } from "react";

export function Header({ hashtags = [],
    onChoose = () => { }, limit = 7 }) {
    const [choose, setChoose] = useState()
    const [more, setMore] = useState(false)

    return (
        <Fragment>
            {hashtags.length ? hashtags.slice(0, more ? hashtags.length : limit).map(hashtag => {
                return (<pre
                    key={hashtag.id}
                    onClick={() => {
                        setChoose(hashtag.id);
                        onChoose(hashtag);
                    }}>{hashtag.name}</pre>)
            }) : <pre>no result.</pre>}
            {hashtags.length > limit ? <pre onClick={() => setMore(!more)}>{more ? 'less' : 'more'}</pre> : null}
        </Fragment>
    );
}
