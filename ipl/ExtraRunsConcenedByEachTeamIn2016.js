const ExtraRunsConcenedByEachTeamIn2016 = module.exports = (matchesData, deliveriesData) => {
    var extraRunsSum = {};

    deliveriesData.forEach(function (delivery) {
        var matchId = delivery.match_id;
        var match = matchesData.find(function (match) {
            return match.id === matchId;
        });

        if (match && match.season === "2016") {
            var bowlingTeam = delivery.bowling_team;
            var extraRuns = parseInt(delivery.extra_runs);

            extraRunsSum[bowlingTeam] = (extraRunsSum[bowlingTeam] || 0) + extraRuns;
        }
    });

    return extraRunsSum;
};