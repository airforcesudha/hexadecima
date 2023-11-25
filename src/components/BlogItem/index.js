import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, name, mail, phone, username, website} = blogItemDetails

  return (
    <li className="blog-item">
      <div className="blog-item-info card">
        <h1 className="blog-item-title">Name:{name}</h1>
        <p>Username: {username}</p>
        <p>website: {website}</p>
        <p>mail_id {mail}</p>
        <p>Phone: {phone}</p>
      </div>
    </li>
  )
}

export default BlogItem
