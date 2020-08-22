import { gql, useQuery } from "@apollo/client";
import { Item } from "./item";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config/yensaodatquang.json";
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
      <h5>{attributeGroups.name}</h5>
      {attributeGroups?.map((attributeGroup) => (
        <Item key={attributeGroups.id} attributeGroup={attributeGroup} />
      ))}
    </div>
  );
  // const { data, loading, error } = useQuery(GET_ATTRIBUTES, {
  //   variables: { seller: page.seller },
  // });

  // if (loading) return <Loading/>;
  // return !loading && data ? (
  //   <div>
  //     <p>--------------------</p>
  //     <Item attribute={{ id: "all-attribute", name: "All ", url: "all" }} />
  //     {data.allAttributes.map((attribute) => (
  //       <Item key={attribute.id} attribute={attribute} />
  //     ))}
  //   </div>
  // ) : null;
}
