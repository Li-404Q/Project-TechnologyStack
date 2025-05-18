"use strict";

const account1 = {
  id: 123456789,
  pin: 1111,
};
const account2 = {
  id: 987654321,
  pin: 2222,
};
const accounts = [account1, account2];

const bannerBtnPre = document.querySelector(".slide-pre");
const bannerBtnNext = document.querySelector(".slide-next");
const bannerImg = document.querySelectorAll(".banner-img");
const slide = document.querySelector(".slide");
const BtnPre = document.querySelector(".slide2-pre");
const BtnNext = document.querySelector(".slide2-next");
const msgImg = document.querySelectorAll(".msg-image");
const slide2 = document.querySelector(".slide2");
const dots = document.querySelector(".dots");
const dotContainer = document.querySelectorAll(".dot");

const btnLogin = document.querySelector(".btn-login");
const btnRegister = document.querySelector(".btn-register");
const modal = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const modalLogin = document.querySelector(".modal-form-login");
const modalRegister = document.querySelector(".modal-form-register");
const ackBtn = document.querySelector(".ack-btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputRegisterUsername = document.querySelector(".register__input--user");
const inputRegisterPin = document.querySelector(".register__input--pin");
const inputRegisterAckpin = document.querySelector(".register__input--ackpin");

////////////////////////////////////////
let bannerX = 0;
let msgX = 0;
let timer,
  timer2,
  currentId,
  accountX = accounts.length;
console.log(accounts);
console.log(accountX);

const maxBanner = bannerImg.length;
const maxMsg = msgImg.length;
// FUNCTION轮播图小
console.log(msgImg);

const goToSlide2 = function (slide) {
  msgImg.forEach((el) => el.classList.add("hidden"));
  msgImg[slide].classList.remove("hidden");
};
const activeDot = function (slide) {
  dotContainer.forEach((dot) => dot.classList.remove("active_dot"));
  dotContainer[slide].classList.add("active_dot");
};
BtnPre.addEventListener("click", function (e) {
  if (msgX === 0) msgX = maxMsg - 1;
  else {
    msgX--;
  }
  goToSlide2(msgX);
  activeDot(msgX);
});
BtnNext.addEventListener("click", function (e) {
  if (msgX === maxMsg - 1) msgX = 0;
  else {
    msgX++;
  }
  goToSlide2(msgX);
  activeDot(msgX);
});

// 定时装置
const msgBanner = function () {
  if (msgX === maxMsg - 1) msgX = 0;
  else {
    msgX++;
  }
  goToSlide2(msgX);
  activeDot(msgX);
};
timer2 = setInterval(msgBanner, 3000);
slide2.addEventListener("mouseover", function () {
  BtnPre.classList.remove("hidden");
  BtnNext.classList.remove("hidden");
  clearInterval(timer2);
});
slide2.addEventListener("mouseout", function () {
  BtnPre.classList.add("hidden");
  BtnNext.classList.add("hidden");
  timer2 = setInterval(msgBanner, 3000);
});
dots.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    msgX = +e.target.dataset.slide;
    goToSlide2(msgX);
    activeDot(msgX);
  }
});

// FUNCTION轮播图（大）
const goToSlide = function (slide) {
  bannerImg.forEach((el) => el.classList.add("hidden"));
  bannerImg[slide].classList.remove("hidden");
};
bannerBtnPre.addEventListener("click", function (e) {
  if (bannerX === 0) bannerX = maxBanner - 1;
  else {
    bannerX--;
  }
  goToSlide(bannerX);
});
bannerBtnNext.addEventListener("click", function (e) {
  if (bannerX === maxBanner - 1) bannerX = 0;
  else {
    bannerX++;
  }
  goToSlide(bannerX);
});
// 定时装置
const tickBanner = function () {
  if (bannerX === maxBanner - 1) bannerX = 0;
  else {
    bannerX++;
  }
  goToSlide(bannerX);
};
timer = setInterval(tickBanner, 3000);
slide.addEventListener("mouseover", function () {
  bannerBtnPre.classList.remove("hidden");
  bannerBtnNext.classList.remove("hidden");
  clearInterval(timer);
});
slide.addEventListener("mouseout", function () {
  bannerBtnPre.classList.add("hidden");
  bannerBtnNext.classList.add("hidden");
  timer = setInterval(tickBanner, 3000);
});

// FUNCTION登录注册
// 初始化登陆界面
/* const init = function () {
  inputLoginPin.value = "";
  //   inputLoginUsername.value = "";
};
btnRegister.addEventListener("click", function () {
  modalRegister.classList.remove("hidden");
  modalLogin.classList.add("hidden");
});

ackBtn.addEventListener("click", function () {
  if (
    inputRegisterAckpin.value === inputRegisterPin.value &&
    inputRegisterUsername.value !== ""
  ) {
    console.log(inputRegisterPin.value);

    const newAccount = {};
    newAccount.id = +inputRegisterUsername.value;
    newAccount.pin = +inputRegisterPin.value;
    console.log(newAccount);
    modalRegister.classList.add("hidden");
    modalLogin.classList.remove("hidden");
    accounts.push(newAccount);
    console.log(accounts);
  } else {
    inputRegisterAckpin.value = inputRegisterPin.value = "";
  }

  init();
});

btnLogin.addEventListener("click", function (e) {
  //   console.log(inputLoginUsername.value);

  e.preventDefault();
  currentId = accounts.find((acc) => acc.id === +inputLoginUsername.value);

  if (currentId?.pin === +inputLoginPin.value) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  } else {
    init();
    // alert("账号或密码错误！");
  }
}); */

// FUNCTION隐藏登录界面
overlay.classList.add("hidden");
modal.classList.add("hidden");

// FUNCTION滚动轮播图
const oUl = document.querySelector(".mov-ul");
oUl.innerHTML += oUl.innerHTML;
const aLi = document.querySelectorAll(".mov-li");
// console.log(oUl, aLi);
oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";
// console.log(oUl.style.width);
let speed = -1;
const move = function () {
  if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
    oUl.style.left = "0";
  }
  oUl.style.left = oUl.offsetLeft + speed + "px";
};
let movSlide = setInterval(move, 50);

oUl.addEventListener("mouseover", function () {
  clearInterval(movSlide);
});
oUl.addEventListener("mouseout", function () {
  movSlide = setInterval(move, 50);
});
