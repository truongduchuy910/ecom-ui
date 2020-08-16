import { useRouter } from "next/router";
import { customerVar } from "../../apollo/action";

export function Item({ customer }) {
  const router = useRouter();
  let query = router.query;
  
  const handle = () => {
    customerVar(customer);
    query.customer = customer.id;
    router.push({ pathname: "/cart", query });
  };

  return (
    <a
      style={{ fontWeight: query.customer === customer.id ? "bold" : "" }}
      onClick={handle}
    >
      {customer.name} - {customer.phone}
    </a>
  );
}
