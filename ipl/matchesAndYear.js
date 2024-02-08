const MatchesPerReqYear =module.exports= (matchesdata,year) => {
    let count = 0;
    for (let i = 0; i < matchesdata.length; i++) {
        if (matchesdata[i].season == year)
            count++;
    }
    console.log(count);
}
