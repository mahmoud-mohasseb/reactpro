import React, { useState } from 'react';
import Leftsidebar from '../../sidebars/Leftsidebar';
import Rightsidebar from '../../sidebars/Rightsidebar';
import Postcard from '../../components/postcard';
import Avatar from '../../components/Avatar';
import { FcCamera, FcPhotoReel, FcCloseUpMode } from 'react-icons/fc';
import PostView from '../../components/PostView';
import Model from '../../model/Model';
import Addpost from '../../components/Addpost';
import './Mainpage.css';
const Src = 'https://avatars.githubusercontent.com/u/66387837?v=4';

const Mainpage = () => {
  const [post, setpost] = useState(false);
  const cancelpost = () => {
    setpost(false);
  };
  const handlepost = () => {
    setpost(true);
  };
  const PostModel = (
    <Model show={post} modelClosed={cancelpost}>
      <Addpost />
    </Model>
  );
  return (
    <div className='homepagebody'>
      <div>
        <Leftsidebar />
      </div>

      {/* postModel */}
      {PostModel}
      {/* center add post*/}
      <div className='Homepage'>
        <div className='post'>
          <Postcard>
            <div className='add_post'>
              <Avatar src={Src} />
              <button onClick={handlepost}>
                <span>what's in your mind</span>
              </button>
            </div>
            <hr />
            <div className='underport'>
              <div>
                <FcCamera size='20' />
                <p>Camera</p>
              </div>
              <div>
                <FcPhotoReel size='20' />
                <p>photo</p>
              </div>
              <div>
                <FcCloseUpMode size='20' />
                <p>Feeling/Activity</p>
              </div>
            </div>
          </Postcard>
          {/* posts homepage */}
          {/* here will be post view 🤪 */}
          <PostView />
          <PostView />
          <PostView />
        </div>
      </div>

      {/* rightsidebar */}
      <div className='right_sidebar'>
        <Rightsidebar />
      </div>
    </div>
  );
};

export default Mainpage;
