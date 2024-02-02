"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Loading from '/components/Loading';

function MoviesLayout({ children }) {
  const route = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    };
    
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/user', options);
      
      // Check the response status and handle it accordingly
      if (response.status === 200) {
        // Response is successful, load the children
        console.log('Successful response:', response);
        setLoading(false)
      } else {
        // Response indicates an error, handle the error condition
        console.error('API response indicates an error:', response);
        setLoading(true);
        route.push('/login');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(true);
      route.push('/login');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
     {loading ? <Loading/> :  children}
    </div>
  );
}

export default MoviesLayout;
