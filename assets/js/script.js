alert("Who the Cuss are you gonna Cuss?");

const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");

// **** ELEMENT DISABLE CODE ****
const NAME_ELEMENT = document.getElementById("name");

let phraseListOne = [
  // "is destined to",
  // "is definately going to",
  // "is cursed to",
  "will forever",
  "is definately going to",
  "is fated to",
];
let phraseListTwo = [
  "be chopped up by",
  "be trapped by",
  "be shot by",
  "be hunted by",
  // "be cornered by",
];
let phraseListThree = [
  // "a tiny Den with nowhere to hide!",
  // "a thousand fox traps",
  // "Boggis' shotgun!",
  // "a lake of Bean's cider!",
  // "by Bunce's butcher knife!",
  "Boggis",
  "Bunce",
  "Bean",
];

let phraseListIndexMap = [phraseListOne, phraseListTwo, phraseListThree];
let phraseElementIndexMap = [FIRST_PHRASE, SECOND_PHRASE, THIRD_PHRASE];
let generateCurse = function (e) {
  if (!checkName()) {
    return;
  }

  let buttonIndex = parseInt(e.target.dataset.index) - 1;
  generateText(buttonIndex);

  // **** ELEMENT DISABLE CODE ****
  CURSE_BUTTONS.forEach((button) => (button.classList.add("disabled")));

  if (buttonIndex != 2) {
    CURSE_BUTTONS[buttonIndex + 1].classList.remove("disabled");
    } else {
      buttonFinal.classList.remove("disabled");
    }
};

// **** GENERATE RANDOM PHRASE FROM ARRAYS CODE ****
const CURSE_BUTTONS = Array.from(document.getElementsByClassName("curse-button"));
CURSE_BUTTONS.forEach((button) => button.addEventListener("click", generateCurse)
);

let generateText = function (index) {
  let phraseList = phraseListIndexMap[index];
  let phrase = phraseList[Math.floor(Math.random() * phraseList.length)];

  let phraseElement = phraseElementIndexMap[index];
  phraseElement.innerHTML = phrase;
};

// **** ELEMENT DISABLE CODE ****
NAME_ELEMENT.addEventListener("focusout", () =>
  CURSE_BUTTONS[0].classList.remove("disabled")
);

// **** GENERATE FULL HEX CODE ****
const buttonFinal = document.getElementById("finalButton");
buttonFinal.addEventListener("click", (e) => {
  
  if (checkName()) {
    genHex();
}

let generateGif = document.getElementById("gif");

  if (genHex) {
    
    alert(generateGif);
  }
});

// **** ENSURE USER INPUTS TEXT TO START HEX CODE ****
function checkName() {
  if (document.getElementById("name").value !== "") {
    
    return true;
  } 

  alert("please enter the name of some Cussin' Cusser that needs a good Cussin' out");
  return false;
}

// **** BACK TO TOP AND RELOAD PAGE CODE ****
const refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", (e) => {
  document.location.reload();
});

function genHex() {
  let finalPhrase = document.getElementById("finalResult");
  let name = document.getElementById("name").value;

  finalPhrase.innerHTML = `${name} ${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
}

do (generateGif);

while (checkName) {
    if (document.getElementById("finalButton").value !== "") {          
    }
}

/*var image = document.getElementById("likes"), 
    button = document.getElementById("pause");
    
if (image.classList && image && button) {
    button.onclick = function() {
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
    };
}*/


// var image = document.getElementById("likes") 
    // button = document.getElementById("pause")
  
  /*function pauseButton() {
    if (image.classList && image && button) {
    button.addEventlistener("click", pauseButton()) = pauseButton;
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
      }
    }
pauseButton();
*/

/*
//this function actually works, but can't make gif reappear yet

//Also, it only works when logged to the console in Dev Tools! 

function myFunction() {
  var x = document.getElementById('likes');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

likes.addEventListener('click', myFunction);
*/

/*
function appear() {

  if (this.style.display === "") {
      this.style.display = "none";
  } else {
      this.style.display = "";
  }
  
}

let foxGif = document.getElementById('gif');

foxGif.addEventListener('click', appear);
*/


//this makes whole div disappear when pause is clicked
// const element = document.getElementById("pause");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("gif").innerHTML = "Hello World";
// }

// const pauseGif = document.getElementById("pause");

// pauseGif.addEventListener('click', () => {
//   const animations = document.querySelectorAll('animation');
//   animations.forEach(animation => {
//     const running = animation.style.animationPlayState || 'running';
//     animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
//   })
// });

  /* Toggle Animations */
  // const jstoggle = document.getElementById('js-toggle');
  // jstoggle.addEventListener('click', () => {
  //   const animations = document.querySelectorAll('[data-animation');
  //   animations.forEach(animation => {
  //     const running = animation.style.animationPlayState || 'running';
  //     animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  //   })
  // });
