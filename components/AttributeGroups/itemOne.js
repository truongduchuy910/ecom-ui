// show in product detail
import { List as Attributes } from "../Attribute/listOne";
export function Item({ attributeGroup }) {
  return <Attributes attributes={attributeGroup.attributes} />;
}
