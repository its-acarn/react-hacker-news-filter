const Story = ({loaded, title, author, url}) => {

  if(!loaded) {
    return null;
  }

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{url}</p>
    </div>
  )
}

export default Story;
