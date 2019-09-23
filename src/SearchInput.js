import React from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <InputGroup className="mt-3 mb-3">
                        <FormControl
                            placeholder="Input search query"
                            aria-label="Input search query"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        );
    }
}

export default SearchInput;