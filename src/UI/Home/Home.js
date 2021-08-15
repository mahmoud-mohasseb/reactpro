import React, { useState } from 'react';
import './home.css';
import { MdLanguage } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import Mainfooter from '../Pages/mainfooter/mainfooter';
import { Logos } from '../../../src/Data/logos';
import { Information } from '../../Data/information';
import Card from '../components/Card';
import MarketCard from '../components/MarketCard';
import Model from '../model/Model';
import Language from '../Pages/languages/Language';
import { useTranslation } from 'react-i18next';
import Authform from '../../auth/Authform';
import Signup from '../../auth/Signup';
// import { ThemeContext } from '../../store/ThemeContext';

const Home = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme);
  // console.log(toggleTheme);

  const [t] = useTranslation();
  const history = useHistory();
  const [translate, settranslate] = useState(false);
  const [showform, setform] = useState(false);
  const [sign, setsign] = useState(false);

  const handleTranslate = () => {
    settranslate(true);
  };
  const CancelHandler = () => {
    settranslate(false);
    setform(false);
  };
  const handlesignin = () => {
    setform(true);
  };
  const Cancelhandlesignin = () => {
    setform(false);
  };

  const signinform = <Authform />;
  const signupform = <Signup />;
  const handlelogin = () => {
    setsign(!sign);
  };

  return (
    <div className='home'>
      {/* top */}
      <Model show={translate} modelClosed={CancelHandler}>
        <Language />
      </Model>
      {/* signin or signup */}
      <Model show={showform} modelClosed={Cancelhandlesignin}>
        <button
          onClick={handlelogin}
          className={sign ? 'signin_btn' : 'signup_btn'}
          type='submit'>
          {sign ? 'SignIn' : 'SignUp'}
        </button>
        {sign ? signupform : signinform}
      </Model>

      <div className='landingpage'>
        <div className='textshowbox'>
          <h1 onClick={() => console.log('hey')}>{t('we will be back')}</h1>
          <button
            className='button'
            onClick={() => {
              history.push({
                pathname: './Mainpage',
              });
            }}>
            {t('About')}
            {/* <Link to="/about">About</Link> */}
          </button>
        </div>
        {/* rightside */}
        <div className='language'>
          <Link to='/'>
            <MdLanguage onClick={handleTranslate} size='25px' color='white' />
          </Link>

          <button onClick={handlesignin} className='signin'>
            {t('signin')}
          </button>
        </div>
      </div>
      {/* middle  nested navigator*/}
      <div>
        <h1>Brands</h1>
        <div className='logos'>
          {Logos.map((items, index) => {
            return <Card key={index} title={items.title} src={items.img} />;
          })}
        </div>
      </div>
      {/* Market comes from db sample don't open without verification */}
      <div>
        <h1>Market Place</h1>
        <div className='bodymarket'>
          {Information.map((items, index) => {
            return (
              <MarketCard key={index} title={items.title} src={items.img}>
                {items.button}
              </MarketCard>
            );
          })}
        </div>
      </div>
      {/* main footer */}
      <Mainfooter />
    </div>
  );
};
export default Home;
