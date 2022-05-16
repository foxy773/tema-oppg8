import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP8XAs5ofv8Z_NhZP-zV0GFY7A1hmwnt4",
  authDomain: "torsk-tipping.firebaseapp.com",
  projectId: "torsk-tipping",
  storageBucket: "torsk-tipping.appspot.com",
  messagingSenderId: "1044587146437",
  appId: "1:1044587146437:web:b362d9b9416d995486d4ac"
};

// Initialize Firebase
initializeApp(firebaseConfig);


import App from './App.vue';

import store from '../views/store/store'
import routes from '../routes.js';

createApp(App)
	.use(store)
	.use(routes)
	.mount('#app');