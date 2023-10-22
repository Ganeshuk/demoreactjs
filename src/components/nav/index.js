import {Link} from 'react-router-dom'
import Context from '../Context'

import './index.css'

const Nav = () => (
  <Context.Consumer>
    {value => {
      const {active} = value

      return (
        <nav>
          <div className="nav-align">
            <img
              src="https://res.cloudinary.com/daglogshn/image/upload/v1697013053/Group_7420_guq49o.png"
              alt="baneer"
            />
            <h1 className="badass">Tasty Kitchens</h1>
          </div>
          <div className="align">
            <Link to="/" className="link">
              {' '}
              <h1 className={active === 'homes' ? 'nav-home1' : 'nav-home'}>
                Home
              </h1>
            </Link>
            <Link to="/Cart" className="link">
              <h1 className={active === 'Cart' ? 'nav-cart1' : 'nav-cart'}>
                Cart
              </h1>
            </Link>
            <button type="button" className="nav-button">
              {' '}
              Logout
            </button>
          </div>
        </nav>
      )
    }}
  </Context.Consumer>
)

export default Nav
