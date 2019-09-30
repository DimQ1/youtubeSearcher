import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faUsers, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import getDetails from './GetDetails';

function CardResult(props) {
    const { title, description, channelTitle, urlImg, urlVideo, publishedAt, videoId } = props;
    const { statistics } = getDetails(videoId);
    const { views, likes, disLikes } = statistics;
    return (
        <Card className="card-youtube mb-3 mt-3">
            <Card.Img variant="top" src={urlImg} />
            <Card.Body>
                <a className="stretched-link" href={urlVideo}> </a>
                <Card.Title className='card-youtube__text-title text-center'>{title}</Card.Title>
                <Card.Text className='card-youtube__text-description text-justify'>
                    {description}
                </Card.Text>
                <Card.Text className='text-center text-muted'>
                    <small><FontAwesomeIcon icon={faUser} /> {channelTitle}</small>
                </Card.Text>
                <Row>
                    <Col xs={6} sm={6}>
                        <Card.Text className='text-muted'>
                            <small><FontAwesomeIcon icon={faCalendarAlt} /> {new Date(publishedAt).toLocaleDateString()}</small>
                        </Card.Text>
                    </Col>
                    <Col xs={6} sm={6}>
                        <Card.Text className='text-muted'>
                            <small><FontAwesomeIcon icon={faUsers} /> {views}</small>
                        </Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={6}>
                        <Card.Text className='text-muted'>
                            <small><FontAwesomeIcon icon={faHeart} /> {likes}</small>
                        </Card.Text>
                    </Col>
                    <Col xs={6} sm={6}>
                        <Card.Text className='text-muted'>
                            <small><FontAwesomeIcon icon={faThumbsDown} /> {disLikes}</small>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CardResult;