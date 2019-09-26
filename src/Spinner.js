import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

class Spiner extends React.Component {
    getClassName() {
        const isLoading = this.props.isLoading;
        return isLoading ? 'd-flex' : 'd-none';
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (event) => {
        const className = this.props.className;
        const spinerOffsetTop = document.getElementsByClassName(className)[0].offsetTop;
        const scrollPosition = window.innerHeight + window.scrollY;
        if (scrollPosition === spinerOffsetTop) {
            this.props.onScrollEnd();
        }
    }

    render() {
        const rowClassName = this.getClassName();
        const spinerClassName = this.props.className;
        return (
            <div className={spinerClassName}>
                <Row className={rowClassName}>
                    <Col className="d-flex justify-content-center">
                        <Spinner className="text-center" animation="border" variant="light" />
                    </Col>
                </Row>
            </div>
        );
    }
}

Spiner.defaultProps = {
    className: 'spiner'
}

export default Spiner;