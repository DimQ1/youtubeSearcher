import React from 'react'
import Search from './Search';
import CardContainerResult from './CardContainerResult';
import Spiner from './Spinner';
import { Row, Col } from 'react-bootstrap';

class YoutubeSearchContainer extends React.Component {
    render() {
        const { isLoading, foundItems, query, handleQuery, handleSubmitSearch, handleScrollEnd } = this.props;
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <Search onSubmit={handleSubmitSearch} onChange={handleQuery} query={query} />
                    </Col>
                </Row>
                <CardContainerResult items={foundItems} />
                <Spiner isLoading={isLoading} onScrollEnd={handleScrollEnd} />
            </div>
        );
    }
}

export default YoutubeSearchContainer;