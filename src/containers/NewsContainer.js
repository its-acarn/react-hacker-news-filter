import {useState, useEffect } from 'react';

const NewsContainer = () => {

  const [apiLoaded, setApiLoaded] = useState(false);
  const [promiseAllLoaded, setPromiseAllLoaded] = useState(false);
  const [topStoriesID, setTopStoriesID] = useState([]);
  const [topStories, setTopStories] = useState([]);

  const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  const getTopStoriesIDList = () => {
    fetch(topStoriesURL)
      .then(res => res.json())
      .then(data => setTopStoriesID(data))
      .then(() => setApiLoaded(true))
  };

  const getStoryById = (id) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
  };

  const getAllStories = () => {if (!apiLoaded){
  Promise.all(topStoriesID.map(id => 
    getStoryById(id)
    .then(res => res.json())
    .then(data => setTopStories([...topStories,data]))
    .then(console.log("change"))
  )).then(setPromiseAllLoaded(true))
  }}

  useEffect(() => {
    getTopStoriesIDList();
  },[]);

  useEffect(() => {
    getAllStories();
  }, [topStoriesID])

  return (
    <main>
      
    </main>

  )
}

export default NewsContainer;