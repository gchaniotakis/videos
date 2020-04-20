import React from 'react';

const VideoItem = ({video}) =>{
    var videoObj = video.snippet;
    return (
        <div>
            <img src={videoObj.thumbnails.medium.url}/>
            {videoObj.title}
        </div>
    );
};

export default VideoItem;