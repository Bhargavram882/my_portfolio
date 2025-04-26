import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@mui/styles';
import {
    FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB,
    FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram,
    FaGitlab, FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';

import './Contacts.css';

const useStyles = makeStyles(() => ({
    input: (theme) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }),
    message: (theme) => ({
        border: `4px solid ${theme.primary80}`,
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    }),
    label: (theme) => ({
        backgroundColor: theme.secondary,
        color: theme.primary,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 600,
        fontSize: '0.9rem',
        padding: '0 5px',
        transform: 'translate(25px,50%)',
        display: 'inline-flex',
    }),
    socialIcon: (theme) => ({
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '21px',
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: theme.tertiary,
        },
    }),
    detailsIcon: (theme) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '23px',
        transition: '250ms ease-in-out',
        flexShrink: 0,
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: theme.tertiary,
        },
    }),
    submitBtn: (theme) => ({
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.08)',
            backgroundColor: theme.tertiary,
        },
    }),
}));

function Contacts() {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles(theme);

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();
        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = { name, email, message };
                axios.post(contactsData.sheetAPI, responseData).then(() => {
                    setSuccess(true);
                    setErrMsg('');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            {/* Name Field */}
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>Name</label>
                                <input
                                    placeholder='John Doe'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            {/* Email Field */}
                            <div className='input-container'>
                                <label htmlFor='Email' className={classes.label}>Email</label>
                                <input
                                    placeholder='John@doe.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            {/* Message Field */}
                            <div className='input-container'>
                                <label htmlFor='Message' className={classes.label}>Message</label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name='Message'
                                    className={`form-message ${classes.message}`}
                                />
                            </div>
                            {/* Submit Button */}
                            <div className='submit-btn'>
                                <button type='submit' className={classes.submitBtn}>
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success ? 'initial' : 'fly 0.8s linear both',
                                                position: success ? 'absolute' : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success ? 'none' : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        {/* Error Snackbar */}
                        <Snackbar
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    {/* Contact Details */}
                    <div className='contacts-details'>
                        {/* Email */}
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>
                            <div className={classes.detailsIcon}><FiAtSign /></div>
                            <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                        </a>
                        {/* Phone */}
                        <a href={`tel:${contactsData.phone}`} className='personal-details'>
                            <div className={classes.detailsIcon}><FiPhone /></div>
                            <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                        </a>
                        {/* Address */}
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}><HiOutlineLocationMarker /></div>
                            <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
                        </div>

                        {/* Social Icons */}
                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <a href={socialsData.twitter} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {/* Add rest similarly... */}
                        </div>
                    </div>
                </div>
            </div>
            <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
        </div>
    );
}

export default Contacts;
