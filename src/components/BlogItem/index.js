// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, title, avatarUrl, imageUrl, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="nav-link-item">
      <li className="list-item">
        <img src={imageUrl} alt="blog-thumbnail" className="list-image" />
        <div className="text-container">
          <p className="blog-title">{topic}</p>
          <h3>{title}</h3>
          <div className="avatar-container">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
