const strikeRateOfBatsman = module.exports = (deliveriesdata,batsmanName) =>{
  
  const batsmanData = deliveriesdata.filter(entry => entry.batsman === batsmanName);

  const totalRuns = batsmanData.reduce((sum, entry) => sum + entry.batsman_runs, 0);
  const totalBallsFaced = batsmanData.length;

  const strikeRate = (totalRuns / totalBallsFaced) * 100;
  
  console.log(`${batsmanName}'s Strike Rate: ${strikeRate.toFixed(2)}`);
  
}