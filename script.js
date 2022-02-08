let links = document.querySelector('#my-projects');

let projectLink = [
  "https://deboraserra.github.io/Project-lessons-learned/project-block3.html",
  "https://deboraserra.github.io/Project-pixel-art/index.html",
  "https://deboraserra.github.io/Project-to-do-list/index.html",
  "https://deboraserra.github.io/Project-mystery-letter/index.html",
  "https://deboraserra.github.io/Project-meme-generator/index.html",
  "https://deboraserra.github.io/Project-color-guess/index.html",
  "https://deboraserra.github.io/Project-Trybewarts/index.html",
  "https://deboraserra.github.io/Clock/index.html"
];
let projectText = [
  'Project Lessons Learned',
  'Project Pixel Art',
  'Project To Do List',
  'Project Mystery Letter',
  'Project Meme Generator',
  'Project Color Guess',
  'Project Trybewarts',
  'Clock (Personal project)',
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