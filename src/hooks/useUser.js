import { useState, useEffect } from 'react';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from a hypothetical API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return user;
};

export default useUser;