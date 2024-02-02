import React, { useState } from 'react';
import axios from 'axios'; // Make sure you have Axios imported
import { useRouter } from 'next/router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const emailRegex = /^\w+@\w+\.\w+$/i;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;

  const route = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError('Must contain at least 8 characters - lowercase and digits');
    } else {
      setPasswordError('');
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError('Password did not match');
    } else {
      setRepeatPasswordError('');
    }

    // Check error conditions and only proceed if all conditions are met
    if (emailError === '' && passwordError === '' && repeatPasswordError === '') {
      try {
        console.log('<--- wants to submit --->');
        const data = {
          email: email,
          password: password,
        };

        // Send the Axios request only if error conditions are met
        const response = await axios.post('http://127.0.0.1:8080/api/signup', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('<--- Submitted --->');

        if (response.status >= 200 && response.status < 300) {
          console.log(response.data.message);
          console.log('yes');
          route.push('/login');
        } else {
          console.log(response.data.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form input fields here */}
      </form>
    </div>
  );
}
