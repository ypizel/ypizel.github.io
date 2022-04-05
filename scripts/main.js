// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dota2-items.jpg') {
      myImage.setAttribute('src','images/Magic(1).png');
    } else if(mySrc === 'images/Magic(1).png') {
        myImage.setAttribute('src','images/magic(4).jpg');
      } else if (mySrc === 'images/magic(4).jpg') {
        myImage.setAttribute('src','images/dota2-items.jpg');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I love you, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'I love you, ' + storedName + '!';
}
