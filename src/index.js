import './style.css';
import Storage from './modules/storage.js';
import API from './modules/API.js';

const storage = new Storage();
let gameId = storage.load();
const myAPI = new API(gameId);
if (!gameId) {
  gameId = myAPI.init();
}

const formUser = document.querySelector('#user');
const formScore = document.querySelector('#score');
const submitBtn = document.querySelector('#submit-button');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myAPI.postScores(formUser.value, formScore.value);
});

const refreshBtn = document.querySelector('#refresh-button');
refreshBtn.addEventListener('click', () => {
  myAPI.getScores();
});

const settingsOpenBtn = document.querySelector('.header-settings-open');
settingsOpenBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');
  const newId = document.querySelector('#newId');
  newId.value = gameId;
});

const settingsCloseBtn = document.querySelector('.popup-settings-close');
settingsCloseBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');
});

const settingsSaveBtn = document.querySelector('.popup-settings-save');
settingsSaveBtn.addEventListener('click', () => {
  const popupSettings = document.querySelector('.popup-settings');
  popupSettings.classList.toggle('hide');

  const newId = document.querySelector('#newId');
  gameId = newId.value;
  myAPI.id = gameId;
  storage.save(gameId);
  myAPI.getScores();
});

myAPI.getScores();
