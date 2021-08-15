import React from 'react';
import PureCard from '../components/Purecard';
import { GoDeviceCameraVideo, GoSearch } from 'react-icons/go';
import { BiDotsHorizontal } from 'react-icons/bi';
import ContactCard from '../components/ContactCard';

import './Rightsidebar.css';
const Rightsidebar = () => {
  return (
    <div className='rightsidebar'>
      <div className='create_hash'>
        <PureCard>
          <h1>create hashtag</h1>
          <p>#endregion</p>
        </PureCard>
      </div>
      <div className='friend_you_know'>
        <PureCard>
          <h3>friends you may know</h3>
        </PureCard>
      </div>
      <hr style={{ width: '300px' }} />
      {/* chating */}
      <div className='entire_chat'>
        <div className='header_chat_friends'>
          <PureCard>
            {/* chatting part */}
            <div className='contacts_title'>
              <h2>Contacts</h2>
              <GoDeviceCameraVideo />
              <GoSearch />
              <BiDotsHorizontal />
            </div>

            {/* onpress by ID mapping  */}

            <div className='chatting_friends'>
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </div>
          </PureCard>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
