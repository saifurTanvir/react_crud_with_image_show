import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
     <div className="main">
     <h2 className="main-header">React CRUD Operation</h2>
     <img src="http://localhost/react_crud/backend/image/image2.jpg"/>
    <div>
      <Route exact path='/create' component={Create}/>
    </div>
    <div>
      <Route exact path='/read' component={Read}/>
    </div>
    <div>
      <Route exact path='/update' component={Update}/>
    </div>
   </div>
   </Router>
   
  );
}

export default App;
