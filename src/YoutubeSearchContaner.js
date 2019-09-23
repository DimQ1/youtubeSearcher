import React from 'react'
import SearchInput from './SearchInput';
import CardContainerResult from './CardContainerResult'

class YoutubeSearchContainer extends React.Component {
    render() {
        return (
            <div>
                <SearchInput />
                <CardContainerResult />
            </div>
        );
    }
}

export default YoutubeSearchContainer;