import React from 'react';
import ContactCard from '../../components/ContactCard';
import { FcSearch } from 'react-icons/fc';

const Sidebar = () => {
  return (
    <div className='Friend_chat'>
      <div className='Friend_chat_search'>
        <input type='text' name='Search' placeholder='Search' />
        <button type='submit'>
          <FcSearch size='15px' />
        </button>
      </div>
      <div className='friends'>
        <ContactCard />
        <ContactCard /> <ContactCard /> <ContactCard /> <ContactCard />
        <ContactCard /> <ContactCard /> <ContactCard /> <ContactCard />
        <ContactCard /> <ContactCard />
        <ContactCard />
        <ContactCard /> <ContactCard /> <ContactCard /> <ContactCard />
        <ContactCard /> <ContactCard /> <ContactCard /> <ContactCard />
        <ContactCard /> <ContactCard />
      </div>
    </div>
  );
};

export default Sidebar;
