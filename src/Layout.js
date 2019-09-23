import React from 'react';
import { Container } from 'react-bootstrap';
import YoutubeSearchContainer from './YutubeSearchContaner';

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