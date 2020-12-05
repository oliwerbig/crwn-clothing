import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' />
      </Switch>
    </div>
  );
}

export default App
