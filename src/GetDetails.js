import { useState, useEffect } from 'react';
import YoutubeAPI from './YoutubeAPI';

 function GetDetails(videoId) {
    const [statistics, setStatistics] = useState({ views: '', likes: '', disLikes: '' });
    useEffect(() => {
        async function getData() {
            const youtubeAPI = new YoutubeAPI();
            const videodetails = await youtubeAPI.getVideoDetail(videoId);
            const details = videodetails.items[0].statistics;
            setStatistics({ views: details.viewCount, likes: details.likeCount, disLikes: details.dislikeCount });
        }
        getData();
    }, [videoId]);

    return { statistics };
}

export default GetDetails;