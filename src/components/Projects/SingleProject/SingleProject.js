import React from 'react';
import { makeStyles } from '@mui/styles';   // ✅ Correct MUI import
import { FaPlay, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';     // ✅ Using framer-motion instead of react-reveal

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

const useStyles = makeStyles(() => ({
  iconBtn: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    border: `2px solid ${theme.tertiary}`,
    color: theme.tertiary,
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: theme.secondary,
      color: theme.primary,
      transform: 'scale(1.1)',
      border: `2px solid ${theme.secondary}`,
    },
  }),
  icon: {
    fontSize: '1.1rem',
    transition: 'all 0.2s',
  },
}));

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const classes = useStyles(theme);

  return (
    <motion.div
      key={id}
      className='singleProject'
      style={{ backgroundColor: theme.primary400 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='projectContent'>
        <h2
          id={name.replace(' ', '-').toLowerCase()}
          style={{ color: theme.tertiary }}
        >
          {name}
        </h2>
        <img src={image ? image : placeholder} alt={name} />
        <div className='project--showcaseBtn'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-demo`}
          >
            <FaPlay
              id={`${name.replace(' ', '-').toLowerCase()}-demo`}
              className={classes.icon}
              aria-label='Demo'
            />
          </a>
          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(' ', '-').toLowerCase()}-code`}
          >
            <FaCode
              id={`${name.replace(' ', '-').toLowerCase()}-code`}
              className={classes.icon}
              aria-label='Code'
            />
          </a>
        </div>
      </div>

      <p
        className='project--desc'
        style={{
          background: theme.secondary,
          color: theme.tertiary,
        }}
      >
        {desc}
      </p>

      <div
        className='project--lang'
        style={{
          background: theme.secondary,
          color: theme.tertiary80,
        }}
      >
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default SingleProject;
