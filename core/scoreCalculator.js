// Funkcja zliczająca punkty graczy zgodnie z zasadami gry w kręgle
const getTotalScore = players => {
  players.forEach(player => {
    let shoot = 0;
    let round = 0;
    while (round < 10) {
      if (player.scores[shoot] === 10) {
        player.totalScore +=
          player.scores[shoot] +
          player.scores[shoot + 1] +
          player.scores[shoot + 2];
        shoot++;
      } else if (player.scores[shoot] + player.scores[shoot + 1] === 10) {
        player.totalScore +=
          player.scores[shoot] +
          player.scores[shoot + 1] +
          player.scores[shoot + 2];
        shoot = shoot + 2;
      } else {
        player.totalScore += player.scores[shoot] + player.scores[shoot + 1];
        shoot = shoot + 2;
      }
      round++;
    }
  });
};

module.exports = getTotalScore;
