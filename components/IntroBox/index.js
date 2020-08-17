import { Container, Row, Col } from "reactstrap";

import { Box } from "../src/Box";
import { Divider } from "../src/Divider";
import { List as Products } from "../Product/list";
import { BirdBg } from "../src/BirdBg";
export function IntroBox() {
  return (
    <Box>
      <h1 className="display-4">Câu Chuyện Sản Phẩm</h1>
      <Divider />
      <p>
        Việt Nam là một trong 8 quốc gia trên thế giới có tổ Yến. Chính nhờ đặc
        tính giàu dinh dưỡng, cũng như sự gian nan, cầu kỳ trong quá trình thu
        thập, chế biến mà Yến Sào đã trở thành món ăn quý giá từ muôn đời nay.
      </p>
      <p>
        Yến Sào được xếp vào bát trân (8 món ăn thuộc hàng tuyệt phẩm, chỉ vua
        chúa mới được sử dụng), bên cạnh nem công, chả phượng, da tê ngưu, bàn
        tay gấu, gân nai, môi đười ươi và thịt chân voi. Tất cả được xem là tinh
        túy của thế giới muốn loài, được vua Minh Mạng ví như "mảnh trăng non
        thuần khiết".
      </p>
      <p>
        Với điều kiện khí hậy khắc nghiệt của miền Trung đã chọn lọc tự nhiên và
        tồn tại một loài chim Yến có sức chống chọi mãnh liệt với khí hậu thời
        tiết khắc nghiệt. Nguồn gen này được lưu giữ tồn tại ở hang đảo Cù Lao
        Chàm. Tổ yến ở đây được giới ẩm thực Hồng Koong đánh giá rất cao về giá
        trị dinh dưỡng và giá trị ẩm thực. Trên thực tế, giá Yến Cù Lao Chàm cao
        gấp nhiều lần so với địa phương khác.
      </p>
      <p>
        Với nghệ thuật dẫn dụ được đàn chim non từ hang đảo Cù Lao Chàm về ở lại
        trong các nhà nuôi (hang động nhân tạo) ven biển, kết hợp với công nghệ
        mới của Công ty Yến Sào Đất Quảng, chúng tôi đã dùng những thanh đá tự
        nhiên ở Quảng Nam ghép thành những vách đá tự nhiên cho chim xây tổ.
        Công nghệ mới này đã cho ra dòng sản phẩm hoàn toàn tự nhiên có hình
        thức và chất lượng tương đồng với Yến đảo Cù Lao Chàm.
      </p>
      <p>
        Sản phẩm Yến đá của hệ thống nhà yến Đất Quảng tự hào đã giữ nguyên được
        gái trị hoang dã của tổ yến tự nhiên, nâng niu giữ gìn được sản vật tinh
        túy của biển trời Quảng Nam.
      </p>
      <p>
        Thưởng thức Yến Sào Đất Quảng là nếm vị ngon của tinh hoa biển trời Đất
        Quảng, là vị ngọt ngào của miền đất mẹ Quảng Nam.
      </p>

      <iframe
        width="100%"
        height="597"
        src="https://www.youtube.com/embed/0rpHzrymKds"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
