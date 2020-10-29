import { Fragment, useState } from "react";

export function One({ banners = [],
}) {


    return (
        <Fragment>
            <h5>Banners</h5>
            {banners.map(banner => {
                return (<img
                    width="100%"
                    key={banner.id}
                    src={banner?.file?.publicUrl}
                />)
            })}
        </Fragment>
    );
}
