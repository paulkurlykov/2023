const box = document.getElementById('box'),
  buttons = document.querySelectorAll('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  formBox = document.querySelectorAll('.div_form');
console.dir(formBox[0]);

// using forEach for changing hearts style
hearts.forEach((value) => {
  value.style.cssText = `background-color: yellow; width: 100px`;
});

// using forEach for changing buttons style
buttons.forEach((value) => {
  value.style.cssText = `background-color: gold; width: 75px; border-radius: 20%; height: 50px`;
  buttons[2].style.background = 'green';
});

// change some buttons style
buttons[1].style.background = 'silver';
buttons[3].style.background = '#cd7f32';

// get button of form and change its style
const formButton = document.querySelectorAll('.fb')[0];
formButton.style.cssText = `background-color: green; width: 150px; border-radius: 10%; height: 50px; font-size: 20px`;

// change top black box style
box.style.backgroundColor = 'black';
box.style.borderRadius = '25%';

// create a pink round
const pinkRound = document.createElement('div');
pinkRound.classList.add('round-pink');

//place pink round block at the end of the body
document.body.append(pinkRound);

// place text into the pink round
pinkRound.innerHTML = 'PINK';

// create a green round
const greenRound = document.createElement('div');
greenRound.classList.add('round-green');

// place green round before form div
formBox[0].before(greenRound);

// create purple round and place it after blue rounds
const purpleRound = document.createElement('div');
purpleRound.classList.add('round-purple');
circles[2].after(purpleRound);

// deleting an element

circles[1].remove();

// replacing elements with each other

circles[1].replaceWith(hearts[1]);

// insert HTML-code or text into block
purpleRound.innerHTML = "<div class='purple_round_text'>'PURPLE'</div>";

// insert HTML at the exact place

box.insertAdjacentHTML('beforebegin', '<h1>This is a text page!</h1>');
