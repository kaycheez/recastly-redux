import Redux from 'redux';

var videoListReducer = (state = [], action) => { // change to [] for default
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
        return action.videos;
    default:
        return state;
  }      
};

export default videoListReducer;
