import {
  ref,
  db,
  set,
  uploadBytesResumable,
  getDownloadURL,
  Sref,
  push,
  storage,
} from "../firebase/firebaseConfig.js";

let fname = document.getElementById("fullname");
let fathername = document.getElementById("fathername");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let cnic = document.getElementById("cnic");
let fathercnic = document.getElementById("fathercnic");
let birth = document.getElementById("birth");
let form = document.getElementById("form");
let imgFile = document.getElementById("imgFile");
let upload = document.getElementById("upload");
let imgContainer = document.getElementById("imgContainer");

form.addEventListener("submit", handleSubmit);
upload.addEventListener("click", handleUploadImg);

let profileImg = null;
function handleUploadImg() {
  imgFile.onchange = (e) => {
    let files = e.target.files;
    profileImg = files[0];
    let imgReader = new FileReader();
    imgReader.readAsDataURL(files[0]);
    imgReader.onload = () => {
      imgContainer.innerHTML = `
            <img class='object-cover' src=${imgReader.result} alt='profile pic'>
            `;
    };
  };
}

function handleSubmit(e) {
  e.preventDefault();

  const storageRef = Sref(storage, `profileImages/${profileImg.name}`);
  const uploadTask = uploadBytesResumable(storageRef, profileImg);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log('uploading');
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);

        let registerationRef = ref(db,'registeration')
        let registerationKey = push(registerationRef)
        set(ref(db, `registerations/${registerationKey.key}`), {
          fname: fname.value,
          email: email.value,
          profileImg: downloadURL
        })
          .then((res) => {
            alert("data added successfully");
          })
          .catch((err) => {
            console.error("error", err);
          });
      });
    }
  );
}
