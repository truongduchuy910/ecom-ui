import Link from "next/link";
import { categoryVar, queryVar } from "../../apollo/action";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export function Item({ categories }) {
  const router = useRouter();
  let query = router.query;

  const category = categories[categories.length - 1];

  const childUrl = category.childs
    ? category.childs.map((category) => category.url).toString()
    : [];
  const handleClick = () => {
    if (category.url === "all") {
      delete query.category;
      delete query.categories;
      router.push({ query });
    } else {
      query.category = category.url;
      query.categories = childUrl;
      router.push({ query });
    }
  };
  return (
    <div>
      <a
        style={{
          fontWeight: query.category === category.url ? "bold" : null,
          paddingLeft: categories.length * 13,
        }}
        onClick={handleClick}
      >
        {category.label ? category.label : category.name}
      </a>
      {category.childs
        ? category.childs.map((child) => (
            <Item
              key={child.id}
              category={child}
              categories={[...categories, child]}
            />
          ))
        : null}
    </div>
  );
}
