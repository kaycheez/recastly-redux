import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    dispatch(changeVideo(null));
    dispatch(changeVideoList([]));
    
    // var options = {
    //   key: YOUTUBE_API_KEY,
    //   query: q,
    //   max: 5
    // };

    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    }
      
    );
  }
};

export default handleVideoSearch;
