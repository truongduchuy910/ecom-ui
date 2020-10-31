import { useRouter } from "next/router";
import Item from "../components/Post/Item/index";
export default function ProductDetali() {
  const router = useRouter();
  const { post } = router.query;
  return <Item PostWhereInput={{ url: post }} />;
}
