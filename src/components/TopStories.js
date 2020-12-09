import Story from './Story'

const TopStories = ({loaded, topStories, currentPage, setPage}) => {

  if(!loaded) {
    return null;
  }

  const renderTopStories = topStories.map((story) => {
        return ( 
          <Story 
          loaded={loaded}
          title={story.title}
          author={story.by}
          url={story.url}
          />
      )}
    )

  return (
    <>
      <h2>The top stories:</h2>
      {renderTopStories}
    </>
  )
}

export default TopStories;
