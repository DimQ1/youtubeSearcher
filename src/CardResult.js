import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt, faUsers, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


class CardDisplaySearchResult extends React.Component {
    render() {
        const title = 'C# Tutorial - Full Course for Beginners';
        const description = "This course will give you a full introduction into all of the core concepts in C# (aka C Sharp). Follow along with the course and you'll be a C# programmer in no ...";
        const channelTitle = "freeCodeCamp.org"
        const publishedAt = new Date();
        const views = 19999;
        const likes = 1200;
        const disLikes = 200;
        const urlImg = "https://i.ytimg.com/vi/GhQdlIFylQ8/default.jpg";

        return (
            <Card style={{ width: '18rem' }} className="mb-3 mt-3">
                <Card.Img variant="top" src={urlImg} />
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className='text-center text-muted'>
                        <small><FontAwesomeIcon icon={faUser} /> {channelTitle}</small>
                    </Card.Text>
                    <Row>
                        <Col sx={6} sm={6}>
                            <Card.Text className='text-muted'>
                                <small><FontAwesomeIcon icon={faCalendarAlt} /> {publishedAt.toLocaleDateString()}</small>
                            </Card.Text>
                        </Col>
                        <Col sx={6} sm={6}>
                            <Card.Text className='text-muted'>
                                <small><FontAwesomeIcon icon={faUsers} /> {views}</small>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col sx={6} sm={6}>
                            <Card.Text className='text-muted'>
                                <small><FontAwesomeIcon icon={faHeart} /> {likes}</small>
                            </Card.Text>
                        </Col>
                        <Col sx={6} sm={6}>
                            <Card.Text className='text-muted'>
                                <small><FontAwesomeIcon icon={faThumbsDown} /> {disLikes}</small>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default CardDisplaySearchResult;