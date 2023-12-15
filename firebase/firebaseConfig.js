  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getStorage,uploadBytesResumable,getDownloadURL, ref as Sref  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
  import { set,get,ref, getDatabase,push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCrjEyG7SZRPDj9eMj_n-dSrSVLAgCMPj0",
    authDomain: "registeration-e7c6c.firebaseapp.com",
    databaseURL: "https://registeration-e7c6c-default-rtdb.firebaseio.com",
    projectId: "registeration-e7c6c",
    storageBucket: "registeration-e7c6c.appspot.com",
    messagingSenderId: "793014019284",
    appId: "1:793014019284:web:cb49dd81a1c5241df60741"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage()
  const db = getDatabase()

  export {
    storage,ref,db,set,get,getDownloadURL,uploadBytesResumable,Sref,push
  }