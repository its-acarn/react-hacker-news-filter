import {useState, useEffect } from 'react';

const NewsContainer = () => {

  const [apiLoaded, setApiLoaded] = useState(false);
  const [promiseAllLoaded, setPromiseAllLoaded] = useState(false);
  const [topStoriesID, setTopStoriesID] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [page, setPage] = useState(1);

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

  const getAllStories = (page) => {if (apiLoaded){
  Promise.all(topStoriesID.slice((page*1)-1, (page*1)+9).map(id =>
    getStoryById(id)
    .then(res => res.json())
  )).then(data => {
    setTopStories(data)
  }).then(setPromiseAllLoaded(true))
  }}

  useEffect(() => {
    getTopStoriesIDList();
  },[]);

  useEffect(() => {
    getAllStories(page);
  }, [apiLoaded, page])

  return (
    <main>

    </main>

  )
}

export default NewsContainer;
