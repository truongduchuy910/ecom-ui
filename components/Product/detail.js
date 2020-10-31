//
// Cac component khac su dung query va them vao thuoc tinh cua no de dieu huong
// Vo tinh lam cho [slug] khi su dung dynamic router xuat hien o trang dieu huong
// Nen viet cac itemOne khac de tranh di
//
import { Item as BrandItem } from "../../components/Brand/itemOne";
import { Item as CategoryItem } from "../../components/Category/itemOne";
import { List as AttributeGroups } from "../../components/AttributeGroups/listOne";

import { formatMoney } from "../../lib/chip";
import { addProductToLocalCart, removeCartItem } from "../../apollo/action";
import { Fragment, useContext, useState } from "react";

import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";

import { useSpring, animated } from "react-spring";

import { QuickCart } from "../Cart/quickCart";
import { gql, useQuery } from "@apollo/client";
import { SellerContext } from "../src/SellerProvider";
const GET_CART = gql`
  query {
    cartItems @client
  }
`;
export function Product({ product, seller }) {
  const theme = useContext(SellerContext);

  const { data } = useQuery(GET_CART);
  const isIncart = data?.cartItems?.some(
    (item) => item.product.id === product.id
  );
  const [open, toggle] = useState(false);
  const [quickCart, setQuickCart] = useState(false);
  const props = useSpring({
    top: 100,
    right: 0,
    zIndex: 11,
    width: open ? 940 : 340,
    right: 0,
    from: { width: 0 },
  });

  return (
    <Fragment>
      <Row style={{ marginTop: theme.spacing(3) }}>
        <Col
          xs={12}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImgProduct
            product={product}
            style={{
              borderRadius: theme.spacing(1),
              marginBottom: theme.spacing(3),
            }}
          />
        </Col>
        <Col
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={theme.css.h1}>{product.name}</h1>

            <h5
              style={{
                textDecoration: product.sale ? "line-through" : "",
                color: product.sale ? "var(--secondary)" : "default",
                fontSize: product.sale ? 15 : "default",
                float: product.sale ? "right" : "default",
              }}
            >
              {formatMoney(product.price)}
            </h5>

            {product.sale ? (
              <h5>{formatMoney(product.price - product.sale)}</h5>
            ) : null}
            <div
              style={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
              }}
            >
              {product.brand ? (
                <Row>
                  <Col xs={4}>
                    <h5 style={theme.css.h5}>Thương Hiệu</h5>
                  </Col>
                  <Col xs={8}>
                    <BrandItem brand={product.brand} />
                  </Col>
                </Row>
              ) : null}
              {product.category ? (
                <Row>
                  <Col xs={4}>
                    <h5 style={theme.css.h5}>Danh Mục</h5>
                  </Col>
                  <Col xs={8}>
                    <CategoryItem category={product.category} />{" "}
                  </Col>
                </Row>
              ) : null}
              {product.attributeGroups ? (
                <AttributeGroups attributeGroups={product.attributeGroups} />
              ) : null}
            </div>
            {quickCart ? (
              <Fragment>
                <QuickCart
                  cartItems={[
                    {
                      product,
                      quantity: 1,
                      price: product.price - product.sale,
                    },
                  ]}
                />
                <a
                  onClick={() => {
                    setQuickCart(false);
                  }}
                  style={{ marginBottom: theme.spacing(3), display: "block" }}
                >
                  Thoát mua nhanh
                </a>
              </Fragment>
            ) : (
                <Fragment>
                  {isIncart ? (
                    <button
                      style={{ ...theme.css.button }}
                      onClick={() => {
                        removeCartItem({ product });
                      }}
                    >
                      Bỏ khỏi giỏ hàng
                    </button>
                  ) : (
                      <button
                        onClick={() => {
                          addProductToLocalCart({ product });
                        }}
                        style={{ ...theme.css.button }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    )}
                  <button
                    onClick={() => {
                      setQuickCart(true);
                    }}
                    style={{ ...theme.css.button }}
                  >
                    Mua ngay
                  </button>

                </Fragment>
              )}
          </div>
        </Col>
      </Row>

      <div style={theme.css.box}>
        <Row>
          {product.description ? (
            <Col xs={12}>
              <h5 style={theme.css.h5}>Mô Tả</h5>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </Col>
          ) : null}
          {product.guide ? (
            <Col>
              <h5 style={theme.css.h5}>Hướng dẫn</h5>
              <div dangerouslySetInnerHTML={{ __html: product.guide }} />
            </Col>
          ) : null}
          <Col xs={12} md={open ? 12 : 6}>
            <center>
              {product.file ? (
                <img
                  src={theme.server + product.file.publicUrl}
                  style={{ width: "100%" }}
                  onClick={() => {
                    toggle(!open);
                  }}
                />
              ) : null}
            </center>
          </Col>

          <Col lg={12}></Col>
        </Row>
      </div>
    </Fragment>
  );
}
