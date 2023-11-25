import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItemDetails from '../BlogItemDetails'

import './index.css'

class Contact extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      userId: eachItem.userId,
      title: eachItem.title,
      topic: eachItem.body,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItemDetails key={eachBlogItem.id} details={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Contact
