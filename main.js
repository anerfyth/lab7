console.log(document);
document.title = "Lab7";

const body = document.querySelector('body'); //8

document.getElementById('h1').textContent = "Lab7 Assignment";
h1.style.color = "blue";
document.body.appendChild(h1);

hr = document.createElement('hr')
document.body.appendChild(hr)

let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.style.color = "red";
document.body.appendChild(h2);

const paragraph = document.createElement('p');
const text = document.createTextNode('In this task you have to reproduce this HTML page as is using ');
const bold = document.createElement('b');
const boldText = document.createTextNode('only');
bold.appendChild(boldText);
paragraph.appendChild(text);
paragraph.appendChild(bold);
paragraph.appendChild(document.createTextNode(' JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'));
document.body.appendChild(paragraph);


const manip_tech = ['find elements in the DOM (5 points);',
'create/add/remove elements (5 points);',
'change content of the elements (5 points);',
'change styles of the elements (5 points);',
'change attributes of the elements (5 points);',
'change classes of the elements (5 points);']
 
  const ul = document.createElement('ul');

  manip_tech.forEach(tech => {
	const li = document.createElement('li');
	const bold = document.createElement('b');
	bold.textContent = '5 points';
	li.textContent = tech.replace('5 points);', '');
	li.insertBefore(bold, li.childNodes[-1]);
  const li7 = document.createElement('li');
  li.appendChild(document.createTextNode(');'))
	if (manip_tech.indexOf(tech) % 2 == 0) {
		li.style.color = 'green';
	} else {
		li.style.color = 'purple';
	}
	ul.appendChild(li);
});
  
  
  // Append the unordered list to the body element
  document.body.appendChild(ul);
  




hr = document.createElement('hr')
document.body.appendChild(hr)

let h2_2 = document.createElement("h2");
h2_2.innerText = "Submission"
h2_2.style.color = "red";
document.body.appendChild(h2_2);

let p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p2);

const ul_2 = document.createElement('ul');

const li1 = document.createElement('li');
li1.setAttribute('class', 'odd');
li1.setAttribute('style', 'color: green');
li1.textContent = 'Create a new repository on Github, named ';
var b1 = document.createElement('b');
b1.textContent = 'lab7';
li1.appendChild(b1);
li1.appendChild(document.createTextNode(' ('))
var b2 = document.createElement('b');
b2.textContent = '1 point';
li1.appendChild(b2);
li1.appendChild(document.createTextNode(').'))
ul_2.appendChild(li1);

const li2 = document.createElement('li');
li2.setAttribute('class', 'even');
li2.setAttribute('style', 'color: purple');
li2.textContent = 'Clone this repository to your local machine and work inside it.';
ul_2.appendChild(li2);

const li3 = document.createElement('li');
li3.setAttribute('class', 'odd');
li3.setAttribute('style', 'color: green');
li3.textContent = 'Create a new HTML file, called ';
var b3 = document.createElement('b');
b3.textContent = 'index.html';
li3.appendChild(b3);
li3.appendChild(document.createTextNode(', which has only one <h1> tag with "Hello, World!" message ('))
var b4 = document.createElement('b');
b4.textContent = '1 point';
li3.appendChild(b4);
li3.appendChild(document.createTextNode(').'))
ul_2.appendChild(li3);

const li4 = document.createElement('li');
li4.setAttribute('class', 'even');
li4.setAttribute('style', 'color: purple');
li4.textContent = 'Create a new JavaScript file, called ';
var b5 = document.createElement('b');
b5.textContent = 'main.js';
li4.appendChild(b5);
li4.appendChild(document.createTextNode(', which must contain your program (assignment) described above ('))
var b6 = document.createElement('b');
b6.textContent = '1 point';
li4.appendChild(b6);
li4.appendChild(document.createTextNode(').'))
ul_2.appendChild(li4);

const li5 = document.createElement('li');
li5.setAttribute('class', 'odd');
li5.setAttribute('style', 'color: green');
li5.textContent = 'Link this ';
var b7 = document.createElement('b');
b7.textContent = 'main.js';
li5.appendChild(b7);
li5.appendChild(document.createTextNode(' file to your '))
var b8 = document.createElement('b');
b8.textContent = 'index.html';
li5.appendChild(b8);
li5.appendChild(document.createTextNode(' file (Note: place your script at the end of the '))
var b9 = document.createElement('b');
b9.textContent = 'body';
li5.appendChild(b9);
li5.appendChild(document.createTextNode(' section).'))
ul_2.appendChild(li5);

const li6 = document.createElement('li');
li6.setAttribute('class', 'even');
li6.setAttribute('style', 'color: purple');
li6.textContent = 'Write a JavaScript program in ';
var b10 = document.createElement('b');
b10.textContent = 'main.js';
li6.appendChild(b10);
li6.appendChild(document.createTextNode(' to make your '))
var b11 = document.createElement('b');
b11.textContent = 'index.html';
li6.appendChild(b11);
li6.appendChild(document.createTextNode(' look identical to this HTML file ('))
var b12 = document.createElement('b');
b12.textContent = '5 points';
li6.appendChild(b12);
li6.appendChild(document.createTextNode(').'))
ul_2.appendChild(li6);

const li7 = document.createElement('li');
li7.setAttribute('class', 'odd');
li7.setAttribute('style', 'color: green');
li7.textContent = 'After you finish your work, submit it to the Github (';
var b13 = document.createElement('b');
b13.textContent = '2 points';
li7.appendChild(b13);
li7.appendChild(document.createTextNode(').'))
ul_2.appendChild(li7);

document.body.appendChild(ul_2)

hr = document.createElement('hr')
document.body.appendChild(hr)

console.log(document);