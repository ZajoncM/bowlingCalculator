const getFile = require('./core/fileLoader');
const getTotalScore = require('./core/scoreCalculator');
const validatePlayerList = require('./core/validatePlayerList');
const players = require('./data/data');
const showResult = require('./core/showResult');

getFile(players, './data.txt');

const errors = validatePlayerList(players);

if(errors.length){
    console.table(errors);
}else{
    getTotalScore(players);
    showResult(players);
}



