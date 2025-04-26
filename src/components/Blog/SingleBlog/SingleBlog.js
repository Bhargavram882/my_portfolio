import React from 'react';
import { motion } from 'framer-motion'; // ✅ use framer-motion instead of react-reveal

import placeholder from '../../../assets/png/placeholder.png';
import './SingleBlog.css';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
  return (
    <motion.a
      className="singleBlog"
      key={id}
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: theme.primary400 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="singleBlog--image" style={{ backgroundColor: theme.secondary }}>
        <img src={image ? image : placeholder} alt={title} />
      </div>
      <div className="singleBlog--body">
        <p style={{ color: theme.tertiary }}>{date}</p>
        <h3 style={{ color: theme.secondary }}>{title}</h3>
        <h6 style={{ color: theme.secondary }}>{desc}</h6>
      </div>
    </motion.a>
  );
}

export default SingleBlog;
