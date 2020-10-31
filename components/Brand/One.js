import { Fragment, useState } from "react";

export function One({ brands = [], onChoose = () => {} }) {
  const [choose, setChoose] = useState();
  return (
    <Fragment>
      <h5>Thuong Hieu</h5>
      {brands.map((brand) => {
        return (
          <pre
            onClick={() => {
              setChoose(brand.id);
              onChoose(brand);
            }}
          >
            {brand.name}
          </pre>
        );
      })}
    </Fragment>
  );
}
