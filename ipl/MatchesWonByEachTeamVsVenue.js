const MatchesWithVenue = module.exports = (matchesdata) => {
    let venueData = {};

    for (let i = 0; i < matchesdata.length; i++) {
        if (matchesdata[i].winner && matchesdata[i].venue) {
            const venue = matchesdata[i].venue;
            const winner = matchesdata[i].winner;

            if (!venueData[venue]) {
                venueData[venue] = {};
            }

            if (!venueData[venue][winner]) {
                venueData[venue][winner] = 1;
            } else {
                venueData[venue][winner]++;
            }
        }
    }
    const formattedData = {};
    for (const venue in venueData) {
        formattedData[venue] = venueData[venue];
    }
    return formattedData;
}
