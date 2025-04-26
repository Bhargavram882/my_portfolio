import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'; // ✅ MUI v5
import { AiOutlineHome } from "react-icons/ai";

import './BlogPage.css';
import { SingleBlog } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import { headerData } from '../../data/headerData';

const useStyles = makeStyles(() => ({
  search: (theme) => ({
    color: theme.tertiary,
    width: '40%',
    height: '2.75rem',
    outline: 'none',
    border: 'none',
    borderRadius: '20px',
    padding: '0.95rem 1rem',
    fontFamily: "'Noto Sans TC', sans-serif",
    fontWeight: 500,
    fontSize: '0.9rem',
    backgroundColor: theme.secondary,
    boxShadow: theme.type === 'dark'
      ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
      : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
    "&::placeholder": {
      color: theme.tertiary80,
    },
    "@media (max-width: 600px)": {
      width: '350px',
    },
  }),
  home: (theme) => ({
    color: theme.secondary,
    position: 'absolute',
    top: 25,
    left: 25,
    padding: '7px',
    borderRadius: '50%',
    fontSize: '2rem',
    cursor: 'pointer',
    boxShadow: theme.type === 'dark'
      ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
      : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
    transition: 'all 0.3s ease-in-out',
    "&:hover": {
      color: theme.tertiary,
      transform: 'scale(1.1)',
    },
    "@media (max-width: 600px)": {
      fontSize: '1.8rem',
    },
  }),
}));

function BlogPage() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);

  const filteredArticles = blogData.filter((blog) => {
    const content = blog.title + blog.description + blog.date;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Blog</title>
      </Helmet>

      <div className="blogPage--header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Blogs</h1>
      </div>

      <div className="blogPage--container">
        <div className="blog--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blog..."
            className={classes.search}
          />
        </div>

        <div className="blogs--container">
          <div className="blog-grid">
            {filteredArticles.reverse().map(blog => (
              <SingleBlog
                theme={theme}
                title={blog.title}
                desc={blog.description}
                date={blog.date}
                image={blog.image}
                url={blog.url}
                key={blog.id}
                id={blog.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
