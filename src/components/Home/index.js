import {Component} from 'react'
import UserInfo from '../UserInfo/index'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <UserInfo />
        <BlogList />
      </div>
    )
  }
}

export default Home
