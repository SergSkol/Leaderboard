export default class Storage {
  constructor() {
    this.storageKey = 'Leaderboard';
  }

  save = (data) => {
    if (typeof data !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  };

  load = () => {
    const json = localStorage.getItem(this.storageKey);
    if (typeof json === 'undefined') {
      return null;
    }
    const data = JSON.parse(json);
    return data;
  };
}
