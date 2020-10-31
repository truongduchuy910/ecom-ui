import { Fragment, useState } from "react";

export function One({ attributes = [], onChoose = () => {} }) {
  const [choose, setChoose] = useState();
  return (
    <Fragment>
      <h5>Thuoc Tinh</h5>
      {attributes.map((attribute) => {
        return (
          <pre
            onClick={() => {
              setChoose(attribute.id);
              onChoose(attribute);
            }}
          >
            {attribute.name}
          </pre>
        );
      })}
    </Fragment>
  );
}
