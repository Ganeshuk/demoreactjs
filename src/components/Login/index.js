import {Component} from 'react'
import Cookies from 'js-cookie'

import {SpinnerDotted} from 'spinners-react'

import './index.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      t: true,
    }
  }

  submit = async event => {
    event.preventDefault()
    this.setState({t: false})
    const user = document.getElementById('input1')
    const password = document.getElementById('input2')
    console.log(user.value)
    const detail = {
      username: user.value,
      password: password.value,
    }
    const option = {
      method: 'POST',
      body: JSON.stringify(detail),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    const res = await response.json()

    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt', res.jwt_token, {expires: 1})
      history.replace('/')
    } else {
      console.log(response)
    }
    this.setState({t: true})
  }

  render() {
    const {t} = this.state
    return (
      <div className="main">
        <form onSubmit={this.submit}>
          <div className="logo-login">
            <img
              src="https://res.cloudinary.com/daglogshn/image/upload/v1697013053/Group_7420_guq49o.png"
              alt=""
            />
            <h1 className="logo">Tasty Kitchens</h1>
            <h1 className="logo">Login</h1>
          </div>
          <label htmlFor="input1">USERNAME</label>
          <input type="text" id="input1" />
          <label htmlFor="input2">PASSWORD</label>
          <input type="password" id="input2" />
          <button type="submit" className="btn">
            {t ? 'Login' : <SpinnerDotted size="10" />}
          </button>
        </form>
        <img
          src="https://res.cloudinary.com/daglogshn/image/upload/v1697011560/Rectangle_1456_fwwnee.png"
          alt="banner"
        />
      </div>
    )
  }
}

export default Login
