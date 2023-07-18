const divBienvenida = document.getElementById("divNombre");

let nombre = document.getElementById("inputNombre");

let enviar = document.getElementById('enviar');

function bienvenida(name) {
  let saludo = createElement("p");
  if (name == !"" && name == !null) {
    saludo.innerText = `{Bienvenido ${name}}`;
    return divBienvenida.append(saludo);
  } else{
    return saludo.innerText = 'Ingreso inválido'
  }
}

enviar.addEventListener('click', bienvenida)

const divButton = document.getElementById("divButton");
const play = document.getElementById("play");
play.addEventListener("click", empiezaElJuego);

function empiezaElJuego() {
  let num = Math.round(Math.random() * 10);
  let referencia = document.createElement("p");
  switch (num) {
    case 0:
      referencia.innerText = "Y si te lo pide Roman?";
      return divButton.append(referencia);
      break;
    case 1:
      referencia.innerText = "Oportuncrisis!!";
      return divButton.append(referencia);
      break;
    case 2:
      referencia.innerText = "Va en contramano Rosalía";
      return divButton.append(referencia);
      break;
    case 3:
      referencia.innerText = "Clarita la cuenta";
      return divButton.append(referencia);
      break;
    case 4:
      referencia.innerText = "Usted no puede decir semejante barbaridad";
      return divButton.append(referencia);
      break;
    case 5:
      referencia.innerText = "Miameeeee";
      return divButton.append(referencia);
      break;
    case 6:
      referencia.innerText = "Cutucutillo";
      return divButton.append(referencia);
      break;
    case 7:
      referencia.innerText = "Anda pa´ ya bob@";
      return divButton.append(referencia);
      break;
    case 8:
      referencia.innerText = "Messirve";
      return divButton.append(referencia);
      break;
    case 9:
      referencia.innerText = "No me quemes";
      return divButton.append(referencia);
      break;
    case 10:
      referencia.innerText = "Vamoooo neeeeewell´s";
      return divButton.append(referencia);
      break;
    default:
      referencia.innerText = "Seguí participando";
      return divButton.append(referencia);
  }
}
