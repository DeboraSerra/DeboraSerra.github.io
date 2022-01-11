const body = document.querySelector('body');
const header = document.querySelector('header');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const article = document.querySelector('article');
const sections = document.querySelectorAll('section');
const paragraph = document.querySelectorAll('p');
const footer = document.querySelector('footer');
const link = document.querySelector('a');
const backgroundColor = document.querySelector('#background-color');
const textColor = document.querySelector('#text-color');
const fontSize = document.querySelector('#font-size');
const lineHeight = document.querySelector('#line-height');
const fontFamily = document.querySelector('#font-family')
const styleContainer = document.querySelector('.container');
const styleTitle = document.querySelector('h3');

const changeBackground = () => {
  const selectedColor = backgroundColor.value;
  body.style.backgroundColor = selectedColor;
  header.style.backgroundColor = selectedColor;
  title.style.backgroundColor = selectedColor;
  description.style.backgroundColor = selectedColor;
  article.style.backgroundColor = selectedColor;
  sections.forEach((item) => item.style.backgroundColor = selectedColor);
  paragraph.forEach((item) => item.style.backgroundColor = selectedColor);
  footer.style.backgroundColor = selectedColor;
  link.style.backgroundColor = selectedColor;
  styleContainer.style.backgroundColor = selectedColor;
  styleTitle.style.backgroundColor = selectedColor;
  localStorage.setItem('backgroundColor', selectedColor);
}

backgroundColor.addEventListener("input", changeBackground);

const changeColor = () => {
  const selectedColor = textColor.value;
  body.style.color = selectedColor;
  header.style.color = selectedColor;
  title.style.color = selectedColor;
  description.style.color = selectedColor;
  article.style.color = selectedColor;
  sections.forEach((item) => (item.style.color = selectedColor));
  paragraph.forEach((item) => (item.style.color = selectedColor));
  footer.style.color = selectedColor;
  link.style.color = selectedColor;
  styleContainer.style.color = selectedColor;
  styleTitle.style.color = selectedColor;
  localStorage.setItem("color", selectedColor);
}

textColor.addEventListener('input', changeColor);

const changeFontSize = () => {
  const selectedNumber = fontSize.value;
  body.style.fontSize = selectedNumber + "px";
  header.style.fontSize = selectedNumber + "px";
  title.style.fontSize = selectedNumber + "px";
  description.style.fontSize = selectedNumber + "px";
  article.style.fontSize = selectedNumber + 'px';
  sections.forEach((item) => (item.style.fontSize = selectedNumber + "px"));
  paragraph.forEach((item) => (item.style.fontSize = selectedNumber + "px"));
  footer.style.fontSize = selectedNumber + "px";
  link.style.fontSize = selectedNumber + "px";
  styleContainer.style.fontSize = selectedNumber + "px";
  styleTitle.style.fontSize = selectedNumber + "px";
  localStorage.setItem("fontSize", selectedNumber);
}

fontSize.addEventListener('input', changeFontSize);

const changeLineHeight = () => {
  const selectedNumber = lineHeight.value;
  body.style.lineHeight = selectedNumber + "px";
  header.style.lineHeight = selectedNumber + "px";
  title.style.lineHeight = selectedNumber + "px";
  description.style.lineHeight = selectedNumber + "px";
  article.style.lineHeight = selectedNumber + "px";
  sections.forEach((item) => (item.style.lineHeight = selectedNumber + "px"));
  paragraph.forEach((item) => (item.style.lineHeight = selectedNumber + "px"));
  footer.style.lineHeight = selectedNumber + "px";
  link.style.lineHeight = selectedNumber + "px";
  styleContainer.style.lineHeight = selectedNumber + "px";
  styleTitle.style.lineHeight = selectedNumber + "px";
  localStorage.setItem("lineHeight", selectedNumber);
}

lineHeight.addEventListener('input', changeLineHeight);

const changeFontFamily = () => {
  const selectedFont = fontFamily.options[fontFamily.selectedIndex].value;
  if (selectedFont) {
    body.style.fontFamily = selectedFont;
    header.style.fontFamily = selectedFont;
    title.style.fontFamily = selectedFont;
    description.style.fontFamily = selectedFont;
    article.style.fontFamily = selectedFont;
    sections.forEach((item) => (item.style.fontFamily = selectedFont));
    paragraph.forEach((item) => (item.style.fontFamily = selectedFont));
    footer.style.fontFamily = selectedFont;
    link.style.fontFamily = selectedFont;
    styleContainer.style.fontFamily = selectedFont;
    styleTitle.style.fontFamily = selectedFont;
    localStorage.setItem("fontFamily", selectedFont);
  }
}

fontFamily.addEventListener('input', changeFontFamily);

window.onload = () => {
  const backgroundColorStorage = localStorage.getItem('backgroundColor');
  const colorStorage = localStorage.getItem('color');
  const textSizeStorage = localStorage.getItem('fontSize');
  const lineHeightStorage = localStorage.getItem('lineHeight');
  const fontFamilyStorage = localStorage.getItem('fontFamily');
  backgroundColor.value = backgroundColorStorage;
  changeBackground();
  textColor.value = colorStorage;
  changeColor();
  fontSize.value = textSizeStorage;
  changeFontSize();
  lineHeight.value = lineHeightStorage;
  changeLineHeight();
  fontFamily.options[fontFamily.selectedIndex].value = fontFamilyStorage;
  changeFontFamily();
};