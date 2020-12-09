import {useState, useEffect } from 'react';

const NewsContainer = () => {

  const [loaded, setLoaded] = useState(false);
  const [topStoriesID, setTopStoriesID] = useState([]);

  const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  
  const getTopStoriesIDList = () => {
    fetch(topStoriesURL)
      .then(res => res.json())
      .then(data => setTopStoriesID(data))
      .then(() => setLoaded(true))
  }

  useEffect(() => {
    getTopStoriesIDList();
  },[])

  return (
    <main>
      {setTopStoriesID}
    </main>

  )
}

export default NewsContainer;