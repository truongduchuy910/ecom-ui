// show in product detail
import { gql, useQuery } from "@apollo/client";
import { Item } from "./itemOne";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config";
import { Spinner } from "reactstrap";
const GET_ATTRIBUTES = gql`
  query($seller: UserWhereInput) {
    allAttributes(where: { seller: $seller }) {
      id
      name
      url
    }
  }
`;
export function List({ attributeGroups }) {
  console.log(attributeGroups);
  return (
    <div>
      {attributeGroups?.map((attributeGroup) => (
        <Fragment key={attributeGroup.id}>
          <h5 style={{ color: "black", display: "inline-block" }}>
            {attributeGroup.name}:
          </h5>
          <Item attributeGroup={attributeGroup} />
        </Fragment>
      ))}
    </div>
  );
}
