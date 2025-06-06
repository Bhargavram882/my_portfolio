import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';  // ✅ Correct MUI v5
import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
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
    "@media (max-width:600px)": {
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
    "@media (max-width:600px)": {
      fontSize: '1.8rem',
    },
  }),
}));

function ProjectPage() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);
  const classes = useStyles(theme);

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Projects</title>
      </Helmet>

      <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Projects</h1>
      </div>

      <div className="projectPage-container">
        <div className="projectPage-search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            className={classes.search}
          />
        </div>

        <div className="project-container">
          <div className="project-grid">
            {filteredArticles.map(project => (
              <SingleProject
                theme={theme}
                key={project.id}
                id={project.id}
                name={project.projectName}
                desc={project.projectDesc}
                tags={project.tags}
                code={project.code}
                demo={project.demo}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
