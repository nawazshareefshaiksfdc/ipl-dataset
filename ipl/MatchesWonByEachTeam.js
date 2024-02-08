const MatchesWonByEachTeam = module.exports = (matchesdata) => {
    const MatchesWonByEachTeam = {};
    for (let i = 0; i < matchesdata.length; i++) {
        const match = matchesdata[i];
        const seasonValue = match.season;
        if (!MatchesWonByEachTeam[seasonValue]) {
            MatchesWonByEachTeam[seasonValue] = {};
        }

        const winnerTeam = match.winner;

        if (!MatchesWonByEachTeam[seasonValue][winnerTeam]) {
            MatchesWonByEachTeam[seasonValue][winnerTeam] = 1;
        } else {
            MatchesWonByEachTeam[seasonValue][winnerTeam]++;
        }
    }

    return MatchesWonByEachTeam;
};


