import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNGgmVpfNVUZGZqpxmk30Y4yPBYsMmY_g",
  authDomain: "tiendaonline-be1eb.firebaseapp.com",
  projectId: "tiendaonline-be1eb",
  storageBucket: "tiendaonline-be1eb.appspot.com",
  messagingSenderId: "75386356938",
  appId: "1:75386356938:web:aa2886e2df8f0c6d092033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
