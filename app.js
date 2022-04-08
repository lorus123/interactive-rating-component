const rbtn = document.querySelectorAll(".rt");
const sbtn = document.querySelector(".btn");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

let res = "hi";

function oclick() {
  card1.classList.add("hide");
  card2.classList.remove("hide");
}
sbtn.addEventListener("click", oclick);

rbtn.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("ok");
    rbtn.forEach(function (item) {
      item.removeAttribute("id");
    });
    item.setAttribute("id", "active");
    res = document.querySelector("#active").textContent;
    console.log(res);
    document.querySelector(".rv").textContent = res;
  });
});
