
import { useRouter } from 'next/router';
import Item from "../components/Product/Item/index";
export default function ProductDetali() {
  const router = useRouter();
  const { detail } = router.query;
  return <Item ProductWhereInput={{ url: detail }} />
}
