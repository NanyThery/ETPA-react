import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Story from './pages/Story'
import NotFound from './pages/NotFound'
import './App.css'


function App() {
  return (

    <div className="App">
      <NavigationBar></NavigationBar>

      <div className="content-wrapper">

        <Switch>

          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
          <Route path='/story/:id' component={Story} />
          <Route component={NotFound} />

        </Switch>

      </div>
      <Footer year={new Date().getFullYear()}></Footer>
    </div>
  )
}

export default App;
