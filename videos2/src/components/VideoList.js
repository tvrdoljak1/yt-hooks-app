import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,clickedVideo}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} clickedVideo={clickedVideo}/> 
    });
    return(
        <div>
            {renderedVideos}
        </div>
    );

}

export default VideoList;