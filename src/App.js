import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import './App.css'

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

class App extends Component {
  render() {
    console.log(sortByOptions)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
