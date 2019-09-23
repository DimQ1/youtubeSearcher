import React from 'react';
import { Container } from 'react-bootstrap';
import YoutubeSearchContainer from './YoutubeSearchContaner';

class Layout extends React.Component {
    render() {
        return (
            <div className='bg-dark'>
                <Container>
                    <YoutubeSearchContainer />
                </Container>
            </div>
        );
    }
}

export default Layout;