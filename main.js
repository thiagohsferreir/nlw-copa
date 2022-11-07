// let time1 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
// let time2 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
// let time3 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
// let time4 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
// let time5 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
// let time6 = prompt(
//   "bcolumbia, brazil, camaroes, colombia, comoros, hungary, india, japan, jordan"
// );
let body = document.querySelector('body')
function azul(){
  body.setAttribute("class", "blue")
}
function verde(){
  body.setAttribute("class", "green")
}
function amarelo(){
  body.setAttribute("class", "")
}
function createGame(player1, player2, hora) {
  //function dentro de outra, esse é o "game"
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hora}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
    </li>
    `;
}

let delay = 0;
function createCard(date, day, game) {
  delay = delay + 0.5
  //uma function que irá criar uma cards dinamicamente
  return `
    <div class="card" style="animation-delay:${delay}s;">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${game}
        </ul>
      </div>
      `;
}
document.querySelector(".cards").innerHTML =
  createCard(
    //usando a fucntion de criação de cards
    "24/11", //valor1
    "quinta", //valor2
    createGame("brazil", "india", "08:00") // criando uma função dentro do parametro "game"
  ) +
  createCard("28/11", "segunda", createGame("brazil", "brazil", "12:00")) +
  createCard("02/12", "sexta", createGame("brazil", "brazil", "21:00"));
