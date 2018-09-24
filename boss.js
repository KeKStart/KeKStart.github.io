
var Image = document.querySelector('img'); // указывает место дальнейшего действия. Тут сохраняем ссылку на это <img src="pictures/map1.jpg" alt="Тут три мини-карты если что">

Image.onclick = function() {  // Тут указывается что будет происходить. При нажатии на картинку (ту что указали выше)...
    var Ssrc = Image.getAttribute('src'); // ...получаем изображение из атрибута src...
    if(Ssrc === 'pictures/map1.jpg') {  // ... тут вроде идет проверка, если при нажатии стоит первое изображение, оно меняется на другое
      Image.setAttribute ('src','pictures/map2.jpg');
    } else {
      Image.setAttribute ('src','pictures/map1.jpg');
    } 
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Ty kto?');
  localStorage.setItem('Namae', myName);
  myHeading.innerHTML  = 'Omae wa mou shindeiru, ' + myName;
}

if(!localStorage.getItem('Namae')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('Namae');
  myHeading.innerHTML  = 'Omae wa mou shindeiru, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}