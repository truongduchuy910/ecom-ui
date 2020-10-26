import { ListBanner } from "../Banner/list";
import { Container, Row, Col } from "reactstrap";

import { PlayButton } from "./PlayButton";

import { MoreProducts } from "./moreProducts";
import { useContext } from "react";
import { SellerContext } from "../src/SellerProvider";
export const HeaderStory = () => {
  const theme = useContext(SellerContext);
  return (
    <section
      style={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(5) }}
    >
      <Container>
        <Row>
          <Col xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <h1 style={{ ...theme.css.h1, marginBottom: theme.spacing(4) }}>
                Câu Chuyện Sản Phẩm
              </h1>
              {/* <p>
                Việt Nam là một trong 8 quốc gia trên thế giới có tổ Yến. Chính
                nhờ đặc tính giàu dinh dưỡng, cũng như sự gian nan, cầu kỳ trong
                quá trình thu thập, chế biến mà Yến Sào đã trở thành món ăn quý
                giá từ muôn đời nay.
              </p>
              <p>
                Yến Sào được xếp vào bát trân (8 món ăn thuộc hàng tuyệt phẩm,
                chỉ vua chúa mới được sử dụng), bên cạnh nem công, chả phượng,
                da tê ngưu, bàn tay gấu, gân nai, môi đười ươi và thịt chân voi.
                Tất cả được xem là tinh túy của thế giới muốn loài, được vua
                Minh Mạng ví như "mảnh trăng non thuần khiết".
              </p>
              <p>
                Với điều kiện khí hậy khắc nghiệt của miền Trung đã chọn lọc tự
                nhiên và tồn tại một loài chim Yến có sức chống chọi mãnh liệt
                với khí hậu thời tiết khắc nghiệt. Nguồn gen này được lưu giữ
                tồn tại ở hang đảo Cù Lao Chàm. Tổ yến ở đây được giới ẩm thực
                Hồng Koong đánh giá rất cao về giá trị dinh dưỡng và giá trị ẩm
                thực. Trên thực tế, giá Yến Cù Lao Chàm cao gấp nhiều lần so với
                địa phương khác.
              </p> */}
              <p>
                Với nghệ thuật dẫn dụ được đàn chim non từ hang đảo Cù Lao Chàm
                về ở lại trong các nhà nuôi (hang động nhân tạo) ven biển, kết
                hợp với công nghệ mới của Công ty Yến Sào Đất Quảng, chúng tôi
                đã dùng những thanh đá tự nhiên ở Quảng Nam ghép thành những
                vách đá tự nhiên cho chim xây tổ. Công nghệ mới này đã cho ra
                dòng sản phẩm hoàn toàn tự nhiên có hình thức và chất lượng
                tương đồng với Yến đảo Cù Lao Chàm.
              </p>
              <p>
                Sản phẩm Yến đá của hệ thống nhà yến Đất Quảng tự hào đã giữ
                nguyên được gái trị hoang dã của tổ yến tự nhiên, nâng niu giữ
                gìn được sản vật tinh túy của biển trời Quảng Nam.
              </p>
              <p>
                Thưởng thức Yến Sào Đất Quảng là nếm vị ngon của tinh hoa biển
                trời Đất Quảng, là vị ngọt ngào của miền đất mẹ Quảng Nam.
              </p>
              <MoreProducts />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: theme.spacing(4),
              }}
            >
              {/* <ListBanner style={{ height: "60vh" }} /> */}
              <div
                style={{
                  width: "100%",
                  height: "60vh",
                  background: `url(${theme.server + theme.file?.publicUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: theme.spacing(2),
                }}
              ></div>
              <PlayButton />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
