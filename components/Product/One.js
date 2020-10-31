import { Fragment, useState } from "react";
import Link from "next/link";
export function One({ products = [], more = () => { } }) {


    return (
        <Fragment>
            <h5>Products</h5>
            {products.length ? products.map(product => {
                return <pre key={product.id}>
                    <Link
                        href={{ pathname: `/detail`, query: { detail: product.url } }}
                    ><a>
                            {product.name}</a>
                    </Link>
                </pre>
            }) : <pre>No result.</pre>}
            {more ? <pre onClick={() => { more() }}>More</pre> : null}
        </Fragment>
    );
}
