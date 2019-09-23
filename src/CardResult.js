import React from 'react'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


class CardDisplaySearchResult extends React.Component {
    render() {
        const title = 'C# Tutorial - Full Course for Beginners';
        const description = "This course will give you a full introduction into all of the core concepts in C# (aka C Sharp). Follow along with the course and you'll be a C# programmer in no ...";
        const channelTitle = "freeCodeCamp.org"
        return (
            <Card style={{ width: '18rem' }} className="mb-3 mt-3">
                <Card.Img variant="top" src="https://i.ytimg.com/vi/GhQdlIFylQ8/default.jpg" />
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-center text-muted'>
                        <small><FontAwesomeIcon icon={faUser} /> {channelTitle}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardDisplaySearchResult;