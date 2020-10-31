import {Container, Row, Col} from 'reactstrap';
import {useContext} from 'react';
import {SellerContext} from '../apollo/SellerProvider';
import {FacebookProvider, Page, CustomChat} from 'react-facebook';
import {AiOutlineClockCircle, AiOutlinePhone} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
export const Footer = () => {
  const theme = useContext(SellerContext);
  return (
    <div style={{backgroundColor: theme.backgroundColor, width: '100%'}}>
      <FacebookProvider appId="404979820059541" chatSupport>
        <Container
          style={{
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(2),
          }}>
          <Row>
            <Col xs={12} md={4}>
              <h2 style={theme.css.h2}>Giới Thiệu</h2>
              <p>
                {theme.store} {theme.slogan}
              </p>
              <p>{theme.intro}</p>
            </Col>
            <Col xs={12} md={4}>
              <h2 style={theme.css.h2}>Liên Hệ</h2>

              <p>
                <AiOutlinePhone /> {theme.phone}
              </p>
              <p>
                <GoLocation /> {theme.address}
              </p>
              <p>
                <AiOutlineClockCircle /> {theme.contact}
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h2 style={theme.css.h2}>Facebook</h2>
              <Page href={'https://www.facebook.com/' + theme.pageId} />
            </Col>
          </Row>
          <center>
            <a
              style={{color: theme.color}}
              href="https://loaloa.tech"
              target="_blank">
              bởi Loa Loa
            </a>
          </center>
        </Container>
        <CustomChat pageId={theme?.pageId} minimized={false} />
      </FacebookProvider>
    </div>
  );
};
