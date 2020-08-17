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
import { Fragment } from "react";
import { page } from "../../config";
import { Row, Col } from "reactstrap";
import { ImgProduct } from "./imageProduct";
import { QuickView } from "./quickView";
import { Box } from "../src/Box";
import { Divider } from "../src/Divider";
export function Product({ product }) {
  const src = page.server + product?.image?.publicUrl;
  return (
    <Fragment>
      <QuickView product={product} />
      <Box>
        <Divider />
        <Row>
          <Col>
            <p>{product.guide}</p>
          </Col>
          <Col>
            {product.file ? (
              <img src={page.server + product.file.publicUrl} />
            ) : null}
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
