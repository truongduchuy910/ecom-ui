import { useRouter } from "next/router";
import { removeItemOnce } from "../../lib/chip";
import { FiThermometer } from "react-icons/fi";
import { theme } from "../../config.json";
export function Item({ attribute }) {
  const router = useRouter();
  let query = router.query;
  let currentAttributes = query.attributes ? query.attributes.split(",") : [];
  const exist = currentAttributes.includes(attribute.url);
  const handleClick = () => {
    if (exist) {
      currentAttributes = removeItemOnce(currentAttributes, attribute.url);
    } else {
      currentAttributes = currentAttributes.concat([attribute.url]);
    }

    query.attributes = currentAttributes.toString();
    if (attribute.url === "all") delete query.attributes;
    router.push({ query });
  };
  return (
    <a
      style={{
        color: theme.color,
        marginLeft: 13,
        fontWeight: exist ? "bold" : null,
      }}
      onClick={handleClick}
    >
      {attribute.name}
    </a>
  );
}
