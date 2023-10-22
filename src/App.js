import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import Items from './components/Items'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/items/:id" component={Items} />
      </Switch>
    )
  }
}

export default App
