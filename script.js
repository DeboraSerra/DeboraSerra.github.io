let links = document.querySelector('#my-projects');

let projectLink = [
  "https://deboraserra.github.io/Project-lessons-learned/project-block3.html",
  "https://deboraserra.github.io/Project-pixel-art/index.html",
];
let projectText = [
  'Project Lessons Learned',
  'Project Pixel Art',
]

for (let i = 0; i < projectLink.length; i += 1) {
  let list = document.createElement('li');
  let anchor = document.createElement('a');
  let reference = projectLink[i];
  anchor.href = reference;
  anchor.target = '_black';
  anchor.innerText = projectText[i];
  list.appendChild(anchor);
  links.appendChild(list);
}