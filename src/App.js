import './App.css';
import Header from './components/Header/Header.js';
import Auth from './components/Auth/Auth.js';
import ToDos from './components/ToDos/ToDos.js';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={ToDos} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
