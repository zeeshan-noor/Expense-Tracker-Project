
 importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDKicJ6qB9ecf5RQVF1YFVNaVWqYInC1Sk",
    authDomain: "notificationpwa-ef7cc.firebaseapp.com",
    databaseURL: "https://notificationpwa-ef7cc.firebaseio.com",
    projectId: "notificationpwa-ef7cc",
    storageBucket: "notificationpwa-ef7cc.appspot.com",
    messagingSenderId: "871439985750",
    appId: "1:871439985750:web:a11415913638e30eba5ff7"
  };
firebase.initializeApp(firebaseConfig);
  firebase.messaging();