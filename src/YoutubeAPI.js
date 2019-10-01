class youtubeAPI {
    constructor(key) {
        this._key = key ? key : 'AIzaSyBMe0YAZiT9xnr2Zl7N-cCT3b15S0OLNkE';
        //this._key = key ? key : "AIzaSyAwYHaDBzo1_I1ZuCnhBxjJN_tL-EjQuZ4";
        //this._key = key ? key : 'AIzaSyCunpeDH93FQRFR33zHRnsfuATLjQSSzks';
        this._initSearchUrl();
        this._initVideoDetailUrl();
    }

    _initVideoDetailUrl() {
        this._videoDetailUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
        const search_params = new URLSearchParams();
        search_params.append('part', 'statistics');
        search_params.append('key', this._key);
        this._videoDetailUrl.search = search_params;
    }

    _initSearchUrl() {
        const part = 'snippet';
        const type = 'video';
        const maxResults = 6;

        const search_params = new URLSearchParams();
        search_params.append('part', part);
        search_params.append('type', type);
        search_params.append('maxResults', maxResults);
        search_params.append('key', this._key);

        this._SearxhUrl = new URL('https://www.googleapis.com/youtube/v3/search');
        this._SearxhUrl.search = search_params;
    }

    getUrlWithQuery = (query, nextPageToken) => {
        const search_params = new URLSearchParams(this._SearxhUrl.search);
        if (query) {
            search_params.set('q', query);
        }

        if (nextPageToken) {
            search_params.set('pageToken', nextPageToken);
        }
        else {
            search_params.delete('pageToken');
        }

        const url = this._SearxhUrl;
        url.search = search_params;

        return url.toString();
    }

    getUrlVideoDetails(ids) {
        const search_params = new URLSearchParams(this._videoDetailUrl.search);
        if (ids) {
            search_params.set('id', ids);
        }

        const url = this._videoDetailUrl;
        url.search = search_params;

        return url.toString();
    }

    getSearchData = (query, nextPageToken) => {
        return this.searchRequest(this.getUrlWithQuery(query, nextPageToken));
    }

    getVideoDetail(ids) {
        return this.searchRequest(this.getUrlVideoDetails(ids));
    }

    searchRequest = (urlWithQuery) => {
        return new Promise((resolve, reject) => {

            // create a new XMLHttpRequest
            var xhr = new XMLHttpRequest();
            // get a callback when the server responds
            xhr.addEventListener('load', (xhr) => {
                resolve(xhr.target.response);
            });
            // open the request with the verb and the url
            xhr.open('GET', urlWithQuery);
            xhr.responseType = "json";
            // send the request
            xhr.send();

        });
    }
}

export default youtubeAPI;
