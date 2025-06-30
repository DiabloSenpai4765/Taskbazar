// frontend/firebase.js
if (window.firebaseConfig) {
  firebase.initializeApp(window.firebaseConfig);
} else {
  console.error('Firebase configuration not found. Ensure /config.js is loaded.');
}
