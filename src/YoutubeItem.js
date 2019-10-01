import React from 'react'
import YoutubeUtilsAPI from './YoutubeUtilsAPI';

function getAllNededProps(item) {
    const { title, description, channelTitle, publishedAt } = item.snippet;
    const urlImg = item.snippet.thumbnails.medium.url;
    const videoId = item.id.videoId;
    const urlVideo = YoutubeUtilsAPI.getVideoUrlByVideoId(item.id.videoId);
    return { title, description, channelTitle, publishedAt, urlImg, urlVideo, videoId };
}

function youtubeItem(Component) {
    return class YoutubeItem extends React.Component {
        render() {
            const item = this.props.item;
            const childProps = getAllNededProps(item);
            return (
                <Component {...childProps} />
            );
        }
    }
}

export default youtubeItem;