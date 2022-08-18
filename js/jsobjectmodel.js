let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;



console.log(val);


// const listitems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listitems);

// let arritems = Array.from(listitems);

// arritems.forEach(function(arritem,index){
// 	arritem.innerText = `${index} : Hello`;
// });

// querySelectorAll
// let its = document.querySelector('ul.list-group li.list-group-item');
// console.log(its);

// let itms = document.querySelectorAll('ul.list-group li.list-group-item'); // nodelist
// console.log(itms);
// console.log(itms[0]);

// itms.forEach(function(itm,index){
// 	itm.innerText = `${index} : Hello World`;
// });
	
// const liodd = document.querySelectorAll('li:nth-child(odd)');
// const lieven = document.querySelectorAll('li:nth-child(even)');

// liodd.forEach(function(li,index){
	// li.style.background = 'yellow';
// });

// for(let i = 0; i < lieven.length; i++){
// 	lieven[i].style.background = 'silver';
// };

// children

// let chl;

// const getul = document.querySelector('ul.list-group');
// const getli = document.querySelector('li.list-group-item:first-child');

// chl = getul.children; // HTML Collection

// chl = getul.children[1];

// getul.children[1].innerText = 'Have to eat';
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`;

// children of children

// chl = getul.children[1].children; // HTML Collection
// chl = getul.children[1].children[0].id; // .className / .classList // DOM Token List
// chl = getul.children[1].children[0].getAttribute('href');
// console.log(chl);

// chl = getul.children[0].children[0].children;
// chl = getul.children[0].children[0].children[0];
// console.log(chl);

// first element child
// chl = getul.firstElementChild;
// chl = getul.lastElementChild;

// child element count
// chl = getul.children.length;
// chl = getul.childElementCount;
// chl = getul.children[0].children[0].childElementCount;

// parent element

// const getfirstli = document.querySelector('li.list-group-item:first-child');

// let par = getfirstli.parentElement;
// console.log(par);

// next element sibling

// let sbl = getfirstli.nextElementSibling;
// sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(sbl);

// previous element sibling

// let psbl = getfirstli.nextElementSibling.previousElementSibling;
// console.log(psbl);

// create element
// const newli = document.createElement('li');

// add class
// newli.className = 'list-group-item';
// console.log(newli);

// add attribute
// newli.setAttribute('title','newitem');
// console.log(newli);

// create text mode
// newli.appendChild(document.createElement('Save Myanmar'));

// const newlink = document.createElement('a');

// newlink.href = '#';

// add id
// newlink.id = 'delete-item6';

// add class
// newlink.className = 'delete-item';

// newlink.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';

// newli.appendChild(newlink);

// console.log(newlink);



// console.log(newli);

// document.querySelector('ul.list-group').appendChild(newli);


// replace element
const newtitle = document.createElement('h2');

// add id
newtitle.id = 'tasktitle';

// create text node
// newtitle.appendChild(document.creaateTextNode('All My Lists'));

const oldtitle = document.getElementById('tasktitle');

const getcardaction = document.querySelector('.card-action');

// replace children(new,old)
// getcardaction.replaceChild(newtitle.oldtitle);


// remove element
// const getlis = document.querySelectorAll('li'); // node list
// getlis[0].remove();
// getlis[4].remove();

// remove child element
const getfirstul = document.querySelector('ul');
// getfirstul.removeChild(getlis[0]);

// class
const firstli = document.querySelector('li:first-child');

const firstlink = firstli.children[0]; // HTML Collection

// let firstlnk;
// firstlnk = firstlink.className;
// console.log(firstlnk);


// firstlink.className = 'delete-myself';
// firstlnk.className = 'delete-item delete-me delete-myself';

// firstlnk = firstlink.classList; // DOM Token List
// console.log(firstlnk);
// console.log(firstlnk[0]);

// // firstlink.classList.add('delete-ourselves');
// firstlink.classList.add('delete-myself', 'delete-ourselves');
// firstlink.classList.remove('delete-item');
// firstlink.classList.remove('delete-me', 'delete-myself');
// // replace(old,new);
// firstlink.classList.replace('delete-ourselves', 'delete-delete');

// if(firstlink.classList.contains('delete-me')){
// 	console.log('Yes');
// }else{
// 	console.log('No');
// }

// attribute
// let getatt = firstlink.getAttribute('href');

// firstlink.setAttribute('href','google.com');
// get att = firstlink.hasAttribute('href');
// console.log(getatt); // true

// addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

// method 1
// clearbtn.addEventListener('click',function(e){
// 	console.log('hay i am working');

// 	e.preventDefault();
// });

// method 2
clearbtn.addEventListener('click',myclick);

function myclick(e){
	// console.log('hay i am my click');

	let val;
	val = e;

	// Event target element
	val = e.target;
	val = e.target.id;
	val = e.target.className;
	val = e. target.classList; // dom token list

	// e.target.innerText = 'Finished';

	// Event Type

	val = e.type;

	// coordinates event - relative to the window
	val = e.clientX;
	val = e.clientY;

	// coordinates event - relative to the element
	val = e.offsetX;
	val = e.offsetY;

	console.log(val);

	// e.preventDefault();
};

// mouseEvent

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

// single click
// clbtn.addEventListener('click',mouseeventtype);

// double click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup
// clbtn.addEventlistener('mouseup',mouseeventtype);

// mouseenter
// card.addEventListener('mouseenter',mouseeventtype);

// mouseleave
// card.addEventListener('mouseleave',mouseeventtype);

// mouseover
// card.addEventListener('mouseover',mouseeventtype);

// mousemove
// card.addEventListener('mousemove',mouseeventtype);


// function mouseeventtype(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();
// }


const formel = document.querySelector('form');


// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
// 	console.log(`event type = ${e.type}`);

// 	e.preventDefault();
// }


const inputtask = document.getElementById('task');
const geth4 = document.querySelector('h4');

// keydown
// inputtask.addEventListener('keydown',inputeventtype);

// keypress
// inputtask.addEventListener('keypress',inputeventtype);

// keyup
// inputtask.addEventListener('keyup',inputeventtype);

// input
// inputtask.addEventListener('input',inputeventtype);

// focus
// inputtask.addEventListener('focus',inputeventtype);

// blur
// inputtask.addEventListener('blur',inputeventtype);

// cut
// inputtask.addEventListener('cut',inputeventtype);

// paste
// inputtask.addEventListener('paste',inputeventtype);

// function inputeventtype(e){
// 	console.log(`event type = ${e.type}`);

// 	console.log(e.target.value);

// 	geth4.textContent = e.target.value;

// 	// e.preventDefault();
// }


// card.addEventListener('mousemove',mouseeventtype);


// function mouseeventtype(e){
// 	geth4.textContent = `Mouse X: ${e.offsetX} Mouse Y: ${e.offsetY}`;

// 	document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;

// 	e.preventDefault();
// }



// event bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card');
// });


// event delegation

// const deleteitem = document.querySelector('.delete-item');
// deleteitem.addEventListener('click',deleteItem);

// function deleteItem(e){
// 	console.log('i am delete item');
// 	console.log(e.target);
// 	e.preventDefault();
// }


// document.body.addEventListener('click',evendelg);

// function evendelg(e){
	// if(e.target.className === 'fa-solid fa-trash-can'){
	// 	console.log('hay i am trash can');
	// }

	// if(e.target.parentElement.className === 'delete-item delete-me'){
	// 	console.log('hay i am trash can');
	// }

// 	if(e.target.parentElement.classList('delete-item'){
// 		// console.log('i am delete item by a tag');

// 		e.target.parentElement.parentElement.remove();
// 	})

// 	e.preventDefault();
// };







document.querySelector('form').addEventListener('submit',function(e){
	e.preventDefault();

	const getnewtask = document.getElementById('task').value;
	// localStorage.setItem('mytask',getnewtask);

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem('mytasks'));
	}

	alltasks.push(getnewtask);

	// console.log(alltasks);


	localStorage.setItem('mytasks',JSON.stringify(alltasks));
});


let getalltasks = localStorage.getItem('mytasks');
getalltasks = JSON.parse(getalltasks);
console.log(getalltasks);

getalltasks.forEach(function(getalltask){
	console.log(getalltask);
});