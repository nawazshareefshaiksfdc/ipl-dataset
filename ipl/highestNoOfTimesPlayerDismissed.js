const dismissalsCount = module.exports = (deliveriesdata, player) => {
    const dismissalCount = deliveriesdata.reduce((count, match) => {
        // Check if player_dismissed is not null or undefined
        return count + ((match.player_dismissed && match.player_dismissed === player) ? 1 : 0);
    }, 0);
    
    console.log(`${player} got dismissed ${dismissalCount} times.`);
}
