import React, { useContext, useRef, useEffect, useState } from 'react';
import './Dropdown.css';
import { ThemeContext } from '../../store/ThemeContext';
import { ImSun } from 'react-icons/im';
import { BsMoon } from 'react-icons/bs';
import ContactCard from '../components/ContactCard';
import { CSSTransition } from 'react-transition-group';
import { GoChevronRight } from 'react-icons/go';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
// import { useHistory } from 'react-router-dom';

const Dropdown = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const backgroundColor = theme === 'light' ? '#FFF' : '#333';
  const color = theme === 'light' ? '#333' : '#FFF';
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const inputRef = useRef(null);
  // get size of an element totally base on functional component
  const { onLogout, onGooglelgout } = props;

  // const history = useHistory();
  useEffect(() => {
    setMenuHeight(inputRef.current.offsetHeight);
    // console.log('Input height', inputRef.current.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function logout() {
    onGooglelgout();
    onLogout();
    // note both are working properly i used route Dom hook
    return <Redirect to='/' />;
    // return history.push('/');
  }

  function DropdownItem(props) {
    return (
      <Link
        to='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </Link>
    );
  }
  return (
    <div
      className='dropdown'
      ref={inputRef}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        height: menuHeight,
      }}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}>
        <div inputRef={inputRef} className='menu'>
          <DropdownItem>
            <ContactCard />
          </DropdownItem>
          <DropdownItem
            leftIcon='🇪🇬'
            rightIcon={<GoChevronRight />}
            goToMenu='settings'>
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon='🦧'
            rightIcon={<GoChevronRight />}
            goToMenu='animals'>
            Animals
          </DropdownItem>

          {/* logout */}
          <button onClick={logout}>
            <AiOutlineLogout />
          </button>

          <button
            onClick={(theme) => {
              toggleTheme(theme);
              console.log(theme);
            }}>
            {theme === 'light' ? <BsMoon /> : <ImSun />}
          </button>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}>
        <div inputRef={inputRef} className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<IoIosArrowDropleftCircle size='25' />}>
            <h2>settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<GoChevronRight />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<GoChevronRight />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<GoChevronRight />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<GoChevronRight />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}>
        <div inputRef={inputRef} className='menu'>
          <DropdownItem
            goToMenu='main'
            leftIcon={<IoIosArrowDropleftCircle size='25' />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon='💋'>Kiss</DropdownItem>
          <DropdownItem leftIcon='🐸'>Frog</DropdownItem>
          <DropdownItem leftIcon='🦋'>Horse?</DropdownItem>
          <DropdownItem leftIcon='🦔'>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onGooglelgout: () => dispatch(actions.googlelogout()),
  };
};

export default connect(null, mapDispatchToProps)(Dropdown);
