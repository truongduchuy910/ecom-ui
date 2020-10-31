import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Loading } from "../Loading";
import { One } from "./One";
import { Query, SellerContext } from "../../apollo";

const Attributes = ({ option = 1, onChoose }) => {
  // data
  let theme = useContext(SellerContext);
  let variables = { attribute: { seller: theme.seller } };
  const { data, error, loading } = useQuery(
    gql`
      query($attribute: AttributeWhereInput) {
        allAttributes(where: $attribute) {
          id
          name
          url
        }
      }
    `,
    { variables }
  );

  // render
  if (!(error || loading)) {
    switch (option) {
      case 1:
        return <One attributes={data?.allAttributes} onChoose={onChoose} />;
      default:
        return <pre>Invalid components.</pre>;
    }
  } else return <Loading />;
};
export default Attributes;
