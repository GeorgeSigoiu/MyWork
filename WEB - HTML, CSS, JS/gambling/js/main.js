"use strict";

const date123 = new Date();

const account1 = {
  name: "George Sigoiu",
  username: "",
  password: "",
  email: "georgesigoiu1@gmail.com",
  phone: "",
  registrationDate: date123.toISOString(),
  avatar: "avatar1.jpg",
  // money:193400,
  hiloBestScore:0
};
const accounts = [account1];

let currentAccount;
//elements
////////////////////////////////////////////////////////
const modalOverlay=document.querySelector(".modal-overlay");
const modalWindowTitle=document.querySelector(".modal-text .modal-title");
const modalWindowScoreValue=document.querySelector(".modal-text #modal_paragraph1 #value_p1");
const modalWindowBestScoreValue=document.querySelector(".modal-text #modal_paragraph2 #value_p2");
// const modalWindowMoneyValue=document.querySelector(".modal-text #modal_paragraph3 #value_p3");
const modalText=document.querySelector(".modal-text");

const closeModal=function(){
  setTimeout(()=>{
    modalOverlay.classList.add('hidden');
    modalText.classList.add('hidden');
    modalText.style.top="0";
  },300);
  modalText.style.opacity="0";
  modalOverlay.style.opacity="0";
};

modalOverlay.addEventListener('click',closeModal);

const showModal=function(title,score,bestScore){
  modalOverlay.classList.remove("hidden");
  modalText.classList.remove("hidden");
  modalWindowScoreValue.textContent=score;
  modalWindowBestScoreValue.textContent=bestScore;
  modalWindowTitle.textContent=title;
  // modalWindowMoneyValue.textContent=money;
  setTimeout(()=>{
    modalText.style.top="50%";
    modalText.style.opacity="1";
    modalOverlay.style.opacity="1";
  },10);
};

//////////////////////////////////////////////////////////
const defaultAvatar = "default-avatar.jpg";

const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const registerBtn = document.getElementById("register-btn");
const backBtn = document.getElementById("back-btn");

const loginUI = document.querySelector(".full-content-login");
const registerUI = document.querySelector(".full-content-register");
const appUI = document.querySelector(".full-content-app");

const inputRegisterFirstName = document.getElementById("first-name");
const inputRegisterLastName = document.getElementById("last-name");
const inputRegisterAge = document.getElementById("age");
const inputRegisterEmail = document.getElementById("email");
const inputRegisterUsername = document.getElementById("username-register");
const inputRegisterPassword = document.getElementById("password-register");
const inputRegisterCheckbox = document.getElementById("privacy");

const navbar = document.getElementById("navigation");

const profileNavItem = document.getElementById("profile");
const depositNavItem = document.getElementById("deposit");
const settingsNavItem = document.getElementById("settings");
const dicesNavItem = document.getElementById("dices");
const hiloNavItem = document.getElementById("hilo");
const minesNavItem = document.getElementById("mines");

const profilePage = document.getElementById("content-profile");
const depositPage = document.getElementById("content-deposit");
const settingsPage = document.getElementById("content-settings");
const dicesPage = document.getElementById("content-dices");
const hiloPage = document.getElementById("content-hilo");
const minesPage = document.getElementById("content-mines");

const sections = [
  profileNavItem,
  depositNavItem,
  dicesNavItem,
  settingsNavItem,
  hiloNavItem,
  minesNavItem,
];
const sectionsContent = [
  profilePage,
  depositPage,
  dicesPage,
  settingsPage,
  hiloPage,
  minesPage,
];

//profile-content
const modifyBtn = document.getElementById("modify-info");
const inputProfileName = document.getElementById("profile-name");
const inputProfileEmail = document.getElementById("profile-email");
const inputProfilePhone = document.getElementById("profile-phone");
const registrationDate = document.querySelector(
  "#content-profile .profile-info .avatar .registration-date"
);
const avatarImg = document.getElementById("avatar-image");
const profileInfo = document.querySelector(
  "#content-profile .profile-info .informations .fields"
);
const profileInfoField = document.querySelectorAll(
  "#content-profile .profile-info .informations .fields .field"
);
const changePasswordBtn = document.getElementById("change-password");
const changePasswordBlock = document.getElementById("password-fields");
const changePasswordFields = document.querySelectorAll(
  "#content-profile .profile-info .informations .password-fields .password-field"
);
const currentPassword = document.getElementById("profile-current-password");
const newPassword = document.getElementById("profile-new-password");
const savePasswordBtn = document.getElementById("save-password");
const wrongImg = document.getElementById("wrong-img");
const alertPanel = document.getElementById("alert-password-changed");

//functions
///////////////////////////////////////////////
const changeCurrent = (image, page) => {
  sections.forEach((img, i) => {
    img.classList.remove("current");
    sectionsContent[i].style.opacity = 0;
    sectionsContent[i].style.zIndex = 1;
  });
  image.classList.add("current");
  page.style.opacity = 100;
  page.style.zIndex = 3;
};

const showProfileInfo = (acc) => {
  inputProfileName.value = acc.name;
  inputProfileEmail.value = acc.email;
  acc.phone !== "" && (inputProfilePhone.value = acc.phone);
  inputProfileEmail.style.width = `${acc.email.length * 8.5}px`;
  registrationDate.textContent = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(currentAccount.registrationDate));
  avatarImg.style.background = `url("../images/${
    currentAccount.avatar !== "" ? currentAccount.avatar : defaultAvatar
  }") no-repeat center center / cover`;
};
//events
///////////////////////////////////////////////

//login ui
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const username = inputUsername.value;
  const password = inputPassword.value;
  const acc = accounts.find((acc) => acc.username === username);
  if (username === acc?.username && password === acc?.password) {
    console.log("login");
    currentAccount = acc;
    showProfileInfo(currentAccount);
    profilePage.style.opacity = 100;
    // hideLoginUI;
    loginUI.style.transform = "translateY(-100vh)";
    // showAppUI;
    appUI.style.transform = "translateY(-200vh)";
    profileInfo.classList.add("use-slowshow");
    setTimeout(function () {
      profileInfoField.forEach((el) => (el.style.opacity = 100));
    }, 800);
    setTimeout(function () {
      appUI.style.transition = "all 0s";
    }, 1000);
  } else {
    inputUsername.value = inputPassword.value = "";
    alert("Account does not exist! Try again.");
  }
});

btnRegister.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("register");
  // hideLoginUI;
  loginUI.style.transform = "translateX(-100vw)";
  // showRegisterUI;
  registerUI.style.transform = "translate3d(0,-100vh,0)";
});

//register ui
backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("back to login");
  //hide register ui
  registerUI.style.transform = "translate3d(100vw,-100vh,0)";
  //shiw login ui
  loginUI.style.transform = "translateX(0)";
});

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let ok =
    inputRegisterFirstName.value !== "" &&
    inputRegisterLastName.value !== "" &&
    inputRegisterAge.value !== "" &&
    inputRegisterEmail.value !== "" &&
    inputRegisterUsername.value !== "" &&
    inputRegisterPassword.value !== "";
  if (!inputRegisterCheckbox.checked) {
    alert("You have to agree the privacy and policy!");
  } else if (Number(inputRegisterAge.value) < 18) {
    alert("You must to be at least 18 yo!");
  } else if (ok) {
    const name = `${inputRegisterFirstName.value} ${inputRegisterLastName.value}`;
    const username = inputRegisterUsername.value;
    const password = inputRegisterPassword.value;
    const email = inputRegisterEmail.value;
    const account = {
      name,
      username,
      password,
      email,
    };
    accounts.push(account);
    console.log("register succesfully");
    // hideRegisterUI();
    registerUI.style.transform = "translate3d(100vw,-100vh,0)";
    // showLoginUI();
    loginUI.style.transform = "translateX(0)";

    inputRegisterFirstName.value = "";
    inputRegisterLastName.value = "";
    inputRegisterAge.value = "";
    inputRegisterEmail.value = "";
    inputRegisterUsername.value = "";
    inputRegisterPassword.value = "";
    inputRegisterCheckbox.checked = false;
  } else {
    alert("You have to complete all fields!");
  }
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });

//app ui
navbar.addEventListener("mouseenter", function () {
  navbar.style.width = "150px";
});
navbar.addEventListener("mouseleave", function () {
  navbar.style.width = "70px";
});

sections.forEach((curr, i) => {
  curr.addEventListener("click", function () {
    changeCurrent(sections[i], sectionsContent[i]);
  });
});

//profile content
modifyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const mode = modifyBtn.textContent === "Modify info";
  const allinputs = document.querySelectorAll(
    ".content .content-page .profile-info .informations .fields input"
  );
  if (mode) {
    inputProfileName.removeAttribute("readonly");
    inputProfilePhone.removeAttribute("readonly");
    inputProfileEmail.removeAttribute("readonly");
    for (const input of allinputs) {
      input.style.background = "white";
      input.style.color = "black";
    }
    modifyBtn.textContent = "Save";
  } else {
    inputProfileName.readOnly = true;
    inputProfilePhone.readOnly = true;
    inputProfileEmail.readOnly = true;
    modifyBtn.textContent = "Modify info";
    const name = inputProfileName.value;
    const email = inputProfileEmail.value;
    const phone = inputProfilePhone.value;
    for (const input of allinputs) {
      input.style.background = "transparent";
      input.style.color = "white";
    }
    currentAccount.name = name;
    currentAccount.email = email;
    currentAccount.phone = phone;
    showProfileInfo(currentAccount);
  }
});

changePasswordBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (changePasswordBlock.style.display === "block") {
    changePasswordFields.forEach((el) => (el.style.opacity = "0"));
    setTimeout(function () {
      changePasswordBlock.style.display = "none";
    }, 800);
    newPassword.value = currentPassword.value = "";
  } else {
    changePasswordBlock.style.display = "block";
    setTimeout(function () {
      changePasswordFields.forEach((el) => (el.style.opacity = "1"));
    }, 800);
  }
});

savePasswordBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentAccount.password === currentPassword.value) {
    wrongImg.style.opacity = "0";
    currentPassword.style.border = "1px transparent solid";
    if (newPassword.value !== "") {
      currentAccount.password = newPassword.value;
      newPassword.style.border = "1px transparent solid";
      changePasswordFields.forEach((el) => (el.style.opacity = "0"));
      alertPanel.style.opacity = "1";
      setTimeout(function () {
        alertPanel.style.opacity = "0";
      }, 1000);
      setTimeout(function () {
        changePasswordBlock.style.display = "none";
        newPassword.value = currentPassword.value = "";
      }, 2000);
    } else {
      newPassword.style.border = "1px red solid";
    }
  } else {
    wrongImg.style.opacity = "1";
    currentPassword.style.border = "1px red solid";
  }
});

//content-hilo
const startButtonHilo = document.querySelector(
  "#content-hilo .start-container_hilo .start"
);
const startButtonHiloLettersStart = document.querySelector(
  "#content-hilo .start-container_hilo .start .letters-start"
);
const startButtonHiloLettersReset = document.querySelector(
  "#content-hilo .start-container_hilo .start .letters-reset"
);
const buttonUpHilo = document.querySelector(
  "#content-hilo .current-card-container .buttons .button-up i"
);
const buttonDownHilo = document.querySelector(
  "#content-hilo .current-card-container .buttons .button-down i"
);
const movingCardImg = document.querySelector(
  "#content-hilo .current-card-container .current-card #card_position_absolute"
);
const curentCardImg = document.querySelector(
  "#content-hilo .current-card-container .current-card #current__card"
);
const cardsLeftCounter = document.querySelector(
  "#content-hilo .content .current-card-container .cards-left_counter"
);
const prevCardsContainer = document.querySelector(
  "#content-hilo .content .prev-cards-container .prev-cards"
);
const scoreHiloDiv = document.querySelector(
  "#content-hilo .content .score_hilo .points_hilo"
);
const balanceHilo=document.querySelector("#content-hilo .content .start-container_hilo .balance .coins");
const slideRight=document.querySelector("#content-hilo .content .prev-cards-container .button-right");
const slideLeft=document.querySelector("#content-hilo .content .prev-cards-container .button-left");

let counterCardsLeft = 52;
let firstTimeClicked = 1;
let currentCardHilo, prevCardHilo;
let scoreHiloGame=0;
let allPlayingCardsHilo =[];
let extractedCards=[];
let zIndexCard=0;
let translateHiloCards=0;

const buttonStartHiloClickEvent = function (e) {
  const bodyWidth = document.body.clientWidth;
  const error = (123 * bodyWidth) / 1295;
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  let ripples = document.createElement("span");
  ripples.style.left = x - error + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);
  setTimeout(() => {
    ripples.remove();
  }, 1000);
};
startButtonHilo.addEventListener("click", buttonStartHiloClickEvent);

const getOneCardFromDeck = function () {
  const max = allPlayingCardsHilo.length;
  const randNum = Math.floor(Math.random() * max);
  const card = allPlayingCardsHilo.at(randNum);
  allPlayingCardsHilo.splice(randNum, 1);
  return card;
};
////////////////////////////////////////////////////////////////////
const startHiloGame = function () {
  const extractedCard = getOneCardFromDeck();
  extractedCards.push(extractedCard);
  movingCardImg.classList.add("move-to-current-card");
  setTimeout(function () {
    movingCardImg.setAttribute("src", extractedCard.src);
  }, 500);
  counterCardsLeft=51;
  cardsLeftCounter.textContent = counterCardsLeft;
  setTimeout(function(){
    movingCardImg.src="./images/cards/backcard.png";
    movingCardImg.classList.remove("move-to-current-card");
    curentCardImg.src=extractedCard.src;
  },1010);
  buttonDownHilo.classList.remove("button-disabled");
  buttonUpHilo.classList.remove("button-disabled");
  startButtonHiloLettersStart.classList.add("letters_animation_start");
  startButtonHiloLettersReset.classList.add("letters_animation_reset");
  startButtonHiloLettersStart.classList.remove("letters_animation_start_reverse");
  startButtonHiloLettersReset.classList.remove("letters_animation_reset_reverse");
  startButtonHilo.removeEventListener("click", startHiloGame);
  startButtonHilo.addEventListener("click", resetHiloGame);
  scoreHiloGame=0;
  scoreHiloDiv.value=0;
};
///////////////////
const resetHiloGame = function () {
  initializeHilo();
  zIndexCard=0;
  startButtonHiloLettersStart.classList.add("letters_animation_start_reverse");
  startButtonHiloLettersReset.classList.add("letters_animation_reset_reverse");
  const insertedCards=document.querySelectorAll("#content-hilo .content .prev-cards-container .prev-cards .card");
  insertedCards.forEach(el=>{
    el.classList.add("prev-card_show-out");
    el.classList.remove("prev-card_show-in");
  });
};
startButtonHilo.addEventListener("click", startHiloGame);

///////////////////////////////////////////////////////////////////////////////
// const displayBalanceHilo=function(){
//   balanceHilo.value=Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' }).format(currentAccount.money);
//   balanceHilo.style.width=`${String(balanceHilo.value).length*12}px`;
// };

const initializeHilo = function () {
  console.log("Initialize HILO");
  // displayBalanceHilo();
  zIndexCard=0;
  setTimeout(()=>{prevCardsContainer.innerHTML='';},1000);
  scoreHiloDiv.value = "";
  movingCardImg.classList.remove("move-to-current-card");
  movingCardImg.setAttribute("src", "./images/cards/backcard.png");
  curentCardImg.setAttribute("src","./images/cards/transparent.png");
  counterCardsLeft = 52;
  cardsLeftCounter.textContent = counterCardsLeft;
  buttonDownHilo.classList.add("button-disabled");
  buttonUpHilo.classList.add("button-disabled");
  extractedCards=[];
  allPlayingCardsHilo=[];
  for (let sets = 0; sets < 2; sets++) {
    for (let num = 0; num < 13; num++) {
      const card = {
        value: 14 - num,
        src: `./images/cards/card-${13 * sets + num}.png`,
      };
      allPlayingCardsHilo.push(card);
    }
  }
  startButtonHiloLettersStart.classList.remove("letters_animation_start");
  startButtonHiloLettersReset.classList.remove("letters_animation_reset");
  startButtonHilo.removeEventListener("click", resetHiloGame);
  startButtonHilo.addEventListener("click", startHiloGame);
  scoreHiloDiv.value="";
  extractedCards=[];
};

//////////////////////////////////////////////////////////////////////////////////

const showPrevCard=function(card){
  prevCardsContainer.insertAdjacentHTML("afterbegin",`<div class="card" style="z-index:${zIndexCard}"><img src="${card.src}" alt="" /></div>`);
  const insertedCard=document.querySelector("#content-hilo .content .prev-cards-container .prev-cards .card");
  insertedCard.classList.add("prev-card_show-in");
  setTimeout(()=>{
    insertedCard.classList.remove("prev-card_show-in");
  },1000);
  zIndexCard++;
};
const extractAndMoveCard=function(){
  const extractedCard = getOneCardFromDeck();
  let currentValue=extractedCard.value;
  let lastCard=extractedCards.pop();
  let prevValue=lastCard.value;
  extractedCards.push(extractedCard);
  movingCardImg.classList.add("move-to-current-card");
  setTimeout(function () {
    movingCardImg.setAttribute("src", extractedCard.src);
  }, 500);
  setTimeout(function(){
    movingCardImg.src="./images/cards/backcard.png";
    movingCardImg.classList.remove("move-to-current-card");
    curentCardImg.src=extractedCard.src;
  },1010);
  counterCardsLeft--;
  cardsLeftCounter.textContent = counterCardsLeft;
  return {currentValue,prevValue,lastCard};
};
const updateScoreHilo=function(){
  scoreHiloGame++;
  scoreHiloDiv.value=scoreHiloGame;
  buttonUpHilo.classList.add("button-disabled");
  buttonDownHilo.classList.add("button-disabled");
  setTimeout(function () {
    buttonUpHilo.classList.remove("button-disabled");
    buttonDownHilo.classList.remove("button-disabled");
  }, 1000);
};
const gameOverHilo=function(){
  buttonUpHilo.classList.add("button-disabled");
  buttonDownHilo.classList.add("button-disabled");
  if(scoreHiloGame>currentAccount.hiloBestScore)currentAccount.hiloBestScore=scoreHiloGame;
  showModal("Game over!",scoreHiloGame,currentAccount.hiloBestScore);
};
const buttonUpHiloEvent = function () {
  const {currentValue,prevValue,lastCard}=extractAndMoveCard();
  showPrevCard(lastCard);
  if(currentValue>=prevValue){
    updateScoreHilo();
  }else{
    gameOverHilo();
  }
};
buttonUpHilo.addEventListener("click", buttonUpHiloEvent);
const buttonDownHiloClickEvent = function () {
  const {currentValue,prevValue,lastCard}=extractAndMoveCard();
  showPrevCard(lastCard);
  if(currentValue<=prevValue){
    updateScoreHilo();
  }else{
    gameOverHilo();
  }
};
buttonDownHilo.addEventListener("click", buttonDownHiloClickEvent);
/////////////////////////////////////////////////////////////////////////////////////
const getAllCardsHilo=function(){
  const insertedCards=document.querySelectorAll("#content-hilo .content .prev-cards-container .prev-cards .card");
  return [...insertedCards];
};
const slideCards=function(){
  const cards=getAllCardsHilo();
   cards.forEach(el=>{
      el.classList.remove("prev-card_show-in");
      el.style.transform=`translateX(${translateHiloCards}px)`;
    });
  console.log("click left");
};

slideLeft.addEventListener('click',function(){
  translateHiloCards+=200;
  slideCards();
});

slideRight.addEventListener('click',function(){
  translateHiloCards-=200;
  slideCards();
});
///navbar
hiloNavItem.addEventListener("click", initializeHilo);
