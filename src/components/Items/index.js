import {Component} from 'react'

class Items extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location
    console.log(location)
    return <div>hjhjj</div>
  }
}

export default Items
