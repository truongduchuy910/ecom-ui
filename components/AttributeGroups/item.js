import { List as Attributes } from "../Attribute/list";
export function Item({ attributeGroup }) {
  return <Attributes attributes={attributeGroup.attributes} />;
}
