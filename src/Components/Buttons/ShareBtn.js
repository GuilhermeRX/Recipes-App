import React, { useState } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

function ShareBtn() {
  const [copy, setCopy] = useState(false);
  const history = useHistory();
  const TimeOut = 1000;
  const copyLink = () => {
    if (history.location.pathname.includes('in-progress')) {
      const url = history.location.pathname.split('/in-progress')[0];
      navigator.clipboard.writeText(`http://localhost:3000${url}`);
      setCopy(true);
      const timer = setTimeout(() => {
        setCopy(false);
      }, TimeOut);
      return () => clearTimeout(timer);
    }
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, TimeOut);
    return () => clearTimeout(timer);
  };

  return (
    <div style={ { position: 'relative' } }>
      <BsFillShareFill onClick={ copyLink } />
      <div
        style={ { position: 'absolute', marginTop: '15px', marginLeft: '-18px' } }
      >
        {copy && <span className="link-copied">Link copied!</span>}
      </div>
    </div>
  );
}

export default ShareBtn;
