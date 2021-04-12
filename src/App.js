import './App.css';
import InputComp from './InputComp';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import UsersList from './UsersList';
function App() {
  
  return (<>
    <Router>
      <Switch>
      <Route path="/home" component={InputComp} />
      <Route path="/users" component={UsersList} />
      <Route path="/" component={InputComp}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;
