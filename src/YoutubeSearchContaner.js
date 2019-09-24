import React from 'react'
import SearchInput from './SearchInput';
import CardContainerResult from './CardContainerResult';
import Spiner from './Spinner';


class YoutubeSearchContainer extends React.Component {
    
    render() {
        const isLoading = true;
        return (
            <div>
                <SearchInput />
                <CardContainerResult />
                <Spiner isLoading={isLoading} />
            </div>
        );
    }
}

export default YoutubeSearchContainer;