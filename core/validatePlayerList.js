// Funkcja sprawdzająca zgodność otrzymanych danych wejściowych
const validatePlayerList = players => {
  let errors = [];

  if (!players.length) errors.push({ comment: "Tablica nie zawiera danych" });
  players.forEach(player => {
    if (player.name !== player.name.toString())
      errors.push({ comment: "Błąd w nazwie użytkownika" });
    if (player.scores.length < 12 || player.scores.length > 21)
      errors.push({ comment: "Nie poprawna liczba rzutów" });
    player.scores.forEach(score => {
      if (score < 0 || score > 10 || isNaN(score))
        errors.push({ comment: "nie poprawny format danych", score });
    });

    let shoot = 0;
    let round = 0;

    while (round < 10) {
      if (player.scores[shoot] === 10) {
        if (round === 9) {
          if (
            player.scores[shoot + 1] == null ||
            player.scores[shoot + 2] == null
          ) {
            errors.push({
              comment: "nie poprawna wartość sumy rzutów",
              scores: [player.scores[shoot + 1], player.scores[shoot + 2]]
            });
            break;
          } else if (
            player.scores[shoot + 1] < 10 &&
            player.scores[shoot + 1] + player.scores[shoot + 2] > 10
          ) {
            errors.push({
              comment: "nie poprawna wartość sumy rzutów",
              scores: [player.scores[shoot + 1], player.scores[shoot + 2]]
            });
            break;
          }
        } else shoot++;
      } else if (
        player.scores[shoot] + player.scores[shoot + 1] > 10 ||
        player.scores[shoot] + player.scores[shoot + 1] < 0
      ) {
        errors.push({
          comment: "nie poprawna wartość sumy rzutów",
          scores: [player.scores[shoot], player.scores[shoot + 1]]
        });
        break;
      } else if (
        player.scores[shoot] + player.scores[shoot + 1] === 10 &&
        player.scores[shoot + 2] == null
      ) {
        errors.push({
          comment: "nie poprawna wartość sumy rzutów",
          scores: player.scores[shoot + 2]
        });
        break;
      } else if (
        player.scores[shoot] + player.scores[shoot + 1] <= 10 &&
        player.scores[shoot] + player.scores[shoot + 1] >= 0
      )
        shoot += 2;

      round++;
    }
  });
  return errors;
};

module.exports = validatePlayerList;
