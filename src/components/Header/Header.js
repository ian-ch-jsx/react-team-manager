import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/kick-off.png';
import { signOutUser } from '../../services/users';
import './Header.css';

function Header({ user, setCurrentUser }) {
  return (
    <header>
      <section>
        <aside>
          <Link to="/">
            <img src={logo} alt="App logo" />
          </Link>
        </aside>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li>
              {user ? (
                <button type="button" onClick={() => signOutUser() && setCurrentUser(null)}>
                  Sign Out
                </button>
              ) : (
                <NavLink to="/sign-in" exact>
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
