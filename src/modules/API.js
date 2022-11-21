import Storage from './storage.js';
import showScores from './showScores.js';

export default class API {
  constructor(id) {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    this.name = 'myNewGame';
    this.id = id;
  }

  getURL = () => this.url

  init = async () => {
    await fetch(`${this.url}games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.name,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const dataStr = json.result;
        const dataArr = dataStr.split(' ');
        const id = dataArr[3];

        this.id = id;

        const storage = new Storage();
        storage.save(id);
      });
  }

  getScores = async () => {
    await fetch(`${this.url}games/:${this.id}/scores/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const dataArr = json.result;
        showScores(dataArr);
      });
  }

  postScores = async (user, score) => {
    await fetch(`${this.url}games/:${this.id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const submitResult = document.querySelector('.submit-result');
        submitResult.innerHTML = json.result;
        this.getScores();
      });
  }
}
