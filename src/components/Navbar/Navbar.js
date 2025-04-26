import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

const useStyles = makeStyles(() => ({
  navMenu: (theme) => ({
    fontSize: "2.5rem",
    color: theme.tertiary,
    cursor: "pointer",
    transform: "translateY(-10px)",
    transition: "color 0.3s",
    "&:hover": {
      color: theme.primary,
    },
    "@media (max-width:600px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width:400px)": {
      fontSize: "2rem",
    },
  }),
  MuiDrawer: (theme) => ({
    padding: "0em 1.8em",
    width: "14em",
    fontFamily: "var(--primaryFont)",
    background: theme.secondary,
    overflow: "hidden",
    borderTopRightRadius: "40px",
    borderBottomRightRadius: "40px",
    "@media (max-width:600px)": {
      width: "12em",
    },
  }),
  closebtnIcon: (theme) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: theme.primary,
    position: "absolute",
    right: 40,
    top: 40,
    transition: "color 0.2s",
    "&:hover": {
      color: theme.tertiary,
    },
    "@media (max-width:600px)": {
      right: 20,
      top: 20,
    },
  }),
  drawerItem: (theme) => ({
    margin: "2rem auto",
    borderRadius: "78px",
    background: theme.secondary,
    color: theme.primary,
    width: "85%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "0 30px",
    border: "2px solid",
    borderColor: theme.primary,
    transition: "background-color 0.2s, color 0.2s",
    "&:hover": {
      background: theme.primary,
      color: theme.secondary,
    },
    "@media (max-width:600px)": {
      width: "100%",
      padding: "0 25px",
      height: "55px",
    },
  }),
  drawerLinks: {
    fontFamily: "var(--primaryFont)",
    width: "50%",
    fontSize: "1.3rem",
    fontWeight: 600,
    "@media (max-width:600px)": {
      fontSize: "1.125rem",
    },
  },
  drawerIcon: {
    fontSize: "1.6rem",
    "@media (max-width:600px)": {
      fontSize: "1.385rem",
    },
  },
}));

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles(theme);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const shortname = (name) => (name.length > 12 ? name.split(" ")[0] : name);

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>

      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">

            {/* Replace Fade with motion.div */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <NavLink to="/" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Resume</span>
                </div>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Services</span>
                </div>
              </NavLink>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </motion.div>

          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
