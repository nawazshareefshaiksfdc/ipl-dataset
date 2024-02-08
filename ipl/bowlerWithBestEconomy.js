const bowlerWithBestEconomy = module.exports = (deliveriesdata) =>{
    const bowlersData = {};
    for (let i = 0; i < deliveriesdata.length; i++) {
      const row = deliveriesdata[i];
      const bowler = row.bowler;
      const runsConceded = parseInt(row.total_runs, 10);
      const oversBowled = parseFloat(row.over) + parseFloat(row.ball) / 6;
      
      if (!bowlersData[bowler]) {
        bowlersData[bowler] = {
          runsConceded: 0,
          oversBowled: 0,
        };
      }
  
      bowlersData[bowler].runsConceded += runsConceded;
      bowlersData[bowler].oversBowled += oversBowled;
    }
  
    const bowlersArray = Object.entries(bowlersData).map(([bowler, stats]) => ({
      bowler,
      economy: stats.runsConceded / stats.oversBowled,
    }));
  
    bowlersArray.sort((a, b) => a.economy - b.economy);
  
    for (let i = 0; i < Math.min(1, bowlersArray.length); i++) {
      const bowler = bowlersArray[0].bowler;
      const economy = bowlersArray[0].economy;
      console.log(`${bowler}: Economy - ${economy.toFixed(2)}`);
    }
}