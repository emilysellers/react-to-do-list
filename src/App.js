import './App.css';
import Header from './components/Header/Header.js';
import ToDos from './components/ToDos/ToDos.js';
import Auth from './components/Auth/Auth.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/todos" component={ToDos} />
      </Switch>
    </div>
  );
}

export default App;
