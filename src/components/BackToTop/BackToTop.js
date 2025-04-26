import React, { useState, useContext, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { makeStyles } from '@mui/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '3rem',
    color: (theme) => theme.tertiary,
  },
}));

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div
      style={{ display: visible ? 'inline' : 'none' }}
      className='backToTop'
    >
      <button onClick={scrollToTop} aria-label='Back to top'>
        <IoIosArrowDropupCircle className={classes.icon} />
      </button>
    </div>
  );
}

export default BackToTop;
