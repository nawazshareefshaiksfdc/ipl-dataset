const eachTeamWonTheMatchAndToss = module.exports = (matchesdata) =>{
    const matchesPerYear = {};

    for (let i = 0; i < matchesdata.length; i++) {
        const match = matchesdata[i];
        const TossWinner = match.toss_winner;

        if (!matchesPerYear[TossWinner]) {
            matchesPerYear[TossWinner] = 1;
        } else {
            matchesPerYear[TossWinner]++;
        }
    }

    for (const toss_winner in matchesPerYear) {
        console.log(`${toss_winner}: ${matchesPerYear[toss_winner]} matches`);
    }
}
