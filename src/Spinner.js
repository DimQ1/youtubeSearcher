import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

class Spiner extends React.Component {
    render() {
        const isLoading = this.props.isLoading;
        return (
            <Row className={isLoading ? 'd-flex': 'd-none'}>
                <Col className="d-flex justify-content-center">
                    <Spinner className="text-center" animation="border" variant="light" />
                </Col>
            </Row>
        );
    }
}

export default Spiner;