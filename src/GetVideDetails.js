import { useState } from 'react';
import YoutubeAPI from './YoutubeAPI'

function GetVideDetails(ids) {
    const onLoadData = (data, error) => {
        setVideoDetails(data);
    }
    const youtubeAPI = new YoutubeAPI('', onLoadData)

    const [videodetails, setVideoDetails] = useState({});


    youtubeAPI.GetVideDetails(ids);

    return videodetails;
}

export default GetVideDetails;