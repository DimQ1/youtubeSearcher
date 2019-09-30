import React from 'react';
import YoutubeUtilsAPI from './YoutubeUtilsAPI';

function getAllNededProps(item) {
    const { title, description, channelTitle, publishedAt } = item.snippet;
    const videoId = item.id.videoId;
    const urlImg = item.snippet.thumbnails.medium.url;
    const urlVideo = YoutubeUtilsAPI.getVideoUrlByVideoId(videoId);
    return { title, description, channelTitle, publishedAt, urlImg, urlVideo, videoId };
}

function YoutubeItem(Component, item) {
    const childProps = getAllNededProps(item);
    return (
        <Component {...childProps} />
    );
}

export default YoutubeItem;