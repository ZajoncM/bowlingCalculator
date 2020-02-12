// Funkcja wyświetlająca dane graczy w konsoli
const showResult = players => {
  players.forEach(player => {
    player.scores = player.scores.join(", ");
  });
  console.table(players);
};

module.exports = showResult;
