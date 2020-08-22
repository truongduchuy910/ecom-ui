//
// Cac component khac su dung query va them vao thuoc tinh cua no de dieu huong
// Vo tinh lam cho [slug] khi su dung dynamic router xuat hien o trang dieu huong
// Nen viet cac itemOne khac de tranh di
//
import { Item as BrandItem } from "../../components/Brand/itemOne";
import { Item as CategoryItem } from "../../components/Category/itemOne";
import { List as AttributeGroups } from "../../components/AttributeGroups/listOne";

import { formatMoney } from "../../lib/chip";
import {
  addProductToLocalCart,
  addProductToLocalWishlist,
  addProductToLocalCompare,
} from "../../apollo/action";
import { Fragment, useState } from "react";
import { page } from "../../config/yensaodatquang.json";
import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";
import { QuickView } from "./quickView";
import { Box } from "../src/Box";
import { Divider } from "../src/Divider";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
export function Product({ product }) {
  const src = page.server + product?.image?.publicUrl;
  const [open, toggle] = useState(false);
  const props = useSpring({
    top: 100,
    right: 0,
    zIndex: 11,
    width: open ? 940 : 640,
    right: 0,
    from: { width: 0 },
  });

  return (
    <Fragment>
      <Row>
        <Col
          xs={12}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImgProduct product={product} />
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
            <h1>{product.name}</h1>

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
            <p>{product.description?.slice(0, 500)}</p>

            <button
              onClick={() => {
                addProductToLocalCart({ product });
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </Col>
      </Row>
      <Divider />

      <Box>
        <Row>
          <Col xs={12}>
            <h5>Mô Tả</h5>
            <p>{product.description}</p>
          </Col>
          <Col>
            <h5>Hướng dẫn</h5>

            <p>{product.guide}</p>
          </Col>
          <Col xs={12} md={open ? 12 : 6}>
            <center>
              {product.file ? (
                <animated.img
                  src={page.server + product.file.publicUrl}
                  style={props}
                  onClick={() => {
                    toggle(!open);
                  }}
                />
              ) : null}
            </center>
          </Col>

          <Col lg={12}>
            {product.brand ? (
              <Fragment>
                <h5>Thương Hiệu</h5>
                <BrandItem brand={product.brand} />{" "}
              </Fragment>
            ) : null}
            {product.category ? (
              <Fragment>
                <h5>Danh Mục</h5>
                <CategoryItem category={product.category} />{" "}
              </Fragment>
            ) : null}
            {product.attributeGroups ? (
              <Fragment>
                <h5>Thuộc Tính</h5>
                <AttributeGroups attributeGroups={product.attributeGroups} />
              </Fragment>
            ) : null}
          </Col>
        </Row>
      </Box>
    </Fragment>
  );
}
