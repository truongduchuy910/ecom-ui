import { gql, useMutation } from "@apollo/client";

import { refetchCustomer } from "../../apollo/client";

import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";

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
export function Create({ onCreate = () => {} }) {
  const theme = useContext(SellerContext);

  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const refetchCus = refetchCustomer();

  const submit = async (e) => {
    // Prevent submit from reloading the page
    e.preventDefault();
    e.stopPropagation();

    const { phone, name, address } = e.target;
    
    if (phone.value && name.value && address.value) {
      const { data, errors } = await createCustomer({
        variables: {
          data: {
            phone: phone.value,
            name: name.value,
            address: address.value,
            ofSeller: { connect: { id: theme.seller.id } },
          },
        },
      });
      const customer = data?.createCustomer;
      if (customer?.id) {
        onCreate({ customer });
      }
    }
  };
  return (
    <form
      onSubmit={submit}
      noValidate
      style={{ marginBottom: theme.spacing(3) }}
    >
      <h5 style={{ ...theme.css.h5, textTransform: "capitalize" }}>
        Điền thông tin nhận hàng
      </h5>
      <input
        style={{
          ...theme.css.input,
          width: "100%",
          marginBottom: theme.spacing(3),
        }}
        required
        name="name"
        placeholder="Tên"
      />
      <input
        style={{
          ...theme.css.input,
          width: "100%",
          marginBottom: theme.spacing(3),
        }}
        required
        name="phone"
        placeholder="Điện Thoại"
        type="number"
      />

      <input
        style={{
          ...theme.css.input,
          width: "100%",
          marginBottom: theme.spacing(3),
        }}
        required
        name="address"
        placeholder="Địa Chỉ"
      />
      <button style={theme.css.button} type="submit">
        Xác nhận thông tin
      </button>
    </form>
  );
}
