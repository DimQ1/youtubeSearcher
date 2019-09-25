class YutubeUtilsAPI {
    getVideoUrlByVideoId(videoId) {
        return `https://www.youtube.com/watch?v=v31F8ExGvpY${videoId}`;
    }
}

export default new YutubeUtilsAPI();