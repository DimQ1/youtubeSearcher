import React from 'react'
import Search from './Search';
import CardContainerResult from './CardContainerResult';
import Spiner from './Spinner';
import YoutubeAPI from './YoutubeAPI';
import { Row, Col } from 'react-bootstrap';
import { async } from 'q';

class YoutubeSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResalt: [], query: '', isLoading: false, isNext: false }
        this.Dataset = new YoutubeAPI();
    }

    getVideoDetails = async (items) => {
        const videoIds = items.map(item => item.id.videoId).join(',');
        const videodetails = await this.Dataset.getVideoDetail(videoIds);
        this.setState((prev) => {
            const searchResalt = prev.searchResalt;
            videodetails.items.forEach(element => {
                const updatedItem = searchResalt.find(exItem => exItem.id.videoId === element.id)
                updatedItem['views'] = element.statistics.viewCount;
            });

            return { ...prev, searchResalt }
        });
    }

    handleLoaded = async (data, error) => {
        const loadedData = await data;
        this.setState((prev) => {
            const filteredItems = loadedData.items.filter(i => !this.state.searchResalt.some(exItem => exItem.id.videoId === i.id.videoId));
            const searchResalt = this.state.isNext ? this.state.searchResalt.concat(filteredItems) : filteredItems;
            this.getVideoDetails(filteredItems);
            return { ...prev, isLoading: false, searchResalt, nextPageToken: data.nextPageToken }
        });

    }

    handleQuery = (query) => {
        this.setState({ query });
    }

    handleSubmitSearch = (query) => {
        this.setState({ query, isLoading: true, isNext: false });
        this.handleLoaded(this.Dataset.getSearchData(query));
    }

    handleScrollEnd = () => {
        if (!this.state.isLoading) {
            this.setState({ isNext: true, isLoading: true });
            this.handleLoaded(this.Dataset.getSearchData(this.state.query, this.state.nextPageToken));
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