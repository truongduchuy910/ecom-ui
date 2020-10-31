
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Categories from '../components/Category';
import Products from '../components/Product';
import Item from "../components/Product/Item/index";
export default function ProductDetali() {
    const router = useRouter();
    const { category } = router.query;
    return <Fragment>
        <Container>
            <Row>
                <Col>
                    <Categories onChoose={(category) => { router.push({ pathname: '/category', query: { category: category.url } }) }} />
                </Col>
                <Col>
                    <Products ProductWhereInput={{ category: { url: category } }} />
                </Col>
            </Row>
        </Container>
    </Fragment>

}
