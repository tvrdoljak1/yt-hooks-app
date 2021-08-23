import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

   state = {videos: [], clickedVideo: null};

   onFormSubmit = (val) => {
        this.searchAPI(val);
   }

   onClickedVideo = (video) => {
       this.setState({clickedVideo: video})
   }

   searchAPI = async (val) => {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                part: 'snippet',
                q: val,
                key: 'AIzaSyDjYyyijDtu5IZvUOW8wewOji3k0doQGrE'
            }
        });

        this.setState({videos: res.data.items});
        
   }

   render(){
        return(
            <div>
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <VideoList videos={this.state.videos} clickedVideo={this.onClickedVideo}/>
                <VideoDetail clickedVideo={this.state.clickedVideo}/>
            </div>
        );
   }
}

export default App;