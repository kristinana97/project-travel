console.log(`
    Score 75/75
        1. Слайдер изображений в секции destinations +0;
        2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50;
        3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25;
`);


// --------------------------открытие ии закрытие бергер меню-------------------------------
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active'); // отвечает за анимацию
    document.querySelector('.navigation').classList.toggle('open');
    document.querySelector('.navigation').addEventListener('click', closeMenu);
    function closeMenu(event) {
        if (event.target.classList.contains('navigation__item_link')) {
            document.querySelector('.navigation').classList.remove('open');
            document.querySelector('.burger').classList.remove('open'); 
            document.querySelector('.burger span').classList.remove('active');
        }
}
  })



// --------------------------открытие попапа при клике на кнопку логин и его закрытие при клике вне попапа;---------------------------
const buttonLogin = document.getElementById('button_login');
const popup = document.querySelector('.pop-up');
const navAccLink = document.querySelector('.nav_popup__link');
const popupContainer = document.querySelector('.pop-up__container')
const burger = document.querySelector('.burger');

buttonLogin.addEventListener('click', () => {
    popup.classList.toggle('hidden') // попап появляется
})

popup.addEventListener('click', (event) => {
    if(event.target.classList.contains('pop-up')) {// если мы нажимаем на бэкграунд попап закрывается
        popup.classList.toggle('hidden') // 
    }
})

// closeButton.addEventListener('click', () => {
//     popup.classList.toggle('hidden') // попап 
// }) // попап будет тоглится при нажатии на кнопку закрытия

const email = document.getElementById('email');
const password = document.getElementById('password');
const buttonSignin = document.getElementById('button_sign-in');

buttonSignin.addEventListener('click', () => {
    alert('Login: ' + email.value + '              Password: ' + password.value).reset();
});

navAccLink.addEventListener('click', function() {    
    // burger.classList.remove('active');
    // popupContainer.classList.add('active');
    popup.classList.toggle('hidden')
  }
);

// --------------------------изменение разметки попапа Login, на разметку попапа Sign Up;----------------------------------
let flagSingIn = 'up';
const сreateAccount = document.querySelector('[data-i18="сreate__account"]'); 
const content = document.querySelectorAll('[data-i18]'); 
const ofVisibility = document.querySelectorAll('.of-visibility'); 
const i18Obj = {
    in: {
        'title': `Log in to your account`,
        'sing__btn': `Sign In`,
        'сreate__account': `<span>Don’t have an account?&nbsp</span>Register`,
    },
    up: {
        'title': `Create account`,
        'sing__btn': `Sign Up`,
        'сreate__account': `<span>Already have an account?&nbsp</span>Log in`,
    }
}
function replaceContent(flag) {
    content.forEach(item => item.innerHTML = i18Obj[flag][item.dataset.i18]);
};
function ofSignIn() {
    ofVisibility.forEach(item => item.classList.toggle('active'));
    replaceContent(flagSingIn);
    flagSingIn = flagSingIn === 'up' ? 'in' : 'up';
};
сreateAccount.addEventListener('click', ofSignIn);



// --------------------------------------------------------------------------------------
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const controlButton = document.querySelectorAll('.control-button');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

slide[0].addEventListener('click', function() {
    slider.classList.add("left");
    slider.classList.remove("center", "right");
    slide[1].style.cursor = "pointer";
    slide[0].style.cursor = "default";
    controlButton[0].style.opacity = "1";
    controlButton[1].style.opacity = ".5";
    controlButton[2].style.opacity = ".5";
});
slide[1].addEventListener("click", function () {
    slider.classList.add("center");
    slider.classList.remove("left", "right");
    slide[0].style.cursor = "pointer";
    slide[1].style.cursor = "";
    slide[2].style.cursor = "pointer";
    controlButton[0].style.opacity = ".5";
    controlButton[1].style.opacity = "1";
    controlButton[2].style.opacity = ".5";
  }
);

slide[2].addEventListener("click", function () {
    slider.classList.add("right");
    slider.classList.remove("left", "center");
    slide[1].style.cursor = "pointer";
    slide[2].style.cursor = "default";
    controlButton[0].style.opacity = ".5";
    controlButton[1].style.opacity = ".5";
    controlButton[2].style.opacity = "1";
  }
);
arrowLeft.addEventListener("click", function () {
    if (slider.classList.contains("right")) {
      slider.classList.add("center");
      slider.classList.remove("right");
      controlButton[0].style.opacity = ".5";
      controlButton[1].style.opacity = "1";
      controlButton[2].style.opacity = ".5";
      arrowRight.style.opacity = "1";
    } else {
      slider.classList.add("left");
      slider.classList.remove("center", "right");
      controlButton[0].style.opacity = "1";
      controlButton[1].style.opacity = ".5";
      controlButton[2].style.opacity = ".5";
      arrowLeft.style.opacity = ".5";
    }
  }
);

arrowRight.addEventListener("click", function () {
    if (slider.classList.contains("left")) {
      slider.classList.add("center");
      slider.classList.remove("left");
      controlButton[0].style.opacity = ".5";
      controlButton[1].style.opacity = "1";
      controlButton[2].style.opacity = ".5";
      arrowLeft.style.opacity = "1";      
    } else {
      slider.classList.add("right");
      slider.classList.remove("left", "center");
      controlButton[0].style.opacity = ".5";
      controlButton[1].style.opacity = ".5";
      controlButton[2].style.opacity = "1";
      arrowRight.style.opacity = ".5";
    }
  }
);



// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// ); просмотр горизонтального скролла(вставляем в консоль)