import './style.css';
import Storage from './modules/storage.js';
import API from './modules/API.js';

const storage = new Storage();
let gameId = storage.load() || '0ehWnnqlP8PtQkYB0OM0';
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

myAPI.getScores();
