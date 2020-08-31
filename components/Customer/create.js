import { useState, useMemo } from "react";
import { gql, useMutation } from "@apollo/client";
import { page } from "../../config/index";

import { refetchCustomer, customerVar } from "../../apollo/client";
import { useRouter } from "next/router";
import { chooseCustomer } from "../../apollo/action";
import { css } from "../src/css";
import { theme } from "../../config/index";

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
  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const refetchCus = refetchCustomer();

  const submit = async (e) => {
    // Prevent submit from reloading the page
    e.preventDefault();
    e.stopPropagation();

    const { phone, name, address } = e.target;
    const { data, errors } = await createCustomer({
      variables: {
        data: {
          phone: phone.value,
          name: name.value,
          address: address.value,
          ofSeller: { connect: { id: page.seller.id } },
        },
      },
    });
    const customer = data?.createCustomer;
    console.log(data, errors);
    if (customer?.id) {
      onCreate({ customer });
    }
  };
  return (
    <form
      onSubmit={submit}
      noValidate
      style={{ marginBottom: theme.spacing(3) }}
    >
      <h5 style={css.h5}>Điền Địa Chỉ Nhận</h5>
      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="name"
        placeholder="Tên"
      />
      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="phone"
        placeholder="Điện Thoại"
        type="number"
      />

      <input
        style={{ ...css.input, width: "100%", marginBottom: theme.spacing(3) }}
        required
        name="address"
        placeholder="Địa Chỉ"
      />
      <button style={css.button} type="submit">
        Xác nhận
      </button>
    </form>
  );
}
