const fs = require("fs");

/*
 Funkcja, która pobiera dane z pliku tekstowego i przekształca wynik na obiekt
    @param players Dane graczy
    @param filename Ścieżka pliku tekstowego z danymi wejściowymi
 */
const getFile = (players, filename) => {
  const file = fs
    .readFileSync(filename, "utf8", (err, data) => {
      return data;
    })
    .split("\r\n");

  for (let i = 0; i < file.length - 1; i = i + 2) {
    players.push({
      name: file[i],
      totalScore: 0,
      scores: file[i + 1].split(",").map(Number)
    });
  }
};

module.exports = getFile;
