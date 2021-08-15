import React, { useEffect, useState } from 'react';
import './Chat.css';
import ContactCard from '../../components/ContactCard';
import { AiFillDelete } from 'react-icons/ai';
// import { FcSearch } from 'react-icons/fc';
import Chatroom from './Chatroom';
import Sidebar from './sidebar';
// import { AiOutlinePaperClip } from 'react-icons/ai';

import db from '../../../firebase';

import firebase from 'firebase';
import axios from 'axios';

// import firebase from 'firebase';
const Chat = () => {
  const [Messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://socialnetwork-6c17c-default-rtdb.europe-west1.firebasedatabase.app/Messages.json',
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  useEffect(() => {
    db.collection('rooms')
      .doc('roomId')
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data())),
      );
    // .onSnapshot((snapshot) =>
    //   setMessages(snapshot.docs.map((doc) => doc.data().message)),
    // );
  }, []);

  const addMessages = (newmessage) => {
    setMessages((prevMessages) => {
      db.collection('rooms')
        .doc('roomId')
        .collection('messages')
        .add({
          message: [newmessage],
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      console.log([...prevMessages]);
      return [...prevMessages, newmessage];
    });
  };

  const deleteNote = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((noteItem, index) => {
        return index !== id;
      }),
    );
  };

  const MessagesIN = () => {
    return (
      <div className='Conversation_Room'>
        {Messages.map((MessageItem, index) => (
          <div className='chat_chat' key={index} id={index}>
            {typeof MessageItem.message === 'object' && (
              <h1>{MessageItem.message}</h1>
            )}

            {typeof MessageItem.message === 'string' && (
              <img
                src={MessageItem.message}
                alt='appear'
                height='100'
                width='100'
              />
            )}

            <span className='message__timestamp'>
              {new Date(MessageItem.timestamp?.toDate()).toUTCString()}
            </span>
            <AiFillDelete onClick={() => deleteNote(index)} />
          </div>
        ))}
      </div>
    );
    // return (
    //   <div className='Conversation_Room'>
    //     {Messages.map((element, index) => {
    //       if (typeof element.message === 'string') {
    //         <img
    //           src={element.message}
    //           key={index}
    //           alt='img'
    //           height='100'
    //           width='100'
    //         />;
    //         <AiFillDelete onClick={() => deleteNote(index)} />;
    //       } else {
    //         <h1 key={index}>{element.message}</h1>;
    //         <AiFillDelete onClick={() => deleteNote(index)} />;
    //       }
    //     })}
    //   </div>
    // );
  };

  return (
    <div className='Container'>
      <Sidebar />
      <div className='Chat_cores'>
        <div className='Chat_core_hearder'>
          <ContactCard />
        </div>
        <MessagesIN />
        <div className='Input_chat'>
          <Chatroom onAdd={addMessages} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
