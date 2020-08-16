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
  return (
    <div>
      <h6>{attributeGroups.name}</h6>
      {attributeGroups?.map((attributeGroup) => (
        <Item key={attributeGroup.id} attributeGroup={attributeGroup} />
      ))}
    </div>
  );
}
