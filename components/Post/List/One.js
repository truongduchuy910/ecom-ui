import { Fragment, useState } from "react";
import Link from "next/link";
export function One({ posts = [], more = () => { } }) {


    return (
        <Fragment>
            <h5>Posts</h5>
            {posts.length ? posts.map(post => {
                return <pre key={post.id}>
                    <Link
                        href={{ pathname: `/post`, query: { post: post.url } }}
                    ><a>
                            {post.title}</a>
                    </Link>
                </pre>
            }) : <pre>No result.</pre>}
            {more ? <pre onClick={() => { more() }}>More</pre> : null}
        </Fragment>
    );
}
