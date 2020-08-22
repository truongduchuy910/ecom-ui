import Link from "next/link";
import { categoryVar, queryVar } from "../../apollo/action";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
import { theme } from "../../config/yensaodatquang.json";
import { filterCategoryVar } from "../../apollo/client";
export function Item({ categories = [], pre }) {
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
    <div>
      <a
        style={{
          color: theme.color,
          fontWeight: query.category === category.url ? "bold" : null,
          paddingLeft: (categories.length - 1) * 13,
          marginBottom: 13,
        }}
        onClick={handleClick}
      >
        {category.label ? category.label : category.name}
      </a>
      {/* {category.childs
        ? category.childs.map((child) => (
            <Item
              key={child.id}
              category={child}
              categories={[...categories, child]}
            />
          ))
        : null} */}
    </div>
  ) : null;
}
