import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { BrowserRouter } from 'react-router-dom';

// redux

import AuthReducer from './store/Reducer/Auth';
import GoogleAuthReducer from './store/Reducer/GoogleAuth';
import GifReducer from './store/Reducer/Gif';

import { ThemeProvider } from './store/ThemeContext';
import { FormProvider } from './store/FormContext';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  Auth: AuthReducer,
  GoogleAuth: GoogleAuthReducer,
  GIF: GifReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de', 'ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      // loadPath: 'assets/locales/{{lng}}/translation.json',
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
  });

ReactDOM.render(
  <React.StrictMode>
    {/* special for theming */}
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
