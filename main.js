let form = document.getElementById('form');
let input = document.getElementsByTagName('input');
let ul = document.getElementById('list');
let listToDo = [];

let localStr = JSON.parse(localStorage.getItem('list'));
if (!!localStr) {
  for (let i=0; i<localStr.length; i++){
    addItem(localStr[i]);
   }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  addItem(input[0].value);
  localStorage.setItem('list', JSON.stringify(listToDo))
  input[0].value = '';
})

function addItem(value) {
  let li = document.createElement('li');
  li.innerText = value;
  ul.appendChild(li);
  listToDo.push(value);
}


// change darkmode
let btnChange = document.getElementsByClassName('change-color')[0];
let body = document.getElementsByTagName('body')[0];
let flag = 1;

let bgStr = localStorage.getItem('dark');
if (bgStr && bgStr == 0) {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}

btnChange.addEventListener('click', function() {
  if (flag == 1) {
    body.classList.add('dark');
    flag = 0;
  } else {
    body.classList.remove('dark');
    flag = 1;
  }

  localStorage.setItem('dark', flag);
})

function redirect() {
  window.open('https://www.google.com/', '_top')
  // window.location.href = 'https://www.google.com/';
}
console.log(window.location); 
