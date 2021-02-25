import Navbar from './components/Navbar.js'
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound.js'


function App() {

  return (  
    <Router>
    <div className="App">
      <Navbar />
     </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route exact path="/Home">
            <Home />
          </Route> 
          <Route exact path="/About">
            <About />
          </Route>                
            <Route path="/index">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
