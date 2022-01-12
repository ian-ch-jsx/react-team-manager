import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import AddTeam from './views/Teams/AddTeam';
import Team from './views/Teams/Team';
import EditTeam from './views/Teams/EditTeam';
import NotFound from './views/NotFound/NotFound';
import { useState, useEffect } from 'react';
import { getUser } from './services/users';
import Teams from './views/Teams/Teams';
import Header from './components/Header/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const session = getUser();

    if (session?.user) setCurrentUser(session.user);
  }, []);

  return (
    <BrowserRouter>
      <Header user={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Home user={currentUser} />
        </Route>
        <Route exact path="/sign-in">
          <Auth setCurrentUser={setCurrentUser} />
        </Route>
        <Route
          exact
          path="/teams"
          render={(routeProps) => <Teams {...routeProps} user={currentUser} />}
        />
        <Route
          exact
          path="/teams/new"
          render={(routeProps) => <AddTeam {...routeProps} user={currentUser} />}
        />
        <Route
          exact
          path="/teams/:id"
          render={(routeProps) => <Team {...routeProps} user={currentUser} />}
        />
        <Route exact path="/teams/:id/edit">
          <EditTeam user={currentUser} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
