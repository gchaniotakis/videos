import React from 'react';
import './VideoItem.css';

const VideoItem = ({video}) =>{
    var videoObj = video.snippet;
    return (
        <div className="video-item item">
            <img src={videoObj.thumbnails.medium.url} className="ui image"/>
            <div className="content">
                <div className="header">
                    {videoObj.title}
                </div>
            </div>            
        </div>
    );
};

export default VideoItem;