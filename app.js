const output = document.querySelector(".output");
const btn1 = document.querySelector(".btn");
// const url = "https://api.github.com/repos/twbs/bootstrap"
// const url = "list.json";
// const url = "https://api.github.com/orgs/octo-org/repos";
// https://api.github.com/search/repositories?q=test
const url = "https://api.github.com/search/repositories";
const searchTerm = document.querySelector(".searchTerm");
// const queryString =
//   "q=" + encodeURIComponent("GitHub Octocat in: readme user:defunkt");

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM ready");
  fetch("https://api.github.com/zen")
    .then((res) => res.text())
    .then((message) => {
      document.querySelector("h1").textContent = message;
    });
});

btn1.addEventListener("click", (e) => {
  const val = searchTerm.value;
  const queryString = url + "?q=" + encodeURIComponent(val);
  console.log(queryString);
  fetch(queryString)
    .then((res) => res.json())
    .then((data) => {
      outputArray2(data);
    })
    .catch((error) => {
      console.log("Fetch Problem : " + error.message);
    });
});

function outputArray(data) {
  console.log(data);
  data.forEach((element) => {
    outputContenttoPage(element);
    output.innerHTML += "<hr>";
  });
}

function outputArray2(data) {
  console.log(data.items);
  if (data.items.length > 0) {
    data.items.forEach((element) => {
      outputContenttoPage(element);
      output.innerHTML += "<hr>";
    });
  }
}

function outputContenttoPage(data) {
  console.log(data);
  //   let html = `${data.name}`;
  let html = `${data["name"]}<br> 
  ${data["id"]}<br> 
  ${data["owner"]["id"]}<br> 
  <a href="${data["html_url"]}" target="_blank">${data["html_url"]}</a><br>`;
  output.innerHTML += html;
}
