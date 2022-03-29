import { useState } from 'react';

import styled from 'styled-components';

import { ButtonPrimary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';

export default function LoginPage({ onLogin }) {
  const initialCredentials = {
    name: '',
    password: '',
  };

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onLogin(credentials);
    console.log('login with credentials', credentials);
  };

  return (
    <>
      <HeadingMain title={'LOGIN'} />
      <StyledMain>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="username">GitHub Username</label>
          <input
            id="username"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <ButtonPrimary>Login</ButtonPrimary>
        </StyledForm>
      </StyledMain>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 10px;

  button {
    margin-top: 50px;
  }

  input {
    margin-top: -5px;
    border-radius: 5px;
    border: 1px solid var(--border-color-light);
    font-size: 0.9rem;
    height: 2rem;
  }

  label:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const StyledMain = styled.main`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
`;
