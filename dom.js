// DOM

const message = document.getElementById("msg"); // return the html tag
console.log(message);

const lang = document.getElementsByName("lan"); // return nodeList
console.log(lang);

const heading = document.getElementsByTagName("h1"); // return HTMLcollection
console.log(heading);

const head = document.getElementsByClassName("head"); // return HTMLcollection
console.log(head);

const head1 = document.querySelectorAll(".head"); // querySelector give the first quesy that matches but QselectorAll return the collection
console.log(head1);

const parent = document.querySelector(".title");
console.log(parent.firstElementChild);
console.log(parent.childNodes);

// createElement

let firstDiv = document.createElement("div");
firstDiv.innerHTML = "<p> Hello this </p>";

firstDiv.className = "first";

console.log(firstDiv);

// appendChild

let addnew = document.createElement("h1");
addnew.innerHTML = "New Heading";
addnew.className = "new";
addnew.style.display = "none";
parent.append(addnew); // adding new h1 to the title

console.log(parent.innerText); // it will show only which are visible on webpage
console.log(parent.textContent); // it will show all the text

// parent.innerHTML = "<p> This is innerHtml </p>"
// parent.textContent = "<p> This is textContent </p>"

message.remove(); // it will remove the element

console.log(message.getAttribute("id"));
console.log(head.className); // getting undifined because it return array
console.log(head[0].className);

// EventListner

const grand = document.querySelector(".grand");
const father = document.querySelector(".father");
const child = document.querySelector(".child");

// this example is called event bubbling cause when clicked on inner most element all the other event listner is activated

grand.addEventListener("click", (e) => {
  console.log("GrandParent Bubble");
  // console.log(e);
  // console.log(e.target);
});

grand.addEventListener(
  "click",
  (e) => {
    console.log("Grand parent Captrue");
  },
  { capture: true }
); // it is false as default , so now if user clicked on child div it capture first the grand parent

father.addEventListener(
  "click",
  (e) => {
    console.log("Parent Capture");
  },
  { capture: true }
);

father.addEventListener("click", (e) => {
  console.log("Parent Bubble");
});

child.addEventListener(
  "click",
  (e) => {
    console.log("child Capture");
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  console.log("child Bubble");
  e.stopPropagation() // it stop propagation be it capture or bubble
});

document.addEventListener("click", (e) => {
  console.log("Document");
});
