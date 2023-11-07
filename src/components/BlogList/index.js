import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem/index'

class BlogList extends Component {
  state = {list: []}

  componentDidMount() {
    this.data()
  }

  dis = each => {
    const k = {
      Id: each.id,
      Title: each.title,
      ImageUrl: each.image_url,
      Author: each.author,
      AvatarUrl: each.avatar_url,
      Topic: each.topic,
    }
    return k
  }

  data = async () => {
    const k = await fetch('https://apis.ccbp.in/blogs')
    const jsda = await k.json()
    const k1 = jsda.map(each => this.dis(each))
    this.setState(prev => ({
      list: k1,
    }))
  }

  render() {
    const {list} = this.state
    const k = list.length > 0
    return (
      <div className="sai">
        {k ? (
          list.map(each => <BlogItem item={each} key={each.id} />)
        ) : (
          <div data-testid="loader">
            <Loader type="Oval" />
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
