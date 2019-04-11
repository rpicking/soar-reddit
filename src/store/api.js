import axios from 'axios'

const REDDIT = "https://www.reddit.com/"
const REDDIT_ACCESS_TOKEN_URL = REDDIT + "api/v1/access_token"
const APP_ONLY_GRANT_TYPE = "https://oauth.reddit.com/grants/installed_client"

export default {
    getSubreddits: function(state, callback) {
         // eg: https://www.reddit.com/r/all/top.json?limit=25
        axios.get(REDDIT + 'r/' + state.sub +'/'+ state.sortMethod + '.json?limit=' + state.pageLimit)
        .then((res) => {
            if(res.status >= 200 && res.status < 300) {
                callback(res.data.data.children)
            }
        })
        .catch((error) => {
            return Promise.reject(error)
        })
    }  
}