import React from 'react';
import { Link } from 'react-router-dom';
import kick from '../../assets/kick.png';
import './Home.css';

function Home({ user }) {
  return (
    <div className="home">
      {user ? (
        <>
          <h1>Hello, {user.email}!</h1>
          <img src={kick} alt="leg kicking ball" style={{ marginTop: '10px', width: '512px' }} />
        </>
      ) : (
        <>
          <h2>Welcome to the Kickball League Directory!</h2>
          <p>
            Please <Link to="/sign-in">sign in</Link> to continue.
          </p>
        </>
      )}
    </div>
  );
}

export default Home;
