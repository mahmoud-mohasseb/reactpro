import React from 'react';
import PureCard from './Purecard';
import ContactCard from './ContactCard';
import { BiCommentDots } from 'react-icons/bi';
import {
  AiFillLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import './PostView.css';

const PostView = () => {
  return (
    <div className='post_view'>
      <PureCard>
        <div className='post_header'>
          <ContactCard />
          <BiCommentDots size='20px' />
        </div>
        {/* post details */}
        <div className='post_body'>
          <img
            src='https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg'
            width='100%'
            height='100%'
            alt='post'
          />
          {/* post text */}
          <div className='post_text'>
            <h3>welcome to webpage webpage </h3>
            <p>webpage webpage webpage </p>
          </div>
        </div>
        <hr />
        {/* post reaction part  */}
        <div className='post_reaction_part'>
          <button>
            <AiFillLike size='20' />
            <h4>Like</h4>
            <span>120</span>
          </button>
          <button>
            <AiOutlineComment size='20' />
            <h4>Comment</h4>
            <span>20</span>
          </button>
          <button>
            <AiOutlineShareAlt size='20' />
            <h4>share</h4>
            <span>2</span>
          </button>
        </div>
      </PureCard>
    </div>
  );
};

export default PostView;
