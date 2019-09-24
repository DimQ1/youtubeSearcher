import React from 'react'
import SearchInput from './SearchInput';
import CardContainerResult from './CardContainerResult';
import Spiner from './Spinner';
import YoutubeAPI from './YoutubeAPI'


class YoutubeSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResalt: [], query: '', isLoading: false, isNext: false }
        this.Dataset = new YoutubeAPI('', this.handleLoaded);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleLoaded = (data, error) => {
        const filteredItems = data.items.filter(i => !this.state.searchResalt.some(exItem => exItem.id.videoId === i.id.videoId));
        const searchResalt = this.state.isNext ? this.state.searchResalt.concat(filteredItems) : data.items;

        this.setState({ isLoading: false, searchResalt, nextPageToken: data.nextPageToken });
    }

    handleQuery = (query) => {
        this.setState({ query });
    }

    handleSubmitSearch = (query) => {
        this.setState({ query });
        this.setState({ isLoading: true });
        this.setState({ isNext: false });
        this.Dataset.getData(query);
    }

    handleScroll = (event) => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.setState({ isLoading: true });
            this.setState({ isNext: true });
            this.Dataset.getData(this.state.query, this.state.nextPageToken);
        }
    }

    render() {
        const isLoading = this.state.isLoading;
        const foundItems = this.state.searchResalt;
        return (
            <div onScroll={this.handleScroll}>
                <SearchInput onSearch={this.handleSubmitSearch} onChangeInput={this.handleQuery} query={this.state.query} />
                <CardContainerResult items={foundItems} />
                <Spiner isLoading={isLoading} />
            </div>
        );
    }
}

export default YoutubeSearchContainer;