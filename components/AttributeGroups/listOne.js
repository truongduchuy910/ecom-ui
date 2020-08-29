// show in product detail
import { gql, useQuery } from "@apollo/client";
import { Item } from "./itemOne";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Link } from "../src/Link";
import { queryVar } from "../../apollo/action";
import { page } from "../../config/index";

import { Spinner, Row, Col } from "reactstrap";
import { css } from "../src/css";
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
      {attributeGroups?.map((attributeGroup) => (
        <Row key={attributeGroup.id}>
          <Col xs={4}>
            <h5 style={{ ...css.h5 }}>{attributeGroup.name}:</h5>
          </Col>
          <Col xs={8}>
            <Item attributeGroup={attributeGroup} />
          </Col>
        </Row>
      ))}
    </div>
  );
}
