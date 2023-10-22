import {Component} from 'react'
import Nav from '../nav'
import Context from '../Context'

class Cart extends Component {
  state = {active: 'Cart'}

  render() {
    const {active} = this.state
    return (
      <Context.Provider value={{active}}>
        <div>
          <Nav />
        </div>
      </Context.Provider>
    )
  }
}

export default Cart
