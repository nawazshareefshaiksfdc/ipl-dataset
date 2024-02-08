const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/MatchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/MatchesWonByEachTeam");
const extraRunsConcenedByEachTeamIn2016 = require("./ipl/ExtraRunsConcenedByEachTeamIn2016")
const topTenEconomicalBowlersIn2015 = require("./ipl/TopTenEconomicalBowlersIn2015")
const matchesWonByEachTeamVsVenue = require("./ipl/MatchesWonByEachTeamVsVenue")
const matches_file = "./data/matches.csv";
const deliveries_file = "./data/deliveries.csv";
const json_file = "./public/data.json";
function main() {
  csv()
    .fromFile(matches_file)
    .then(matches => {
      let result1 = matchesPlayedPerYear(matches);
      let result2 = matchesWonByEachTeam(matches);
      console.log(result2);
      csv()
        .fromFile(deliveries_file)
        .then(deliveries => {
          let result3 = extraRunsConcenedByEachTeamIn2016(matches, deliveries);
          let result4 = topTenEconomicalBowlersIn2015(matches, deliveries);
          let result5 = matchesWonByEachTeamVsVenue(matches);
          saveMatchesPlayedPerYear(result1, result2, result3, result4, result5);
        });
    });
}
function saveMatchesPlayedPerYear(result1, result2, result3, result4, result5) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchesWonByEachTeam: result2,
    extraRunsConcenedByEachTeamIn2016: result3,
    topTenEconomicalBowlersIn2015: result4,
    matchesWonByEachTeamVsVenue: result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(json_file, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main();