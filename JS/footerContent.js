
const config = {  
    additionalIterationCount: 5,
    transitionDuration: 3000,
    prize: 17520 ,
    digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  const targetDate = new Date('2022-01-26'); // starting date for designing
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - targetDate;
  const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  config.prize = differenceInMinutes;
  setInterval(() => {

    config.prize = differenceInMinutes;
    resetAnimation();
    animate()

  }, 10000);


  const randomLetterText = document.querySelector(".animatedTextFooter");
  const letterRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  let levelIteration = 0;
  word_split = "";

 




  const getPrizeText = () => document.getElementById("minsWorked"),
        getTracks = () => document.querySelectorAll(".digit > .digit-track");
  
  const getFormattedPrize = () => String(config.prize),
        getPrizeDigitByIndex = index => parseInt(config.prize.toString()[index]),
        determineIterations = index => index + config.additionalIterationCount;
  
  const createElement = (type, className, text) => {
    const element = document.createElement(type);
    element.className = className;
    if(text !== undefined) element.innerText = text;
    return element;
  }
  
  const createCharacter = character => createElement("span", "character", character);
  
  const createDigit = (digit, trackIndex) => {
    const digitElement = createElement("span", "digit"),
          trackElement = createElement("span", "digit-track");
    
    let digits = [],
        iterations = determineIterations(trackIndex);
    
    for(let i = 0; i < iterations; i++) {
      digits = [...digits, ...config.digits];
    }
    
    trackElement.innerText = digits.join(" ");
    
    trackElement.style.transitionDuration = `${config.transitionDuration}ms`;
    
    digitElement.appendChild(trackElement);
    
    return digitElement;
  }
  
  const setup = () => {
    let index = 0;
    
    const prizeText = getPrizeText();
    
    for(const character of getFormattedPrize()) {
      const element = isNaN(character) 
        ? createCharacter(character) : createDigit(character, index++);
      
      prizeText.appendChild(element);
    }  
  }
  
  const animate = () => {
    getTracks().forEach((track, index) => {
      const digit = getPrizeDigitByIndex(index),
            iterations = determineIterations(index),
            activeDigit = ((iterations - 1) * 10) + digit;
      
      track.style.translate = `0rem ${activeDigit * -10}rem`;
    });
  }



function startAnimation(word)
{

  if(levelIteration >= 3)
  {
    levelIteration = 0;
    clearInterval(interval);
    startAnimation("MAGICAL");
    
  }
  else
  {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      randomLetterText.innerText = word
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return word[index];
          }
        
          return letterRandom[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= word.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    setTimeout(() => {
      levelIteration += 1;
      changeWord();
    }, 2500);

  }
  


}

const resetTrackPosition = track => {
  track.style.transitionDuration = "0ms";
  track.style.translate = "0rem 0rem";
  track.offsetHeight;
  track.style.transitionDuration = `${config.transitionDuration}ms`;
}

const resetAnimation = () => {
  for(const track of getTracks()) resetTrackPosition(track);
}


function changeWord()
{
  switch (levelIteration) {
    case 0:
      document.querySelector(".animatedTextFooter").innerHTML = "DESIGNER";
      document.querySelector(".animatedTextFooter").setAttribute("data-value", "DESIGNER");
      startAnimation("DESIGNER");
      break;
    case 1:
      document.querySelector(".animatedTextFooter").innerHTML = "EDITOR";
      document.querySelector(".animatedTextFooter").setAttribute("data-value", "EDITOR");
      startAnimation("EDITOR");
      break;
    case 2:
      document.querySelector(".animatedTextFooter").innerHTML = "CONTENT";
      document.querySelector(".animatedTextFooter").setAttribute("data-value", "CONTENT");
      startAnimation("CONTENT");
      break;
    case 3:
      document.querySelector(".animatedTextFooter").innerHTML = "MAGICAL";
      document.querySelector(".animatedTextFooter").setAttribute("data-value", "MAGICAL");
      startAnimation("MAGICAL");
      break;
  }

  
}




  
  

const LeftleftTopImage = document.getElementById("picContainerLeftOne");
const LeftleftBottomImage = document.getElementById("picContainerLeftTwo");
const LeftRightImage = document.getElementById("picContainerLeftThree");


const LeftImageContainer = document.getElementById("picContLeft");
const leftTopImageL = document.getElementById("picContLeft").getBoundingClientRect().left;
const leftTopImageT = document.getElementById("picContLeft").getBoundingClientRect().top;
const leftTopImageB = document.getElementById("picContainerLeftOne").getBoundingClientRect().bottom;
const leftTopImageR = document.getElementById("picContainerLeftOne").getBoundingClientRect().right;
const leftBottomImageL = document.getElementById("picContLeft").getBoundingClientRect().left;
const leftBottomImageT = document.getElementById("picContainerLeftTwo").getBoundingClientRect().top;
const leftBottomImageB = document.getElementById("picContLeft").getBoundingClientRect().bottom;
const leftBottomImageR = document.getElementById("picContainerLeftTwo").getBoundingClientRect().right;
const leftRightImageL = document.getElementById("picContainerLeftThree").getBoundingClientRect().left;
const leftRightImageR = document.getElementById("picContLeft").getBoundingClientRect().right;



const RightleftTopImage = document.getElementById("picContainerRightOne");
const RightleftBottomImage = document.getElementById("picContainerRightTwo");
const RightLeftImage = document.getElementById("picContainerRightThree");

const rightImageContainer = document.getElementById("picContRight");
const rightTopImageL = document.getElementById("picContRight").getBoundingClientRect().left;
const rightTopImageT = document.getElementById("picContRight").getBoundingClientRect().top;
const rightTopImageB = document.getElementById("picContainerRightOne").getBoundingClientRect().bottom;
const rightTopImageR = document.getElementById("picContRight").getBoundingClientRect().right;
const rightBottomImageL = document.getElementById("picContRight").getBoundingClientRect().left;
const rightBottomImageT = document.getElementById("picContainerRightTwo").getBoundingClientRect().top;
const rightBottomImageB = document.getElementById("picContRight").getBoundingClientRect().bottom;
const rightBottomImageR = document.getElementById("picContRight").getBoundingClientRect().right;
const rightLeftImageL = document.getElementById("picContRight").getBoundingClientRect().left;
const rightLeftImageR = document.getElementById("picContainerRightThree").getBoundingClientRect().right;



LeftImageContainer.addEventListener("mousemove", (e) => {
  if((e.clientX >= leftTopImageL) && (e.clientX <= leftTopImageR) && (e.clientY >= leftTopImageT) && (e.clientY <= leftTopImageB))
  {
    midValueX = parseInt((leftTopImageL + leftTopImageR)/2);
    if(e.clientX  < midValueX)
    {
      LeftleftTopImage.style.backgroundPositionX = "-2px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      LeftleftTopImage.style.backgroundPositionX = "0px";
    }
    else
    {
      LeftleftTopImage.style.backgroundPositionX = "2px";
    }
  }
  else if((e.clientX >= leftBottomImageL) && (e.clientX <= leftBottomImageR) && (e.clientY >= leftBottomImageT) && (e.clientY <= leftBottomImageB))
  {
    midValueX = parseInt((leftBottomImageL + leftBottomImageR)/2);
    if(e.clientX  < midValueX)
    {
      LeftleftBottomImage.style.backgroundPositionX = "-2px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      LeftleftBottomImage.style.backgroundPositionX = "0px";
    }
    else
    {
      LeftleftBottomImage.style.backgroundPositionX = "2px";
    }
  
  }
  else if((e.clientX >= leftRightImageL) && e.clientX <= leftRightImageR)
  {
    midValueX = parseInt((leftRightImageL + leftRightImageR)/2);
    if(e.clientX  < midValueX)
    {
      LeftRightImage.style.backgroundPositionX = "-45px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      LeftRightImage.style.backgroundPositionX = "-40px";
    }
    else
    {
      LeftRightImage.style.backgroundPositionX = "-35px";
    }
  }
})


rightImageContainer.addEventListener("mousemove", (e) => {
  if((e.clientX >= rightTopImageL) && (e.clientX <= rightTopImageR) && (e.clientY >= rightTopImageT) && (e.clientY <= rightTopImageB))
  {
    midValueX = parseInt((rightTopImageL + rightTopImageR)/2);
    if(e.clientX  < midValueX)
    {
      RightleftTopImage.style.backgroundPositionX = "-2px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      RightleftTopImage.style.backgroundPositionX = "0px";
    }
    else
    {
      RightleftTopImage.style.backgroundPositionX = "2px";
    }
  }
  else if((e.clientX >= rightBottomImageL) && (e.clientX <= rightBottomImageR) && (e.clientY >= rightBottomImageT) && (e.clientY <= rightBottomImageB))
  {
    midValueX = parseInt((rightBottomImageL + rightBottomImageR)/2);
    if(e.clientX  < midValueX)
    {
      RightleftBottomImage.style.backgroundPositionX = "-2px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      RightleftBottomImage.style.backgroundPositionX = "0px";
    }
    else
    {
      RightleftBottomImage.style.backgroundPositionX = "2px";
    }
  
  }
  else if((e.clientX >= rightLeftImageL) && e.clientX <= rightLeftImageR)
  {
    midValueX = parseInt((rightLeftImageL + rightLeftImageR)/2);
    if(e.clientX  < midValueX)
    {
      RightLeftImage.style.backgroundPositionX = "45px";
    }
    else if((e.clientX > midValueX - 5) && (e.clientX < midValueX + 5)) 
    {
      RightLeftImage.style.backgroundPositionX = "40px";
    }
    else
    {
      RightLeftImage.style.backgroundPositionX = "35px";
    }
  }
})
