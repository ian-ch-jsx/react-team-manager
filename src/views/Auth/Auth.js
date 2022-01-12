import React, { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import AuthForm from '../../components/Auth/AuthForm';
import './Auth.css';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin'); // or signup
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
      history.push('/');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };
  return (
    <div className="auth">
      <div className="tabs">
        <h3
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h3>
        <h3
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h3>
      </div>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
