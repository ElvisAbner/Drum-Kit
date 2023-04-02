const drums = [{
    key: 'w',
    sound: new Audio('sounds/tom-1.mp3')
  },
  {
    key: 'a',
    sound: new Audio('sounds/tom-2.mp3')
  },
  {
    key: 's',
    sound: new Audio('sounds/tom-3.mp3')
  },
  {
    key: 'd',
    sound: new Audio('sounds/tom-4.mp3')
  },
  {
    key: 'j',
    sound: new Audio('sounds/snare.mp3')
  },
  {
    key: 'k',
    sound: new Audio('sounds/crash.mp3')
  },
  {
    key: 'l',
    sound: new Audio('sounds/kick-bass.mp3')
  }
];

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll('.drum').forEach((drum, i) => {
  drum.addEventListener('click', () => {
    playSound(drums[i].sound);
  });
});

document.addEventListener('keydown', (event) => {
  const drum = drums.find((d) => d.key === event.key);
  if (drum) {
    playSound(drum.sound);
  }
});