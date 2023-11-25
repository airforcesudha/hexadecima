import './index.css'

const BlogItemDetails = props => {
  const {details} = props
  const {id, title, topic} = details

  return (
    <li className="blog-item">
      <div className="blog-item-info card">
        <h1 className="blog-item-title">Title:{title}</h1>
        <p>Topic: {topic}</p>
      </div>
    </li>
  )
}

export default BlogItemDetails
