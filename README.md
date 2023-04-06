# Drum-Kit
Drum Kit created using Javascript

Drum Kit created using Javascript

Here's a step-by-step explanation of the JavaScript code:

const drums = [ { key: 'w', sound: new Audio('sounds/tom-1.mp3') }, { key: 'a', sound: new Audio('sounds/tom-2.mp3') }, { key: 's', sound: new Audio('sounds/tom-3.mp3') }, { key: 'd', sound: new Audio('sounds/tom-4.mp3') }, { key: 'j', sound: new Audio('sounds/snare.mp3') }, { key: 'k', sound: new Audio('sounds/crash.mp3') }, { key: 'l', sound: new Audio('sounds/kick-bass.mp3') }, ];

// This creates an array of objects, where each object represents a drum element on the page. The object has two properties: key, which is the keyboard key that triggers the sound, and sound, which is an Audio object that represents the sound to be played.

function playSound(sound) { sound.currentTime = 0; sound.play(); }

//This function takes an Audio object as a parameter, sets its currentTime property to 0 (so that it always starts from the beginning), and plays the sound.

document.querySelectorAll('.drum').forEach((drum, i) => { drum.addEventListener('click', () => { playSound(drums[i].sound); drum.classList.add('pressed'); setTimeout(() => { drum.classList.remove('pressed'); }, 100); }); });

//This code selects all elements with the .drum class on the page, and adds a click event listener to each one. When a drum element is clicked, it triggers the playSound function with the corresponding sound from the drums array. It also adds the .pressed class to the element, which triggers a visual feedback animation (as defined in the CSS code). Finally, it removes the .pressed class after a short delay (100ms) using the setTimeout function.

document.addEventListener('keydown', (event) => { const drum = drums.find((d) => d.key === event.key); if (drum) { playSound(drum.sound); const button = document.querySelector(.drum[data-key="${drum.key}"]); button.classList.add('pressed'); setTimeout(() => { button.classList.remove('pressed'); }, 100); } });

//This code adds a keydown event listener to the document, which triggers whenever a key on the keyboard is pressed. It uses the find method to search for a drum object in the drums array that has a key property matching the pressed key. If a match is found, it triggers the playSound function with the corresponding sound from the drums array. It also selects the corresponding drum element on the page using a CSS selector, and adds the .pressed class to it (which triggers the visual feedback animation). Finally, it removes the .pressed class after a short delay (100ms) using the setTimeout function.
