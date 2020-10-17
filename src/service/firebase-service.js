import firebase from "firebase";

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
  const messaging = firebase.messaging();

export function initNotification()
{
    Notification.requestPermission().then((permission)=>{
        console.log(permission);
        if(permission==="granted")
        {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN=>,");
                    console.log(currentToken);
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
            
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
             
              });
        }
    })
}