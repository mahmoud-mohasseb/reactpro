import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import './language.css';

const languages = [
  {
    code: 'de',
    name: 'Deutsh',
    country_code: 'de',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'eng',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'eg',
  },
];
const Language = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  console.log(currentLanguageCode);
  // variable equal anomynous function to find the language code
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    let root = document.documentElement;
    // in case you have more than one langauge you can use switch function
    if (document.body.dir === 'rtl') {
      root.style.setProperty('--font-family', 'Tajawal');
      root.style.setProperty('--language-margin-left', '800px');
      root.style.setProperty('--language-margin-top', '40px');
    } else {
      root.style.setProperty('--font-family', 'Montserrat');
      root.style.setProperty('--language-margin-left', '850px');
      root.style.setProperty('--language-margin-top', '20px');
    }
    // document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <div className='change'>
      {languages.map(({ code, name }) => (
        <button
          key={code}
          className='button'
          onClick={() => i18next.changeLanguage(code)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Language;
