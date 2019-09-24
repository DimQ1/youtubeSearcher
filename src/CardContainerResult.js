import React from 'react'
import CardResult from './CardResult';
import { Row, Col } from 'react-bootstrap';


class CardContainerResult extends React.Component {
    render() {
        const items = this.props.items ? this.props.items : [];
        const rows = items.map((item) =>
            <Col className='d-flex justify-content-center' key={item.id.videoId} sx={12} sm={6} lg={4}>
                <CardResult youtubeItem={item} />
            </Col>
        );

        return (
            <Row>
                {rows}
            </Row>
        );
    }
}

export default CardContainerResult;