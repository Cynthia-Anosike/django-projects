"use client"
import { useState } from 'react';
// import signingFunction from './signingFunction';

export default function LoginPage()  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
    const csrfTokenResponse = await axios.get('/api/get-csrf-token');
    const csrfToken = csrfTokenResponse.data;

    const loginRequest = axios.post('/api/login', {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
    });

    const loginResponse = await loginRequest.data;
    
    if (loginRequest.ok) {
        
        const accessToken = responseData.access_token;

        // Store the access token and CSRF token in secure cookies using js-cookie
        Cookies.set('access_token', accessToken, { expires: 7, secure: true });
        Cookies.set('csrf_token', csrfToken, { expires: 7, secure: true });
        console.log(loginResponse.message);
        console.log('access:', accessToken);
    }else {
        console.log(responseData.error);
        // Handle login failure, e.g., show an error message to the user.
        console.log("Login failed");
      }
    }catch (error) {
      console.error('Error during login:', error)

    // Handle the login response here.
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
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
}

