import React from 'react'
import CardResult from './CardResult';
import { Row, Col } from 'react-bootstrap';


class CardContainerResult extends React.Component {
    render() {
        const items = [];

        return (
            <Row>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
                <Col className='d-flex justify-content-center' sx={12} sm={6} lg={4}><CardResult /></Col>
            </Row>
        );
    }
}

export default CardContainerResult;