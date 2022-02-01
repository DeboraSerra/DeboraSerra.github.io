const elements = [
  document.getElementById('hour1'),
  document.getElementById('hour2'),
  document.getElementById('min1'),
  document.getElementById('min2'),
  document.getElementById('sec1'),
  document.getElementById('sec2'),
];

const update = () => {
  const date = new Date();
  const hour = ('0' + date.getHours()).slice(-2);
  const min = ('0' + date.getMinutes()).slice(-2);
  const sec = ('0' + date.getSeconds()).slice(-2);
  const time = hour + min + sec;
  elements.forEach((number, index) => {
    number.className = `time-bar n${time[index]}`
  })
}

update();
setInterval(update, 1000);