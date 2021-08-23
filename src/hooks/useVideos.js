import { useState,useEffect } from "react";
import youtbe from '../apis/youtube';
import axios from 'axios';

const useVideos = (defaultSearchTerm) => {
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResult: 5,
                q: term,
                key: 'AIzaSyB8yEcgCTRvH6KO9Mn34NF0l6Xp8wUTVuM'
            }
        });

        setVideos(response.data.items);
    };

    return [videos,search];
};

export default useVideos;