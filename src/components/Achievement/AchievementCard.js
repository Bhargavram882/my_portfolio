import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css';

const useStyles = makeStyles(() => ({
  achievementCard: {
    backgroundColor: (theme) => theme.primary30,
    "&:hover": {
      backgroundColor: (theme) => theme.primary50,
    },
  },
}));

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);

  return (
    <motion.div 
      key={id}
      className={`achievement-card ${classes.achievementCard}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="achievecard-content">
        <div className="achievecard-details1">
          <h2 style={{ color: theme.tertiary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>{details}</p>
        </div>
        <div className="achievecard-details2" style={{ color: theme.primary }}>
          <h5>{date}</h5>
          <div className="achievecard-field">
            <AiOutlineFolder />
            <h5>{field}</h5>
          </div>
        </div>
      </div>
      <div className="achievecard-imgcontainer">
        <img src={image} alt="" />
      </div>
    </motion.div>
  );
}

export default AchievementCard;
