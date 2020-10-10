import {Container, Row, Col} from 'reactstrap';
import {Box} from './Box';
import {BirdBg} from './BirdBg';

import {useContext} from 'react';
import {SellerContext} from './SellerProvider';
import FacebookProvider from 'react-facebook/dist/FacebookProvider';
import CustomChat from 'react-facebook/dist/CustomChat';

export const Footer = () => {
  const theme = useContext(SellerContext);
  return (
    <div style={{backgroundColor: theme.backgroundColor}}>
      <Container
        fluid
        style={{
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
        }}>
        <Row>
          <Col xs={12} md={6} style={{marginBottom: theme.spacing(4)}}>
            <h2 style={theme.css.h2}>Giới Thiệu</h2>
            <div
              style={{
                color: theme.color,
                display: 'inline',
              }}>
              {theme.intro}
            </div>
          </Col>
          <Col xs={12} md={6} style={{marginBottom: theme.spacing(4)}}>
            <h2 style={theme.css.h2}>Liên Hệ</h2>
            <div
              style={{
                color: theme.color,
                display: 'inline',
              }}>
              {theme.contact}
            </div>
          </Col>
        </Row>
      </Container>
      <FacebookProvider appId="404979820059541" chatSupport>
        <CustomChat pageId={theme?.pageId} minimized={false} />
      </FacebookProvider>
    </div>
  );
};
