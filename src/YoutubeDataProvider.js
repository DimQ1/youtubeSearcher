import React from 'react'
import YoutubeAPI from './YoutubeAPI'

function youtubeDataProvider(Component) {
    return class WithData extends React.Component {
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
            this.Dataset.getData(this.state.query);
        }

        handleScrollEnd = () => {
            if (!this.state.isLoading) {
                this.setState({ isNext: true, isLoading: true });
                this.Dataset.getData(this.state.query, this.state.nextPageToken);
            }
        }

        getAllNededProps() {
            const { isLoading, searchResalt: foundItems, query } = this.state;
            const handleQuery = this.handleQuery;
            const handleSubmitSearch = this.handleSubmitSearch;
            const handleScrollEnd = this.handleScrollEnd;

            return { isLoading, foundItems, query, handleQuery, handleSubmitSearch, handleScrollEnd };
        }

        render() {
            const childProps = this.getAllNededProps();
            return (
                <Component {...childProps} {...this.props} />
            );
        }
    }

}

export default youtubeDataProvider;