const loginEmail = document.querySelector("#e-mail");
const loginPassword = document.querySelector("#password");
const loginButton = document.querySelector(".btn-submit");
const submitButton = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const textArea = document.querySelector('#textArea');
const counter = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');
const select = document.querySelector('#house');
const formContent = document.querySelector('.form-content');
const sandwichIcon = document.querySelector('.icon');
const loginInput = document.querySelector(".trybewarts-login");

sandwichIcon.addEventListener('click', () => {
  loginInput.classList.toggle('login-active')
})

function checkLogIn() {
  console.log(typeof loginPassword.value);
  console.log(loginEmail.value);
  if (
    loginEmail.value === "tryber@teste.com" &&
    loginPassword.value === "123456"
  ) {
    alert("Hi, Tryber!");
  } else {
    alert("Wrong e-mail or password");
  }
}

loginButton.addEventListener("click", checkLogIn);

function checkAgreement() {
  if (agree.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled')
  }
}

agree.addEventListener('click', checkAgreement);

function countDown() {
  const characters = textArea.value.length;
  let myCounter = 500;
  if (textArea.value.length !== 0) {
    counter.innerHTML = myCounter - characters;
  } else {
    counter.innerHTML = 500;
  }
}

textArea.addEventListener('keyup', countDown);

function createFullName() {
  const name = document.querySelector("#input-name");
  const lastName = document.querySelector("#last-name");
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${name.value} ${lastName.value}`;
  formContent.appendChild(fullName);
}

function createEmail() {
  const email = document.querySelector("#input-email");
  const myEmail = document.createElement('p');
  myEmail.innerText = `Email: ${email.value}`;
  formContent.appendChild(myEmail);
}

function createHouse() {
  const selectedHouse = select.options[select.selectedIndex];
  const house = document.createElement('p');
  house.innerText = `Casa: ${selectedHouse.value}`;
  formContent.appendChild(house);
}

function createFamily() {
  const selectedFamily = document.querySelector('input[name=family]:checked');
  const family = document.createElement('p');
  family.innerText = `Família: ${selectedFamily.value}`;
  formContent.appendChild(family);
}

function createSubjects() {
  const selectedSubjects = document.querySelectorAll(".subject:checked");
  const subjects = [];
  for (let i = 0; i < selectedSubjects.length; i += 1) {
    subjects.push(selectedSubjects[i].value);
  }
  const mySubjects = document.createElement('p');
  mySubjects.innerText = `Matérias: ${subjects.join(', ')}`;
  formContent.appendChild(mySubjects);
}

function createRating() {
  const selectedRate = document.querySelector('input[name=rate]:checked');
  const rate = document.createElement('p');
  rate.innerText = `Avaliação: ${selectedRate.value}`;
  formContent.appendChild(rate);
}

function createComment() {
  const myComment = document.createElement('p');
  myComment.innerHTML = `Observações: ${textArea.value}`;
  formContent.appendChild(myComment);
}

function submit(e) {
  e.preventDefault();
  createFullName();
  createEmail();
  createHouse();
  createFamily();
  createSubjects();
  createRating();
  createComment();
  form.innerHTML = '';
  form.style.width = '1px';
}


submitButton.addEventListener('click', submit);
