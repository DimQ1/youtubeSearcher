class youtubeAPI {
    constructor(key, onLoadData) {
        this._part = 'snippet';
        this._type = 'video';
        this._key = key ? key : 'AIzaSyBMe0YAZiT9xnr2Zl7N-cCT3b15S0OLNkE';
        //this._key = key ? key : "AIzaSyAwYHaDBzo1_I1ZuCnhBxjJN_tL-EjQuZ4";
        //this._key = key ? key : 'AIzaSyCunpeDH93FQRFR33zHRnsfuATLjQSSzks';
        this._maxResults = 6;

        this._url = new URL('https://www.googleapis.com/youtube/v3/search');
        const search_params = new URLSearchParams(this._url.search);
        search_params.append('part', this._part);
        search_params.append('type', this._type);
        search_params.append('key', this._key);
        search_params.append('maxResults', this._maxResults);

        this._url.search = search_params;
        this.onLoadData = onLoadData;
    }

    getUrlWithQuery = (query, nextPageToken) => {
        const search_params = new URLSearchParams(this._url.search);
        if (query) {
            search_params.set('q', query);
        }

        if (nextPageToken) {
            search_params.set('pageToken', nextPageToken);
        }

        const url = this._url;
        url.search = search_params;

        return url.toString();
    }

    handleLoadData = (xhr) => {
        if (this.onLoadData) {
            this.onLoadData(xhr.target.response);
        }
    }

    getData = (query, nextPageToken) => {
        this.searchRequest(this.getUrlWithQuery(query, nextPageToken));
    }

    searchRequest = (urlWithQuery) => {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // get a callback when the server responds
        xhr.addEventListener('load', this.handleLoadData);
        // open the request with the verb and the url
        xhr.open('GET', urlWithQuery);
        xhr.responseType = "json";
        // send the request
        xhr.send();
    }
}

export default youtubeAPI;
