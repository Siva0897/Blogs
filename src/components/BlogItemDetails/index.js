// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogDetail()
  }

  getBlogDetail = async () => {
    const {match} = this.props
    const response = await fetch(`https://apis.ccbp.in${match.url}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails
    return isLoading ? (
      <div>
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-details-container">
        <h1>{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p>{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p className="content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
