var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox_icon.png') {
      myImage.setAttribute ('src','images/fb_photo.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox_icon.png');
    }
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	if (myName === null)
	    return;
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
