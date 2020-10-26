import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/home.module.css';
import Home from'./component/Home'

import AddSailor from './component/AddPaint'
import SearchSailor from './component/Search'
import DisplaySailor from './component/DisplaySailor'
import {Route, BrowserRouter as Router,Link} from 'react-router-dom';
import Elements from './component/Elements';
import Routest from './component/Routest';
function App() {
  return (
    <div className="background">
      <Router>
      
      <Route to="/" exact component={Home}/>  
      <Routest/>
      <br /><br /><br />
      <Route to="/addsailor" exact component={AddSailor}/>
      <br /><br /><br />
      <Route to="/search" exact component={SearchSailor}/>
      <br /><br /><br />
      <Route to="/update/:id" exact component={Elements}/>
      <br /><br /><br />
      <Route to="display" exact component={DisplaySailor}/>
      </Router>
      
    </div>
  );
}

export default App;
