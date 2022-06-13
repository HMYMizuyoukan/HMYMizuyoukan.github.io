const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/My test image.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
