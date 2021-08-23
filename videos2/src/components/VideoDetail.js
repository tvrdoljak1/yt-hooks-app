import React from 'react';

const VideoDetail = ({clickedVideo}) => {

    let videoSrc='';

    if(clickedVideo != null){
        videoSrc = `https://www.youtube.com/embed/${clickedVideo.id.videoId}`;
    }
    

    return(
        <div>
            <iframe width="560" height = "215" src={videoSrc}></iframe>
        </div>
    );
}

export default VideoDetail;