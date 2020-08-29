import { useRouter } from "next/router";
import theme from "../src/theme";
export function Item({ categories = [], pre, style }) {
  const router = useRouter();
  let query = router.query;
  const category = categories[categories?.length - 1];

  const childUrl = category?.childs
    ? category.childs.map((category) => category.url).toString()
    : [];
  console.log(pre);
  const handleClick = () => {
    if (category.url === "back") {
      if (category?.parent) query.category = category?.parent?.url;
      else delete query.category;
      delete query.categories;
      router.push({ query });
    } else {
      query.category = category.url;
      query.categories = childUrl;
      router.push({ query });
    }
  };
  return category ? (
    <a
      style={{
        ...style,
        color: theme.color,
        fontWeight: query.category === category.url ? "bold" : null,
        marginBottom: theme.spacing(2),
      }}
      onClick={handleClick}
    >
      {category.label ? category.label : category.name}
    </a>
  ) : null;
}
