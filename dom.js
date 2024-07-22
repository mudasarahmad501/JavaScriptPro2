// Examin the Document Object//
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

            //    GetElements By Id

var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.textContent = 'Hello Mudasar'
// headerTitle.innerHTML= '<h3>Hello G</h3>'
headerTitle.style.borderBottom = '3px solid white';

                // GetElements By ClassName

var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello Mudasar';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// items.style.backgroundColor = 'yellow'; // this gives us error 

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

                        // Query Selector //
var submit = document.querySelector('input[type = "submit"]');
submit.value = 'HELLO';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';
var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'red';

                        // Query Selector //

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'yellow';
}
for(var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = 'coral';
}

                    // Traversing the DOM//
                    
parenNode
var parentnode = document.querySelector('#Items');
parentnode.parentNode.style.backgroundColor = '#f4f4f4';

parentElements
var parentelement = document.querySelector('#Items');
// parentelement.parentElement.style.backgroundColor = '#f4f4f4';

var listitem = document.querySelector('#Items');
listitem.children[1].style.backgroundColor = 'coral';

// // firstchild
// console.log(listitem.firstChild);

// // firselement child
// console.log(listitem.firstElementChild);
// listitem.firstElementChild.textContent = 'Hello Boss';

// nextsibling
// console.log(listitem.nextSibling);
// console.log(listitem.nextElementSibling);
// previousSibling
// previousElementSibling

// createElement

// Create a Div
var newDiv = document.createElement('div');
// console.log(newDiv)

// addClass
newDiv.className = 'hello';
// add id
newDiv.id = 'hello1';
// add atrr
newDiv.setAttribute('tittle', 'Hello Div');
// Create text Node
var newDivText = document.createTextNode('Hello Mudasar');
newDiv.appendChild(newDivText);
console.log(newDiv.innerText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

// ----------------------------Events-------------------------//

function buttonClick(){
    console.log('Button Clicked');
}

var button = document.querySelector('#button');
button.addEventListener('click', buttonClick);

function buttonClick(e){
    document.getElementById('header-title').textContent = 'Mudasar Ahmad Zahid';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML= '<h3>'+e.target.id+'</h3>';
    console.log(e.type);
    console.log(e.clientX); //this gives us position of the mouse//
    console.log(e.clientY); //this gives us position of the mouse//
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}


var button = document.querySelector('#button');
var box = document.querySelector('#box');
button.addEventListener('click', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);
box.addEventListener('mouseenter', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);
itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('input', runEvent);
select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: ' +e.type);
    // console.log('EVENT Value: ' +e.target.value);
    
    // box.style.backgroundColor = 'rgb("+e.offsetX", "+e.offsetY", 40)';
    
}
