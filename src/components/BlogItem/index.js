import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {Id} = item
  return (
    <Link to={`/blogs/${Id}`}>
      <div className="Harsha">
        <img src={item.ImageUrl} height="90" width="100" />
        <div className="h1">
          <p>{item.Topic}</p>
          <h4>{item.Title}</h4>
          <div className="Ti">
            <img
              src={item.AvatarUrl}
              height="60"
              width="40"
              alt={item.Author}
            />
            <p>{item.Author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
