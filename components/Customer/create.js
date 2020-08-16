import { useState, useMemo } from "react";
import { gql, useMutation } from "@apollo/client";
import { page } from "../../config";
import { refetchCustomer } from "../../apollo/client";
const CREATE_CUSTOMER = gql`
  mutation($data: CustomerCreateInput) {
    createCustomer(data: $data) {
      phone
      name
      address
    }
  }
`;
export function Create() {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const submit = async (e) => {
    /**
     * Prevent submit from reloading the page
     */
    e.preventDefault();
    e.stopPropagation();
    const { phone, name, address } = e.target;
    const data = await createCustomer({
      variables: {
        data: {
          phone: phone.value,
          name: name.value,
          address: address.value,
          ofSeller: { connect: { id: page.seller.id } },
        },
      },
    });
    setName("");
    setPhone("");
    setAddress("");
    const refetch = refetchCustomer();
    try {
      refetch();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={submit}>
      <h6>Toa noi nhan</h6>

      <input
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="address"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">create</button>
    </form>
  );
}
