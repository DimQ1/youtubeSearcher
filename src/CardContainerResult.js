import React from 'react'
import CardResult from './CardResult';
import { Row, Col } from 'react-bootstrap';
import youtubeItem from './YoutubeItem';

const  CardResultWithYoutubeItems = youtubeItem(CardResult);
class CardContainerResult extends React.Component {
    render() {
        const items = this.props.items;
        const rows = items.map((item) =>
            <Col className='d-flex justify-content-center' key={item.id.videoId} sx={12} sm={6} lg={4}>
                <CardResultWithYoutubeItems item={item}/>
            </Col>
        );

        return (
            <Row>
                {rows}
            </Row>
        );
    }
}

CardContainerResult.defaultProps={
    items:[]
};

export default CardContainerResult;