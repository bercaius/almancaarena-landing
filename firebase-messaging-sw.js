// Almanca Arena Firebase Messaging Service Worker kanka!
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBgP9Cr_XuIdcCx7RZykQNP9b93YuP1MYo",
    authDomain: "almanca-arena.firebaseapp.com",
    projectId: "almanca-arena",
    storageBucket: "almanca-arena.firebasestorage.app",
    messagingSenderId: "274345916793",
    appId: "1:274345916793:android:e69ae7186ab295603817a8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Arka planda gelen push bildirimlerini yakala
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Arka plan mesajı alındı kanka:', payload);
    
    const notificationTitle = payload.notification.title || 'Almanca Arena';
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/assets/app_logo.png',
        badge: '/assets/app_logo.png',
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
