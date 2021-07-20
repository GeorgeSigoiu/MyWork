'use strict';

const date123 = new Date();

const account1 = {
  name: 'George Sigoiu',
  username: '1',
  password: '1',
  email: 'georgesigoiu1@gmail.com',
  phone: '',
  registrationDate: date123.toISOString(),
  avatar: 'avatar1.jpg'
};
const accounts = [account1];

let currentAccount;
//elements
////////////////////////////////////////////////////////
const defaultAvatar = 'default-avatar.jpg';

const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');
const registerBtn = document.getElementById("register-btn");
const backBtn = document.getElementById('back-btn');

const loginUI = document.querySelector('.full-content-login');
const registerUI = document.querySelector('.full-content-register');
const appUI = document.querySelector('.full-content-app');

const inputRegisterFirstName = document.getElementById("first-name");
const inputRegisterLastName = document.getElementById("last-name");
const inputRegisterAge = document.getElementById("age");
const inputRegisterEmail = document.getElementById("email");
const inputRegisterUsername = document.getElementById("username-register");
const inputRegisterPassword = document.getElementById("password-register");
const inputRegisterCheckbox = document.getElementById("privacy");

const navbar = document.getElementById('navigation');

const profileImg = document.getElementById('profile');
const depositImg = document.getElementById('deposit');
const settingsImg = document.getElementById('settings');
const dicesImg = document.getElementById('dices');
const hiloImg = document.getElementById('hilo');
const minesImg = document.getElementById('mines');

const profilePage = document.getElementById('content-profile');
const depositPage = document.getElementById('content-deposit');
const settingsPage = document.getElementById('content-settings');
const dicesPage = document.getElementById('content-dices');
const hiloPage = document.getElementById('content-hilo');
const minesPage = document.getElementById('content-mines');

const imageBtns = [profileImg, depositImg, dicesImg, settingsImg, hiloImg, minesImg];
const imagePages = [profilePage, depositPage, dicesPage, settingsPage, hiloPage, minesPage];

//profile-content
const modifyBtn = document.getElementById('modify-info');
const inputProfileName = document.getElementById('profile-name');
const inputProfileEmail = document.getElementById('profile-email');
const inputProfilePhone = document.getElementById('profile-phone');
const registrationDate = document.querySelector('#content-profile .profile-info .avatar .registration-date');
const avatarImg = document.getElementById('avatar-image');
const profileInfo = document.querySelector('#content-profile .profile-info .informations .fields');
const profileInfoField = document.querySelectorAll('#content-profile .profile-info .informations .fields .field');
const changePasswordBtn = document.getElementById('change-password');
const changePasswordBlock = document.getElementById('password-fields');
const changePasswordFields = document.querySelectorAll('#content-profile .profile-info .informations .password-fields .password-field');
const currentPassword = document.getElementById('profile-current-password');
const newPassword = document.getElementById('profile-new-password');
const savePasswordBtn = document.getElementById('save-password');
const wrongImg = document.getElementById('wrong-img');
const alertPanel = document.getElementById('alert-password-changed');

//functions
///////////////////////////////////////////////
const changeCurrent = (image, page) => {
  imageBtns.forEach((img, i) => {
    img.classList.remove('current');
    imagePages[i].style.opacity = 0;
    imagePages[i].style.zIndex = 1;
  });
  image.classList.add("current");
  page.style.opacity = 100;
  page.style.zIndex = 3;
};

const showProfileInfo = (acc) => {
  inputProfileName.value = acc.name;
  inputProfileEmail.value = acc.email;
  acc.phone !== '' && (inputProfilePhone.value = acc.phone);
  inputProfileEmail.style.width = `${acc.email.length * 8.5}px`;
  registrationDate.textContent = Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(currentAccount.registrationDate));
  avatarImg.style.background = `url("../images/${currentAccount.avatar !== '' ? currentAccount.avatar : defaultAvatar}") no-repeat center center / cover`;
};
//events
///////////////////////////////////////////////

//login ui
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const username = inputUsername.value;
  const password = inputPassword.value;
  const acc = accounts.find(acc => acc.username === username);
  if (username === acc?.username && password === acc?.password) {
    console.log('login');
    currentAccount = acc;
    showProfileInfo(currentAccount);
    profilePage.style.opacity = 100;
    // hideLoginUI;
    loginUI.style.transform = 'translateY(-100vh)';
    // showAppUI;
    appUI.style.transform = 'translateY(-200vh)';
    profileInfo.classList.add('use-slowshow');
    setTimeout(function () {
      profileInfoField.forEach((el) => el.style.opacity = 100);
    }, 800);

  }
  else {
    inputUsername.value = inputPassword.value = '';
    alert("Account does not exist! Try again.");
  }
});

btnRegister.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('register')
  // hideLoginUI;
  loginUI.style.transform = 'translateX(-100vw)';
  // showRegisterUI;
  registerUI.style.transform = 'translate3d(0,-100vh,0)';
});

//register ui
backBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('back to login');
  //hide register ui
  registerUI.style.transform = 'translate3d(100vw,-100vh,0)';
  //shiw login ui
  loginUI.style.transform = 'translateX(0)';
});

registerBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let ok = inputRegisterFirstName.value !== '' && inputRegisterLastName.value !== '' && inputRegisterAge.value !== '' && inputRegisterEmail.value !== '' && inputRegisterUsername.value !== '' && inputRegisterPassword.value !== '';
  if (!inputRegisterCheckbox.checked) {
    alert('You have to agree the privacy and policy!');
  } else if (Number(inputRegisterAge.value) < 18) {
    alert('You must to be at least 18 yo!');
  } else if (ok) {
    const name = `${inputRegisterFirstName.value} ${inputRegisterLastName.value}`;
    const username = inputRegisterUsername.value;
    const password = inputRegisterPassword.value;
    const email = inputRegisterEmail.value;
    const account = {
      name, username, password, email
    };
    accounts.push(account);
    console.log("register succesfully");
    // hideRegisterUI();
    registerUI.style.transform = 'translate3d(100vw,-100vh,0)';
    // showLoginUI();
    loginUI.style.transform = 'translateX(0)';

    inputRegisterFirstName.value = '';
    inputRegisterLastName.value = '';
    inputRegisterAge.value = '';
    inputRegisterEmail.value = '';
    inputRegisterUsername.value = '';
    inputRegisterPassword.value = '';
    inputRegisterCheckbox.checked = false;
  }
  else {
    alert("You have to complete all fields!");
  }
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });

//app ui
navbar.addEventListener('mouseenter', function () {
  navbar.style.width = '150px';
});
navbar.addEventListener('mouseleave', function () {
  navbar.style.width = '70px';
});

imageBtns.forEach((curr, i) => {
  curr.addEventListener('click', function () {
    changeCurrent(imageBtns[i], imagePages[i]);
  })
});

//profile content
modifyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const mode = modifyBtn.textContent === 'Modify info';
  const allinputs = document.querySelectorAll('.content .content-page .profile-info .informations .fields input');
  if (mode) {
    inputProfileName.removeAttribute('readonly');
    inputProfilePhone.removeAttribute('readonly');
    inputProfileEmail.removeAttribute('readonly');
    for (const input of allinputs) {
      input.style.background = 'white';
      input.style.color = 'black';
    }
    modifyBtn.textContent = 'Save';
  } else {
    inputProfileName.readOnly = true;
    inputProfilePhone.readOnly = true;
    inputProfileEmail.readOnly = true;
    modifyBtn.textContent = 'Modify info';
    const name = inputProfileName.value;
    const email = inputProfileEmail.value;
    const phone = inputProfilePhone.value;
    for (const input of allinputs) {
      input.style.background = 'transparent';
      input.style.color = 'white';
    }
    currentAccount.name = name;
    currentAccount.email = email;
    currentAccount.phone = phone;
    showProfileInfo(currentAccount);
  }
});

changePasswordBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (changePasswordBlock.style.display === 'block') {
    changePasswordFields.forEach((el) => el.style.opacity = '0');
    setTimeout(function () {
      changePasswordBlock.style.display = 'none';
    }, 800);
    newPassword.value = currentPassword.value = '';
  } else {
    changePasswordBlock.style.display = 'block';
    setTimeout(function () {
      changePasswordFields.forEach((el) => el.style.opacity = '1');
    }, 800);
  }
});

savePasswordBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (currentAccount.password === currentPassword.value) {
    wrongImg.style.opacity = '0';
    currentPassword.style.border = '1px transparent solid';
    if (newPassword.value !== '') {
      currentAccount.password = newPassword.value;
      newPassword.style.border = '1px transparent solid';
      changePasswordFields.forEach((el) => el.style.opacity = '0');
      alertPanel.style.opacity = '1';
      setTimeout(function () {
        alertPanel.style.opacity = '0';
      }, 1000);
      setTimeout(function () {
        changePasswordBlock.style.display = 'none';
        newPassword.value = currentPassword.value = '';
      }, 2000);
    } else {
      newPassword.style.border = '1px red solid';
    }
  } else {
    wrongImg.style.opacity = '1';
    currentPassword.style.border = '1px red solid';
  }
});