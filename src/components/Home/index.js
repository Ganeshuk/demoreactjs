import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'
import {FcGenericSortingDesc} from 'react-icons/fc'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillStar,
} from 'react-icons/ai'

import Context from '../Context'
import Nav from '../nav'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Home extends Component {
  state = {
    list: [],
    t: false,
    active: 'home',
    page: [],
    lastnum: '',
    offset: 0,
    num: 0,
  }

  componentDidMount() {
    this.getdetail()
    this.get()
    this.setState({active: 'homes'})
  }

  get = async () => {
    const {num, offset} = this.state
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${Cookies.get('jwt')}`},
    }

    const response = await fetch(
      'https://apis.ccbp.in/restaurants-list?offset=0&limit=1000',
      option,
    )
    const re = await response.json()
    const last = re.restaurants.length / 6

    if (num < 5) {
      const limit = 6

      const res = await fetch(
        `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=""`,
        option,
      )
      const r = await res.json()

      console.log(offset)
      console.log(r)
      this.setState({
        page: r.restaurants,
        lastnum: last,
        num: num + 1,
        offset: offset + 6,
      })
    }
  }

  getmius = async () => {
    const {num, offset} = this.state
    if (num > 1) {
      if (num < 2) {
        this.setState({offset: 0})
      } else {
        this.setState({offset: offset - 12})
      }
    }
    const limit = 6
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${Cookies.get('jwt')}`},
    }
    const res = await fetch(
      `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=""`,
      option,
    )
    const r = await res.json()

    console.log(offset)
    this.setState({num: num - 1, page: r.restaurants})
  }

  getdetail = async () => {
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${Cookies.get('jwt')}`},
    }
    const response = await fetch(
      'https://apis.ccbp.in/restaurants-list/offers',
      option,
    )
    const re = await response.json()

    this.setState({list: re.offers, t: true})
  }

  sort = async event => {
    console.log(event.target.value)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {list, t, active, page, lastnum, num} = this.state

    return (
      <Context.Provider value={{active}}>
        <div>
          <Nav />
          {t && (
            <Slider {...settings}>
              {list.map(each => (
                <div key={each.id}>
                  <img src={each.image_url} alt={each.id} className="img1" />
                </div>
              ))}
            </Slider>
          )}
          <div className="sapa">
            <div>
              <h1 className="home-h1">Popular Restaurants</h1>
              <h1 className="para-1">
                Select Your favourite restaurant special dish and make your day
                happy...
              </h1>
            </div>
            <div>
              <FcGenericSortingDesc />{' '}
              <select onChange={this.sort}>
                {sortByOptions.map(each => (
                  <option value={each.displayText}>{each.displayText}</option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <div>
            <ul type="none" className="ul">
              {page.map(each => (
                <Link to={`items/${each.id}`} className="link">
                  {' '}
                  <li key={each.id} className="li">
                    <img
                      src={each.image_url}
                      alt={each.id}
                      className="homely"
                    />
                    <div className="leo">
                      <h1 className="home-h1">{each.name}</h1>
                      <h1 className="home-h2">{each.cuisine}</h1>
                      <AiFillStar />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <AiOutlineArrowLeft onClick={this.getmius} />
              {num} of {lastnum}
              <AiOutlineArrowRight onClick={this.get} className="p" />
            </div>
          </div>
        </div>
      </Context.Provider>
    )
  }
}

export default Home
