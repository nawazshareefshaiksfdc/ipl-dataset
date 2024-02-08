const highestNumberOfAwards = module.exports = (matchesdata) => {
    const MatchesWonByEachTeam = {};
    for (let i = 0; i < matchesdata.length; i++) {
        const match = matchesdata[i];
        const winnerValue = match.winner; //winnerValue = matchesdata[i].winner
        if (!MatchesWonByEachTeam[winnerValue]) {
            MatchesWonByEachTeam[winnerValue] = 1;
        } else {
            MatchesWonByEachTeam[winnerValue]++;
        }
    }
    valueData = [];
    let customPush = (array, element) => {
        array[element] = element;
        return array;
    }
    for (const [keys, value] of Object.entries(MatchesWonByEachTeam)) {
        console.log(keys + ' : ' + value + 'matches');
    }
}