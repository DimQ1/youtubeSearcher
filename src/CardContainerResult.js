import React from 'react'
import CardResult from './CardResult';
import { Row, Col } from 'react-bootstrap';


class CardContainerResult extends React.Component {
    render() {
        const items = [1,2,3,4,5,6];
        const rows = items.map((item)=><Col className='d-flex justify-content-center' key={item} sx={12} sm={6} lg={4}><CardResult /></Col>)

        return (
            <Row>
               {rows}
            </Row>
        );
    }
}

export default CardContainerResult;