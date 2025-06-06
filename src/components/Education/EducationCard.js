import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

const useStyles = makeStyles(() => ({
    educationCard: (theme) => ({
        backgroundColor: theme.primary30,
        "&:hover": {
            backgroundColor: theme.primary50,
        },
    }),
}));

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    return (
        <motion.div
            key={id}
            className={`education-card ${classes.educationCard}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
            </div>
            <div className="education-details">
                <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{course}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
            </div>
        </motion.div>
    );
}

export default EducationCard;
