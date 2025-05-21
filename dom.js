// DOM

const message = document.getElementById("msg"); // return the html tag
console.log(message);

const lang = document.getElementsByName("lan"); // return nodeList
console.log(lang);

const heading = document.getElementsByTagName("h1"); // return HTMLcollection
console.log(heading);

const head = document.getElementsByClassName("head"); // return HTMLcollection
console.log(head);

const head1 = document.querySelectorAll(".head") // querySelector give the first quesy that matches but QselectorAll return the collection 
console.log(head1);

const parent = document.querySelector('.title')
console.log(parent.firstElementChild);
console.log(parent.childNodes);

// createElement

let firstDiv = document.createElement("div")
firstDiv.innerHTML = "<p> Hello this </p>"

firstDiv.className = "first"

console.log(firstDiv);

// appendChild

let addnew = document.createElement("h1")
addnew.innerHTML = "New Heading"
addnew.className = "new"
addnew.style.display = "none"
parent.appendChild(addnew) // adding new h1 to the title 

console.log(parent.innerText); // it will show only which are visible on webpage
console.log(parent.textContent); // it will show all the text

// parent.innerHTML = "<p> This is innerHtml </p>"  
// parent.textContent = "<p> This is textContent </p>"
