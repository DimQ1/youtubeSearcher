import React from 'react';
import { Container } from 'react-bootstrap';
import YoutubeSearchContainer from './YoutubeSearchContaner';
import withDataProvider from './withDataProvider';

const YoutubeSearchContainerWithDataProvider = withDataProvider(YoutubeSearchContainer)

class Layout extends React.Component {
    render() {
        return (
            <div className='main-layout bg-dark'>
                <Container>
                    <YoutubeSearchContainerWithDataProvider />
                </Container>
            </div>
        );
    }
}

export default Layout;