import React, { useState, useEffect, useRef, useContext } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { GrEmoji } from 'react-icons/gr';
import { AiOutlineGif, AiOutlinePaperClip } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import './Chatroom.css';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import Gifer from './Gifer';
import { FormContext } from '../../../store/FormContext';
import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/index';

import db from '../../../firebase';

// import storageRef from '../../../firebase';
import firebase from 'firebase';

const Chatroom = (props) => {
  // fetching firebase data
  // here imported value useing usecontext

  const { value } = useContext(FormContext);
  const [openemoji, setopenemoji] = useState(() => false);
  const [message, SetMessage] = useState('');

  const [sentshowgif, setsentshowgif] = useState({ value });

  const [showGif, setshowGif] = useState(() => false);
  const [progress, setprogress] = useState(0);
  // const [files, setfiles] = useState([]);

  const [imagesPreviewUrls, setimagesPreviewUrls] = useState([]);
  const [imgfirebase, setimgfirebase] = useState('');

  const handleChange = (event) => {
    SetMessage(event.target.value);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    let video = (
      <video width='320' height='240' controls src={imagesPreviewUrls} />
    );

    let img = (
      <img
        src={value || imgfirebase}
        // src={value || imagesPreviewUrls}
        alt='gif'
        width='250'
        height='250'
      />
    );
    // let img2 = <img src={imgfirebase} alt='gif' width='250' height='250' />;

    let text = message;

    props.onAdd(text);
    // props.onAddIMG(img);
    // props.onAddVIDEO(video);

    if (message > 0) {
      SetMessage(message);
    } else {
      const database = firebase.database();
      const ref = database.ref('Messages');
      // console.log(ref);
      ref.push(message);
      SetMessage('');
    }
  };

  const triggerPicker = () => {
    setopenemoji((prev) => !prev);
  };

  const triggerGif = () => {
    setshowGif((prev) => !prev);
  };

  const removepickedgif = () => {
    setsentshowgif(null);
  };

  // target file
  const fileselectedhandler = (event) => {
    let files = Array.from(event.target.files);
    files.forEach((file) => {
      // console.log(file.type);
      let reader = new FileReader();
      reader.onloadend = () => {
        const newMedia = {
          idMedia: file.name,
          src: reader.result,
          type: file.type,
        };

        console.table(newMedia.type);
        var metadata = {
          contentType: 'image/jpeg',
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = firebase.storage().ref();
        // using firebase and upload
        var uploadTask = storageRef
          .child('images/' + newMedia.idMedia)
          .put(file, metadata);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setprogress('Upload is ' + progress + '% done');
          setprogress(progress);
          console.log('Upload is ' + progress + '% done');
        });

        // firebase image link
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // ?ﷻ image link
          console.log(downloadURL);
          // tring to post url to messages 😚
          db.collection('rooms').doc('roomId').collection('messages').add({
            message: downloadURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setimgfirebase(downloadURL);
        });
        // console.log(uploadTask);
        // setfiles(() => [...files, file]);
        setimagesPreviewUrls(() => [...imagesPreviewUrls, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // 📸 📸 📸 📸 📸 📸 📸 📸 📸📸📸📸📸📸📸📸📸📸📸📸📸📸📸📸📸

  const refPicker = useClickOutPicker(() => {
    openemoji && setopenemoji(false);
    showGif && setshowGif(false);
  });

  //  callback function contain useffect
  const emojiPicker = (
    <Picker
      title='Pick your emoji…'
      emoji='point_up'
      onSelect={(emoji) => SetMessage(message + emoji.native)}
      style={{
        position: 'absolute',
        bottom: '60px',
        right: '20px',
      }}
    />
  );

  return (
    <div>
      <div
        ref={refPicker}
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        {/* popup pickers */}
        {openemoji && emojiPicker}
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
        }}>
        {showGif && (
          <div className='GIF_PICKER'>
            <Gifer />
          </div>
        )}
      </div>
      {/*  👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁*/}

      {progress ? <progress id='file' value={progress} max='100' /> : null}

      {imgfirebase && (
        <img src={imgfirebase} alt='firebaseimg' width='40' height='40' />
      )}

      {/* {imgfirebase && (
        <video src={imgfirebase} width='50' height='50' controls />
      )} */}

      {/*  👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁👁*/}

      {sentshowgif ? (
        <div
          ref={refPicker}
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '320px',
          }}>
          <img src={value} alt='gif' width='120' height='120' />
          {/* || <video width='120' height='140' controls src={imagesPreviewUrls} /> */}
          <ImCancelCircle
            onClick={removepickedgif}
            className='Preview__CloseBtn'
            color='white'
            size='25'
          />
        </div>
      ) : null}

      {/* ------------- */}
      {/* trying via use  js*/}
      <form onSubmit={submitMessage}>
        <textarea
          type='text'
          className='Input_chat'
          value={message}
          onChange={handleChange}
          placeholder='Write Message'
        />

        {/* emoji  buttons */}
        <div className='orders_btn'>
          <label className='UploadMediaBar__Input' htmlFor='media'>
            <GrEmoji size='15' />
            <input
              onChange={handleChange}
              onClick={triggerPicker}
              value='picker'
              multiple
              name='media'
              id='media'
            />
          </label>

          {/* trigger GIF */}
          <label className='UploadMediaBar__Input' htmlFor='gif'>
            <AiOutlineGif size='15' />
            <input
              onChange={triggerGif}
              onClick={triggerGif}
              className='sending_btn'
              value='gif'
              multiple
              name='gif'
              id='gif'
            />
          </label>

          {/* 🇪🇬 -------------------------------------------- ﷲ*/}
          {/* Trigger upload ﷲ 👁  */}
          <label className='UploadMediaBar__Input' htmlFor='Mediafile'>
            <AiOutlinePaperClip size='15' />
            <input
              type='file'
              // onClick={fileuploadedhandler}
              onChange={fileselectedhandler}
              className='sending_btn'
              multiple
              name='Mediafile'
              id='Mediafile'
            />
          </label>

          {/* 🇷🇴------- */}
          <label className='UploadMediaBar__Input' htmlFor='send'>
            <RiSendPlaneFill size='15' />
            <input
              onChange={handleChange}
              value='send'
              multiple
              name='send'
              id='send'
              type='submit'
              className='UploadMediaBar__Input'
            />
          </label>
        </div>
      </form>
    </div>
  );
};

const useClickOutPicker = (cb) => {
  const ref = useRef(null);
  useEffect(() => {
    const clickOut = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb(e);
        // alert('You clicked outside of me!');
      }
    };
    window.addEventListener('click', clickOut);
    return () => {
      window.removeEventListener('click', clickOut);
    };
  }, [cb]);
  return ref;
};

export default Chatroom;
