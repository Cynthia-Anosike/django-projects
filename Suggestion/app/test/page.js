"use client"
import { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      // Step 1: Fetch the CSRF token
      const csrfTokenResponse = await axios.get('http://127.0.0.1:8080/get-csrf-token');
      const csrfToken = csrfTokenResponse.data;

      // Step 2: Make the login request
      const loginResponse = await axios.post(
        'http://127.0.0.1:8080/api/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        }
      );

      // Step 3: Check the login response and handle accordingly
      if (loginResponse.status === 200) {
        const accessToken = loginResponse.data.access_token;

        // Store the access token and CSRF token in secure cookies using js-cookie
        Cookies.set('access_token', accessToken, { expires: 7, secure: true });
        Cookies.set('csrf_token', csrfToken, { expires: 7, secure: true });
        console.log(loginResponse.data.message);
        console.log('access:', accessToken);
      } else {
        console.log(loginResponse.data.message);
        // Handle login failure, e.g., show an error message to the user.
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle any errors, e.g., network issues or server errors
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

