const fs = require("fs");

/*
 Funkcja, która pobiera dane z pliku tekstowego i przekształca wynik na obiekt
    @param players Dane graczy
    @param filename Ścieżka pliku tekstowego z danymi wejściowymi
 */
const getFile = (players, filename) => {
  let file = fs
    .readFileSync(filename, "utf8", (err, data) => {
      return data;
    })
    .split("\n");

  for (let i = 0; i < file.length - 1; i = i + 2) {
    file[i] = file[i].replace('\r','');
    file[i+1] = file[i+1].replace('\r','');

    players.push({
      name: file[i],
      totalScore: 0,
      scores: file[i + 1].split(",").map(Number)
    });
  }
};

module.exports = getFile;
