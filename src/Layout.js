import React from 'react';
import { Container } from 'react-bootstrap';
import YoutubeSearchContainer from './YoutubeSearchContaner';
import youtubeDataProvider from './YoutubeDataProvider';

const YoutubeSearchContainerWithData = youtubeDataProvider(YoutubeSearchContainer)


class Layout extends React.Component {
    render() {
        return (
            <div className='main-layout bg-dark'>
                <Container>
                    <YoutubeSearchContainerWithData />
                </Container>
            </div>
        );
    }
}

export default Layout;