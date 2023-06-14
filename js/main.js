let header = document.querySelector("header");
let imge = document.querySelector("header .title img");
let background = ["#bca457", "#8497a9", "#464542", "#a69985", "#b20000"];
let mobaile = ["1.png", "2.png", "3.png", "4.png", "5.png"];
let AllMobail = document.querySelectorAll("header .mobails img");
let links = document.querySelectorAll("header .main ul li a");
// let backgroundRandom = () => {
//   setInterval(() => {
//     let bac = Math.floor(Math.random() * background.length);
//     header.style.background = background[bac];
//   }, 5000);
// };
// backgroundRandom();
// let open = document.querySelector(".open");
// let ImgeRandom = () => {
//   setInterval(() => {
//     let img = Math.floor(Math.random() * mobaile.length);
//     imge.src = "../img/" + mobaile[img];
//   }, 5000);
// };
// ImgeRandom();
AllMobail.forEach((e) => {
  e.addEventListener("click", (ele) => {
    imge.src = ele.target.src;
    header.style.background = ele.target.dataset.color;
  });
});

let list = document.querySelector("header .main i ");

list.onclick = () => {
  document.querySelector("header .main ul ").classList.toggle("open");
};

// document.addEventListener("click", (ele) => {
//   if (ele.target !== list && ele.target !== open) {
//     console.log(ele.target);
//     document.querySelector("header .main ul ").classList.toggle("open");
//   }
// });

links.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(event.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  })
})