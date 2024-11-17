import React, { useContext } from 'react';
import UserContext from './UserContext'; // Assuming UserContext.js is in the same directory

const UserProfile = () => {
  const userData = useContext(UserContext);

  // Merge props data (if available) with user data from context
  const name = userData?.name || props?.name;
  const age = userData?.age || props?.age;
  const bio = userData?.bio || props?.bio;

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;