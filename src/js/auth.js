import { auth } from './firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore/lite';

const db = getFirestore();

export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user; 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Ошибка [${errorCode}]: ${errorMessage}`);
      throw error;
    });
};

export const registrationUpdateUserProfile = async (user, displayName, surname) => {
  try {
    await updateProfile(user, {
      displayName: displayName
    });

    await setDoc(doc(db, "users", user.uid), {
      displayName: displayName,
      surname: surname,
    });

    console.log('Профиль успешно обновлен');
  } catch (error) {
    console.error('Ошибка обновления профиля:', error);
    throw error; 
  }
};

export const loginUser = (email, password) => {
  document.querySelector(".notification-login").style.display = "none";
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Вход выполнен
      const user = userCredential.user;
      window.location.href = "/Fast-Work/";
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      console.error(`Ошибка [${errorCode}]:`);

      if(errorCode==="auth/invalid-email"){

      }

      switch (errorCode) {
        case "auth/invalid-email":
          document.querySelector(".notification-login").style.display = "block";
          break;
        
        case "auth/invalid-credential":
          document.querySelector(".notification-login").style.display = "block";
          break;
      
        default:
          console.log("Other error: ", errorCode);
          break;
      }
      
    });


};



