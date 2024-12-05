import { UpdateUserProfile } from "./auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore/lite";

const profileUpdateForm = document.querySelector(".update-profile-form");











  const getUserId = async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        if (user) {
          resolve(user.uid);
        } else {
          reject("No user is signed in");
        }
      });
    });
  };
  
  const db = getFirestore();
  const auth = getAuth();
  


  const fetchData = async () => {
    try {
      const userId = await getUserId();
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log(userData);
        const wrapperProfileCard = document.querySelector(".profile-card-js");
        if (wrapperProfileCard) {
          wrapperProfileCard.innerHTML = `
         
          
                <img class="profile-user-photo-big" src="${userData.photoURL || 'img/User-photo-big.png'}" alt="" width="100%" />
                <ul class="edit-button-profile">
                  <li><button class="edit-button changes-button-js"><img src="./img/paint.svg" alt=""></button></li>
                  <li><button class="edit-button"><img src="./img/love.svg" alt=""> Збережене</button></li>
                  <li><button class="edit-button"><img src="./img/people.svg" alt=""> Підписка</button></li>
                </ul>
                <div class="profile-name-wrapper">
                  <h1 class="profile-user-name">${userData.displayName} ${userData.surname}</h1>
                  <div class="wrapper-star">
                    <span class="profile-star">5.0</span>
                    <span class="profile-star-number">(12)</span>
                  </div>
                </div>
                <h3 class="profile-user-location">${userData.country}.${userData.city}</h3>
                <ul class="profile-user-action">
                  <button class="profile-button-action profile-button-action-share">Поділитись</button>
                  <button class="profile-button-action profile-button-action-blocked">Заблокувати</button>
                </ul>
                <h2 class="profile-user-desc-title">Про мене:</h2>
                <p class="profile-user-desc">
                  ${userData.message || 'Привіт! Я Богдан, професійний будівельник з понад 10-річним досвідом у цій сфері...'}
                </p>
                <ul class="profile-orders-list">
                  <li class="profile-orders-item">Завершених замовлень: <span>${userData.completedOrders || 0}</span></li>
                  <li class="profile-orders-item">Створених замовлень: <span>${userData.createdOrders || 0}</span></li>
                </ul>
                <div class="contact">
                  <div>
                    <h2 class="contact-title">Контакти</h2>
                    <a class="contact-telephone" href="tel:${userData.tel}">${userData.tel}</a>
                  </div>
                  <ul class="contact-list">
                    <li class="contact-list-item"><img src="img/telegram.png" alt="" /></li>
                    <li class="contact-list-item"><img src="img/viber.png" alt="" /></li>
                    <li class="contact-list-item"><img src="img/whatsApp.png" alt="" /></li>
                  </ul>
                </div>
          
          `;  

          
          const editButton = document.querySelector(".changes-button-js");
          console.log(editButton);
          editButton.addEventListener("click", () => {
            // wrapperUpdateProfile.style.display = "block";
            modalFetch()

          });

          
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();







  const modalFetch = async () => {
    try {
      const userId = await getUserId();
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      
    
        const userData = docSnap.data();
        console.log(userData);
        const wrapperProfileCard = document.querySelector(".wraper-update-profil");
        if (wrapperProfileCard) {
          wrapperProfileCard.innerHTML = 
  `    <div class="wraper-update-profile conteiner">
  <div class="update-profile-exit-list">
    <button class="update-profile-back">
      <img src="./img/arrow-right-main.svg" alt="" /><span
        class="update-profile-exit-back-title"
        >Назад</span
      >
    </button>
    <button class="update-profile-exit">
      <img src="./img/burg-menu-clouse.svg" alt="" />
    </button>
  </div>

  <h2 class="update-profile-title">Редагування акаунту</h2>
  <form action="" class="update-profile-form">
    <div class="update-profile-user-avatar-wraper">
      <img
        class="update-profile-user-avatar"
        src="./img/profile-img.png"
        alt=""
      />
      <div class="file-upload-wrapper">
        <button class="file-upload-btn">Змінити фото</button>
        <input
          id="profileImg"
          class="update-profile-user-avatar-js"
          type="file"
          alt="Змінити фото"
        />
      </div>
    </div>
    <div class="update-profile-input-name-list">
      <label class="update-profile-label-name" for="name">Імʼя</label>
      <input
        class="update-profile-input-name"
        type="text"
        id="name"
        placeholder="Імʼя"
        value="${userData.displayName}"
      />
    </div>
    <div class="update-profile-input-surname-list">
      <label class="update-profile-label-surname" for="surname"
        >Прізвище</label
      >
      <input
        class="update-profile-input-surname"
        type="text"
        id="surname"
        placeholder="Прізвище"
           value="${userData.surname}"
      />
    </div>
    <div class="update-profile-location-list">
      <div class="update-profile-location-list-wraper">
        <input
          class="update-profile-location-country update-profile-location-country__placeholder"
          type="text"
          id="country"
          placeholder="Країна"
          value="${userData.country}"
        />
        <input
          class="update-profile-location-city update-profile-location-city__placeholder"
          type="text"
          id="city"
          placeholder="Місто"
          value="${userData.city}  "
          
        />
      </div>
      <input
        class="update-profile-location-street update-profile-location-street__placeholder"
        type="text"
        id="street"
        placeholder="Вулиця"
          value="${userData.street} "

      />
    </div>
    <p class="update-profile-location-desk">
      Ваша адреса буде прихована від інших користувачів. Вона потрібна лише
      для показу заявок поруч із вами
    </p>
    <button class="update-profile-delete-profile">
      <img src="./img/delete-icon.svg" alt="" />
      <span class="update-profile-delete-text">Видалити акаунт</span>
    </button>
    <p class="update-profile-titile-desk">Про мене:</p>
    <textarea
      class="update-profile-desk-area"
      id="message"
      name="message"
      rows="4"
      placeholder="Про мене"
     placeholder="Про мене">${userData.message || ''}


    </textarea>
    <p class="update-profile-titile-contact">Контакти</p>
    <div class="update-profile-label-tel-list">
      <label class="update-profile-label-tel" for="tel"
        >Номер телефону</label
      >
      <input
        class="update-profile-input-tel"
        type="tel"
        id="tel"
        placeholder="Номер телефону"
          value="${userData.tel} "

      />
    </div>
    <div class="update-profile-input-massage-list">
      <div class="update-profile-input-viber-list">
        <input type="checkbox" id="checkbox1" class="custom-checkbox" 
        
        />
        <label for="checkbox1" class="checkbox-sort">
          <img src="./img/viber.png" alt=""
        /></label>
      </div>

      <div class="update-profile-input-viber-list checkbox-container">
        <input type="checkbox" id="checkbox2" class="custom-checkbox" />
        <label for="checkbox2" class="checkbox-sort">
          <img src="./img/whatsApp.png" alt=""
        /></label>
      </div>
    </div>

    <div class="update-profile-label-tel-list">
      <label class="update-profile-label-two-tel" for="second-tel"
        >Додатковий номер</label
      >
      <input
        class="update-profile-input-two-tel"
        type="text"
        id="secondTel"
        placeholder="Номер"
          value="${userData.secondTel} "

      />
    </div>
    <div class="update-profile-label-telegram-list">
      <label class="update-profile-label-telegram" for="telegram"
        ><img src="./img/telegram.png" alt="" />Telegram</label
      >
      <input
        class="update-profile-input-telegram"
        type="text"
        id="telegram"
        placeholder="@username"
          value="${userData.telegram} "

      />
    </div>
    <div class="update-profile-submit-wraper">
      <input
        class="update-profile-submit"
        type="submit"
        value=" Зберегти зміни"
      />
    </div>
  </form>
</div>`;  

          


          const editButton = document.querySelector(".changes-button-js");
          editButton.addEventListener("click", () => {
            wrapperUpdateProfile.style.display = "block";
          });
          const closeButtons = document.querySelectorAll(
            ".update-profile-back, .update-profile-exit"
          );
          const wrapperUpdateProfile = document.querySelector(".wraper-update-profile");
          closeButtons.forEach((button) => {
            button.addEventListener("click", () => {
              wrapperUpdateProfile.style.display = "none";
            });
          });


          document
  .querySelector(".update-profile-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const profileData = {
          displayName: e.target.name.value,
          surname: e.target.surname.value,
          country: e.target.country.value,
          city: e.target.city.value,
          street: e.target.street.value,
          message: e.target.message.value,
          tel: e.target.tel.value,
          secondTel: e.target.secondTel.value,
          telegram: e.target.telegram.value,
          checkboxes: [e.target.checkbox1.checked, e.target.checkbox2.checked],
        };

        UpdateUserProfile(user, profileData);
      } else {
        console.error("No user is logged in.");
      }
    });
  });

          
        
      } 
    } catch (error) {
      console.error(error);
    }
  };












