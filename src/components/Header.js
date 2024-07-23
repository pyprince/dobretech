import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className='bg-[#001D44] flex pl-10 pr-16 py-3 items-center justify-between'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img src='../images/logox75.png' alt='logo' />
                </Link>
                <div className='flex gap-10 ml-20'>
                    <Link to='/' className={location.pathname === '/' ? 'text-[#26FFDA]' : 'text-white'}>Home</Link>
                    <Link to='/services' className={location.pathname === '/services' ? 'text-[#26FFDA]' : 'text-white'}>Services</Link>
                    <Link to='/training' className={location.pathname === '/training' ? 'text-[#26FFDA]' : 'text-white'}>Training</Link>
                    <Link to='/aboutme' className={location.pathname === '/aboutme' ? 'text-[#26FFDA]' : 'text-white'}>About me</Link>
                    <Link to='/community' className={location.pathname === '/community' ? 'text-[#26FFDA]' : 'text-white'}>Community</Link>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <Link to='/notifications'>
                    <img src='../images/icons/notification.svg' alt='notification' />
                </Link>
                <button className='signup-button button text-white text-xl px-6 py-2 rounded-lg'>Signup</button>
            </div>
        </div>
    )
}

export default Header;
