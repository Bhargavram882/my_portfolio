import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';

import './Experience.css';

const useStyles = makeStyles(() => ({
    experienceCard: (theme) => ({
        backgroundColor: theme.primary30,
        "&:hover": {
            backgroundColor: theme.primary50,
        },
    }),
}));

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    return (
        <motion.div
            key={id}
            className={`experience-card ${classes.experienceCard}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
            </div>
            <div className="experience-details">
                <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
            </div>
        </motion.div>
    );
}

export default ExperienceCard;
