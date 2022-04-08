let links = document.querySelector('#my-projects');
const closeBtn = document.querySelector('.close-btn');
const popUp = document.querySelector('.pop-up');

let projectLink = [
  "https://deboraserra.github.io/Project-lessons-learned/project-block3.html",
  "https://github.com/DeboraSerra/DeboraSerra.github.io/tree/main/Project-zoo-functions",
  "https://deboraserra.github.io/Project-pixel-art/index.html",
  "https://deboraserra.github.io/Project-to-do-list/index.html",
  "https://deboraserra.github.io/Project-mystery-letter/index.html",
  "https://deboraserra.github.io/Project-meme-generator/index.html",
  "https://deboraserra.github.io/Project-color-guess/index.html",
  "https://deboraserra.github.io/Project-Trybewarts/index.html",
  "https://deboraserra.github.io/Clock/index.html",
  "https://github.com/DeboraSerra/DeboraSerra.github.io/tree/main/Project-zoo-functions",
  "https://deboraserra.github.io/Project-shopping-cart/index.html",
  "https://deboraserra.github.io/Harry-Potter/index.html",
  "https://deboraserra.github.io/project-solar-system/",
  "https://deboraserra.github.io/project-tryunfo/",
  "https://deboraserra.github.io/stopwatch/",
];
let projectText = [
  'Project Lessons Learned',
  'Project Playground Functions',
  'Project Pixel Art',
  'Project To Do List',
  'Project Mystery Letter',
  'Project Meme Generator',
  'Project Color Guess',
  'Project Trybewarts',
  'Clock (Personal project)',
  'Project Zoo Functions',
  'Project Shopping Cart',
  'Harry Potter Characters (Personal project)',
  'Project Solar System',
  'Project Tryunfo',
  'Stopwatch (project developed as a challenge)',
]

for (let i = 0; i < projectLink.length; i += 1) {
  let list = document.createElement('li');
  let anchor = document.createElement('a');
  let reference = projectLink[i];
  anchor.href = reference;
  anchor.target = '_blank';
  anchor.innerText = projectText[i];
  list.appendChild(anchor);
  links.appendChild(list);
}

closeBtn.addEventListener('click', () => {
  popUp.style.display = 'none';
});
