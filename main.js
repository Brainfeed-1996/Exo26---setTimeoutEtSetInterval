// setTimeout()
// const tempo = 3000;

// const timer01 = setTimeout(() => {
//   console.log(`Le timer setTimeout() est écoulé`);
// }, tempo);

// console.log(
//   "Le temps de la tempo setTimeout() de ${tempo} ms est en train de s'écouler"
// );

// clearTimeout(timer01);

// setInterval()
const tempo = 3000;
let i = 0;
const timer02 = setInterval(() => {
  i++;
  if (i <= 5) {
    console.log(
      `La tempo de setInterval() de ${3000} ms est en train de s'écouler`
    );
  } else {
    clearInterval(timer02);
    console.log("Je viens de faire 5 itérations");
  }
}, tempo);

console.log("Je suis en premier");
