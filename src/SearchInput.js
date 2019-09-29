import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchInput extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(event.target.elements[0].value);
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const query = this.props.query;
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup className="mt-3 mb-3">
                    <FormControl value={query} onChange={this.handleChange}
                        placeholder="Input search query"
                        aria-label="Input search query"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        );
    }
}

SearchInput.defaultProps = {
    query:''
};

export default SearchInput;