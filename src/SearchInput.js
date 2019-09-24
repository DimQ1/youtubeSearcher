import React from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(event.target.elements[0].value);
    }

    handleChange = (event)=>{
        this.props.onChangeInput(event.target.value);
    }

    render() {
        const query = this.props.query ? this.props.query : '';
        return (
            <Row>
                <Col sm={12}>
                    <form onSubmit={this.handleSubmit}>
                        <InputGroup className="mt-3 mb-3">
                            <FormControl value={query} onChange={this.handleChange}
                                placeholder="Input search query"
                                aria-label="Input search query"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" type="submit"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default SearchInput;