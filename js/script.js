let date = document.querySelector("#date");

let currentDate = new Date();

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][currentDate.getDay()];

let monthDate = currentDate.getDate().toString();

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
][currentDate.getMonth()];

let year = currentDate.getFullYear().toString();

date.innerHTML = `${weekday}, ${month} ${monthDate}, ${year}`;

let now = new Date();
let time = document.querySelector("#time");
time.innerHTML = now.toLocaleTimeString();
setInterval(() => {
  now = new Date();
  time.innerHTML = now.toLocaleTimeString();
}, 1000);

let input = document.querySelector("#user-input");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let enterButton = document.getElementById("btn");

function createListElement() {
  if (input.value == "") {
    alert("لطفا فیلد زیر را پر کنید.");
  } else {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("🗑️"));
  li.appendChild(dBtn);

  function deleteListItem() {
    li.classList.add("delete");
  }
  dBtn.addEventListener("click", deleteListItem);

  var cBtn = document.createElement("button");
  cBtn.appendChild(document.createTextNode("✅"));
  li.appendChild(cBtn);
  function crossOut() {
    li.classList.toggle("done");
    cBtn.style.display = "none";
    uBtn.style.display = "block";
  }
  cBtn.addEventListener("click", crossOut);

  var uBtn = document.createElement("button");
  uBtn.appendChild(document.createTextNode("❌"));
  li.appendChild(uBtn);
  function undo() {
    li.classList.remove("done");
    uBtn.style.display = "none";
    cBtn.style.display = "block";
  }
  uBtn.addEventListener("click", undo);
}

function inputLength() {
  return input.value.trim().length;
}

function addAfterEnter() {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", createListElement);
input.addEventListener("keypress", addAfterEnter);

let modal = document.querySelector(".modal");
document.querySelector("#close").addEventListener("click", function () {
  modal.style.display = "none";
});
