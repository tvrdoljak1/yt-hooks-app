import React from 'react';

const VideoItem = ({video,clickedVideo}) => {
    return(
        <div className="ui relaxed divided list">
            <div className="item">
                <img onClick={() => clickedVideo(video)} src = {video.snippet.thumbnails.medium.url} className="large github middle aligned icon"></img>
                <div className="content">
                <p className="header">{video.snippet.title}</p>
                <div className="description">{video.snippet.description}</div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;