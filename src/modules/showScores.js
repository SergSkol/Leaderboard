const showScores = (arr) => {
  const scoresListItems = document.querySelector('.scores-list-items');
  scoresListItems.innerHTML = '';
  arr.forEach((item) => {
    const scoresItem = document.createElement('li');
    scoresItem.classList.add('scores-list-item');
    scoresItem.innerHTML = `${item.user}: ${item.score}`;
    scoresListItems.appendChild(scoresItem);
  });
};

export default showScores;
