const count = document.querySelector("#number");
const add = document.querySelector("#add");
const reset = document.querySelector("#reset");
const sub = document.querySelector("#sub");

add.addEventListener("click", () => {
  count.innerHTML++;
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  }
});
sub.addEventListener("click", () => {
  count.innerHTML--;
  if (count.innerHTML < 0) {
    count.style.color = "red";
  }
});
reset.addEventListener("click", () => {
  count.innerHTML = 0;
  if (count.innerHTML == 0) {
    count.style.color = "white";
  }
});
///////////////////////////////////////////////////////////
// const count = document.querySelector(".number");
// const btns = document.querySelector(".btns");

// btns.addEventListener("click", (e) => {
//   if (e.target.classList.contains("add")) {
//     count.innerHTML++;
//     setColor();
//   }
//   if (e.target.classList.contains("sub")) {
//     count.innerHTML--;
//     setColor();
//   }
//   if (e.target.classList.contains("reset")) {
//     count.innerHTML = 0;
//     setColor();
//   }
// });
// function setColor() {
//   if (count.innerHTML > 0) {
//     count.style.Color = "green";
//   } else if (count.innerHTML < 0) {
//     count.style.Color = "Red";
//   } else {
//     count.style.Color = "white";
//   }
// }
