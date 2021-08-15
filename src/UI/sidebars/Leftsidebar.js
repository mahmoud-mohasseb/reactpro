import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import PureCard from '../components/Purecard';
import './leftsidebar.css';

const Leftsidebar = () => {
  const Src = 'https://avatars.githubusercontent.com/u/66387837?v=4';
  return (
    <div className='leftsidebar'>
      <PureCard>
        <div className='profile_left_sidebar'>
          <div className='image_background'>
            <img
              alt='background'
              src='https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg'
              width='300'
              height='150'
            />
          </div>

          <div className='avatar_homepage'>
            <Link to='/'>
              <Avatar src={Src} />
            </Link>
          </div>
          <div className='personal_data'>
            <h1>Mahmoud Ahmed</h1>
            <p>MY RIDE</p>
          </div>
        </div>
      </PureCard>
      {/* </div> */}
    </div>
  );
};

export default Leftsidebar;
