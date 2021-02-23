import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/pages/NotFound'


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
          {/* </Route>
          <Route exact path="/create">
            <Create />
          </Route>                 */}
            <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
