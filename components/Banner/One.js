import { Fragment, useState } from "react";

export function One({ banners = [] }) {
  return (
    <Fragment>
      {banners.map((banner) => {
        return <img width="100%" key={banner.id} src={banner?.img} />;
      })}
    </Fragment>
  );
}
