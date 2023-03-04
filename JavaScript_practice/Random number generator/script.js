const number = document.querySelector(".num");
const btn = document.querySelector(".Generator");
btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 10);
  number.innerHTML = randomNumber;
});

/////////////////
// const generator = () => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   number.innerHTML = randomNumber;
// };
// btn.addEventListener("click", generator);
