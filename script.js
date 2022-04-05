const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');
const checkAccept = document.querySelector('#agreement');
const acceptBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const familyNames = document.getElementsByName('family');
const rateNames = document.getElementsByName('rate');
const subjects = document.querySelectorAll('.subject');
acceptBtn.disabled = true;

document.querySelector('#house').addEventListener('click', (event) => {
  event.target.style.color = 'black';
});

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const loginValid = 'tryber@teste.com';
  const passwordValid = '123456';
  if (
    loginEmail.value === loginValid && loginPassword.value === passwordValid
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAccept.addEventListener('change', (event) => {
  const elemento = event.target;
  if (elemento.checked === true) {
    acceptBtn.disabled = false;
  } else {
    acceptBtn.disabled = true;
  }
});

function decrementa() {
  let valor = 500;
  valor -= textArea.value.length;
  counter.innerText = valor;
}
textArea.addEventListener('keyup', decrementa);
textArea.addEventListener('keydown', decrementa);

function createElement(type, qual, dados) {
  const element = document.createElement(type);
  element.innerText = `${qual}: ${dados}`;
  element.className = 'form-result';
  return element;
}

function comma(array) {
  let palavra = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index + 1 === array.length) {
      palavra += array[index];
    } else {
      palavra += `${array[index]}, `;
    }
  }
  return palavra;
}

function subjectsSelecteds() {
  const all = [];
  subjects.forEach((element) => {
    if (element.checked === true) {
      all.push(element.value);
    }
  });
  return comma(all);
}

function radiosSelect(array) {
  let value;
  array.forEach((element) => {
    if (element.checked === true) {
      value = element.value;
    }
  });
  return value;
}

function preencheDados() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const nomeCompleto = `${nome} ${sobrenome}`;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const family = radiosSelect(familyNames);
  const materias = subjectsSelecteds();
  const avaliacao = radiosSelect(rateNames);
  const observacao = document.querySelector('#textarea').value;
  form.innerHTML = '';
  form.appendChild(createElement('div', 'Nome', nomeCompleto));
  form.appendChild(createElement('div', 'Email', email));
  form.appendChild(createElement('div', 'Casa', casa));
  form.appendChild(createElement('div', 'Família', family));
  form.appendChild(createElement('div', 'Matérias', materias));
  form.appendChild(createElement('div', 'Avaliação', avaliacao));
  form.appendChild(createElement('div', 'Observações', observacao));
}

function campo1() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  if (nome.length < 3 || sobrenome.length < 3 || email.includes('@') === false) {
    return true;
  }
  return false;
}

function campo2() {
  if (radiosSelect(familyNames) === undefined) {
    return true;
  }
  return false;
}
function campo3() {
  const casa = document.querySelector('#house').value;
  if (radiosSelect(rateNames) === undefined || casa === 'Casa' || subjectsSelecteds() === '') {
    return true;
  }
  return false;
}
function vericacaoCampo() {
  const modal = document.querySelector('#chamar-modal');
  if (campo1() === true || campo2() === true || campo3() === true) {
    modal.click();
  } else {
    preencheDados();
  }
}

acceptBtn.addEventListener('click', (event) => {
  event.preventDefault();
  vericacaoCampo();
});
