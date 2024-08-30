import React, { FormEvent, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.tsx';

type User = {
  password: string;
  alert?: boolean;
  alerts?: string[];
};

type Users = {
  [email: string]: User;
};
//db
const users: Users = {
  'example@gmail.com': { password: 'wow' },
  'alertexample@gmail.com': {
    password: 'alert',
    alert: true,
    alerts: ['asdasd', 'asdasd', 'asdsada'],
  },
};

function App() {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [signedIn, setSignedIn] = useState<boolean>(false);

  console.log('Rerendering');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email in users) {
      if (users[email].password === password) {
        console.log('signed in');
        setSignedIn(true);
      } else {
        console.log('Email or password is incorrect');
      }
    } else {
      console.log('Email or password is incorrect');
    }
  };

  return (
    <>
      {!signedIn ? (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            id='email'
            value={email}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            id='password'
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type='submit'>Login</button>
        </form>
      ) : (
        <Dashboard user={users[email]} />
      )}
    </>
  );
}

export default App;
