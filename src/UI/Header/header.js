import React, { useState, useContext } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
// import cookies from 'js-cookie';
import {
  FcSearch,
  FcHome,
  FcBusinessman,
  FcSms,
  FcDoNotInhale,
} from 'react-icons/fc';
import Avatar from '../components/Avatar';
import { AiFillCaretDown } from 'react-icons/ai';
import { ThemeContext } from '../../store/ThemeContext';
import Dropdown from './Dropdown';

const Header = () => {
  const logo = 'https://static-exp1.licdn.com/sc/h/8zliikpi39umlw2wr99gu4a0u';
  const Src = 'https://avatars.githubusercontent.com/u/66387837?v=4';

  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  // console.log(toggleTheme);
  const backgroundColor = theme === 'light' ? '#FFF' : '#333';
  const color = theme === 'light' ? '#333' : '#FFF';

  // const backgroundColor = window.localStorage.getItem(backgroundColor);
  // const color = window.localStorage.getItem(color);

  const [menu, setmenu] = useState(false);

  // cookies.set('mahmoud', '35');
  // console.log(cookies.get('mahmoud'));

  return (
    <div
      className='Header'
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}>
      <div className='Logosearch'>
        <img src={logo} alt='Logo' width='30' height='30' />
        <form className='search'>
          <input type='text' name='Search' placeholder='Search' />
          <button type='submit' onClick={console.log('search')}>
            <FcSearch size='15px' />
          </button>
        </form>
      </div>
      {/* search input */}

      <div className='Menu'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName={'selected'}>
              <FcHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/Jobs' exact activeClassName={'selected'}>
              <FcBusinessman />
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to='/Messaging' exact activeClassName={'selected'}>
              <FcSms />
              Messaging
            </NavLink>
          </li>
          <li>
            <NavLink to='/Notification' exact activeClassName={'selected'}>
              <FcDoNotInhale />
              Notification
            </NavLink>
          </li>
        </ul>
      </div>

      {/* avatar */}
      <div className='pro-menu'>
        <Avatar src={Src} />
        <button onClick={() => setmenu(!menu)}>
          <AiFillCaretDown size='14' />
        </button>
        {menu && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
