function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  // paragraph
  let p = document.createElement('p');
  p.textContent = ('Welcome Holberton!');
  document.body.appendChild(p);
  // spooky button
  let spookyBtn = document.createElement('button');
  spookyBtn.textContent = 'Spooky';
  spookyBtn.onclick = spooky;
  document.body.appendChild(spookyBtn);
  // dark omde button
  let darkModeBtn = document.createElement('button');
  spookyBtn.textContent = 'Dark mode';
  spookyBtn.onclick = darkMode;
  document.body.appendChild(darkModeBtn);
  // scream mode button
  let ScreamModeBtn = document.createElement('button');
  spookyBtn.textContent = 'Scream mode';
  spookyBtn.onclick = screamMode;
  document.body.appendChild(ScreamModeBtn); 
}

main();