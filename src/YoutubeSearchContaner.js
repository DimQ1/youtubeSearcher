import React from 'react'
import Search from './Search';
import CardContainerResult from './CardContainerResult';
import Spiner from './Spinner';
import YoutubeAPI from './YoutubeAPI'
import { Row, Col } from 'react-bootstrap';


class YoutubeSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResalt: [], query: '', isLoading: false, isNext: false }
        this.Dataset = new YoutubeAPI('', this.handleLoaded);
    }

    handleLoaded = (data, error) => {
        const filteredItems = data.items.filter(i => !this.state.searchResalt.some(exItem => exItem.id.videoId === i.id.videoId));
        const searchResalt = this.state.isNext ? this.state.searchResalt.concat(filteredItems) : data.items;

        this.setState({ isLoading: false, searchResalt, nextPageToken: data.nextPageToken });
    }

    handleQuery = (query) => {
        this.setState({ query });
    }

    handleSubmitSearch = (query) => {
        this.setState({ query, isLoading: true, isNext: false });
        this.Dataset.getData(query);
    }

    handleScrollEnd = () => {
        if (!this.state.isLoading) {
            this.setState({ isNext: true, isLoading: true });
            this.Dataset.getData(this.state.query, this.state.nextPageToken);
        }
    }

    render() {
        const isLoading = this.state.isLoading;
        const foundItems = this.state.searchResalt;
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <Search onSubmit={this.handleSubmitSearch} onChange={this.handleQuery} query={this.state.query} />
                    </Col>
                </Row>
                <CardContainerResult items={foundItems} />
                <Spiner isLoading={isLoading} onScrollEnd={this.handleScrollEnd} />
            </div>
        );
    }
}

export default YoutubeSearchContainer;