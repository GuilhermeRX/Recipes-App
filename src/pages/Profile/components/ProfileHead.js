import React, { useEffect, useState } from 'react';
import { HeadProfile } from '../../../StyledComponents/ProfileStyled';

function ProfileHead() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('user'));
    if (store) setEmail(store.email);
  }, []);

  return (
    <HeadProfile>
      <img
        className="avatar avatar-1 mr-2"
        alt="jonrohan"
        src="https://github.com/jonrohan.png?v=3&s=32"
      />
      <h1
        data-testid="profile-email"
      >
        { email }
      </h1>
    </HeadProfile>
  );
}

export default ProfileHead;
