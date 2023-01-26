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

btn1.addEventListener("click", (e) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      outputArray(data);
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

function outputContenttoPage(data) {
  console.log(data);
  //   let html = `${data.name}`;
  let html = `${data["name"]}<br> ${data["id"]}<br> ${data["owner"]["id"]}<br> ${data["language"]}<br>`;
  output.innerHTML += html;
}
