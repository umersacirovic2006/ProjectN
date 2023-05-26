import React, { useState } from 'react';
import './Nav.css'
import IconButton from '@material-ui/core/IconButton'
import { FaRegUserCircle, FaHome, FaSearch } from 'react-icons/fa'
import { VscMenu } from 'react-icons/vsc';
import nurkovic from '../../images/nurkovic.jpg';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const para = {
        transition: '0.5s ease-in-out',
        paddingLeft: '10px',
        display: isOpen ? 'block' : 'none'
    }

    return (
        <motion.div animate={{ width: isOpen ? '300px' : '100px' }} className='nav'>
            <div className='nav-wrapper' >
                <motion.div className='logo' style={{ top: '20px' }}>
                    <motion.img src={nurkovic} alt='Nurkovic' width='100%' />
                </motion.div>
                <div className='icons'>
                    <IconButton>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} style={{ textDecoration: 'none', display: 'flex' }} to='/account' >
                            <FaRegUserCircle style={{ fontSize: 30, transition: '0.5s ease-in-out' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
                            <motion.p style={para} initial={{ opacity: 0 }} animate={{ opacity: isOpen ? '1' : '0' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Account</motion.p>
                        </NavLink>
                    </IconButton>
                    <IconButton>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} style={{ textDecoration: 'none', display: 'flex' }} to='/'>
                            <FaHome style={{ fontSize: 30, transition: '0.5s ease-in-out' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
                            <motion.p style={para} initial={{ opacity: 0 }} animate={{ opacity: isOpen ? '1' : '0' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home</motion.p>
                        </NavLink>
                    </IconButton>
                    <IconButton>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} style={{ textDecoration: 'none', display: 'flex' }} to='/search'>
                            <FaSearch style={{ fontSize: 30, transition: '0.5s ease-in-out' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
                            <motion.p style={para} initial={{ opacity: 0 }} animate={{ opacity: isOpen ? '1' : '0' }} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Search</motion.p>
                        </NavLink>
                    </IconButton>
                </div>
            </div>
            <div className='menu'>
                <IconButton onClick={() => { setIsOpen(!isOpen) }} style={{ color: 'white', bottom: '10px' }}>
                    <VscMenu style={{ color: 'white', fontSize: 30 }} />
                </IconButton>
            </div>
        </motion.div>
    )
}

export default Nav