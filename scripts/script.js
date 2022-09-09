let btnSubmit = document.querySelector(".btn-submit");
let btnRating = document.querySelectorAll(".btnRate");

let btnOne = document.getElementById("one");
// console.log(btnOne.innerHTML)

let Rate = document.querySelector(".rating-card");

let Thanks = document.querySelector(".thanks-card");
let Res = document.querySelector(".result");

for (let btnRate of btnRating) {
  btnRate.addEventListener("focus", () => {
    btnSubmit.addEventListener("click", () => {
      Rate.classList.add("rating-disabled");
      Thanks.classList.remove("thanks-disabled");
      Res.innerHTML = btnRate.innerHTML;
    });
  });
}
