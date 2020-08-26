import { useState, useMemo } from "react";
import { gql, useMutation } from "@apollo/client";
import { page } from "../../config/yensaodatquang.json";
import { refetchCustomer, customerVar } from "../../apollo/client";
import { useRouter } from "next/router";
import { chooseCustomer } from "../../apollo/action";
import { css } from "../src/css";
import theme from "../src/theme";
const CREATE_CUSTOMER = gql`
  mutation($data: CustomerCreateInput) {
    createCustomer(data: $data) {
      id
      phone
      name
      address
    }
  }
`;
export function Create({ onSubmit }) {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const router = useRouter();

  const submit = async (e) => {
    /**
     * Prevent submit from reloading the page
     */
    e.preventDefault();
    e.stopPropagation();
    const { phone, name, address } = e.target;
    const { data } = await createCustomer({
      variables: {
        data: {
          phone: phone.value,
          name: name.value,
          address: address.value,
          ofSeller: { connect: { id: page.seller.id } },
        },
      },
    });
    chooseCustomer({ customer: data.createCustomer });

    setName("");
    setPhone("");
    setAddress("");

    onSubmit();
  };
  return (
    <form onSubmit={submit}>
      <h5 style={css.h5}>Tạo Địa Chỉ Nhận Mới</h5>
      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="name"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="phone"
        placeholder="Điện Thoại"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="address"
        placeholder="Địa Chỉ"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button style={css.button} type="submit">
        Tạo
      </button>
    </form>
  );
}
