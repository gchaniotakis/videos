import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
    var videoObj = video.snippet;
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
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