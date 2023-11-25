import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <p>Home Page</p>
    <input className="input-box" type="search" placeholder="Enter User Name" />
    <div className="cards-container">
      <div>
        <BlogList />
      </div>
    </div>
  </div>
)

export default Home
