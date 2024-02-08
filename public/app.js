function fetchAndVisualizeData() {
    fetch("./data.json")
        .then(r => r.json())
        .then(visualizeData);
}
fetchAndVisualizeData();
function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data);
    visualizeMatchesWonByEachTeam(data);
    visualizeExtraRunsConcenedByEachTeamIn2016(data);
    visualizeTopTenEconomicalBowlersIn2015(data);
    visualizeMatchesWonByEachTeamVsVenue(data);
    return;
}
function visualizeMatchesPlayedPerYear(data) {
    const seriesData1 = [];
    for (let season in data.matchesPlayedPerYear) {
        seriesData1.push([season, data.matchesPlayedPerYear[season]]);
    }
    Highcharts.chart("container1", {
        chart: {
            type: "column"
        },
        title: {
            text: "Total number of matches played each year"
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">ipl</a>'
        },
        xAxis: {
            type: "category",
            labels: {
                rotation: -45,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: "Matches"
            }
        },
        legend: {
            enabled: !1
        },
        tooltip: {
            pointFormat: "Matches: <b>{point.y:0.0f} </b>"
        },
        series: [{
            name: "Seasons",
            data: seriesData1,
            dataLabels: {
                enabled: !0,
                rotation: 0,
                color: "#FFFFFF",
                align: "center",
                y: 25,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        }]
    })
}
function visualizeMatchesWonByEachTeam(data) {
    const formatedData = formater(data.matchesWonByEachTeam)
    const t = []
    for (let da in formatedData) {
        if (da == "") {
            const da1 = "no result"
            t.push({ name: da1, data: formatedData[da] })
        }
        else {
            t.push({ name: da, data: formatedData[da] })
        }
    }
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Matches Won By Each Team Over All Years'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
            categories: Object.keys(data.matchesWonByEachTeam),
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches won'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: t
    });
}
function formater(e) {
    var t = {}, a = -1;
    for (var n in e) {
        for (var o in a++, e[n]) {
            if (!t.hasOwnProperty(o)) {
                t[o] = [];
                for (var r = 0; r < a; r++)
                    t[o].push(0)
            }
            t[o].push(e[n][o])
        }
        for (o in t)
            t[o].length < a + 1 && t[o].push(0)
    }
    return t
}
function visualizeExtraRunsConcenedByEachTeamIn2016(data) {
    const seriesData1 = [];
    for (let team in data.extraRunsConcenedByEachTeamIn2016) {
        seriesData1.push([team, data.extraRunsConcenedByEachTeamIn2016[team]]);
    }
    Highcharts.chart("container3", {
        chart: {
            type: "column"
        },
        title: {
            text: "Extra runs conceded by each team in 2016"
        },
        subtitle: {
            text: 'Source: <a href="http://ipl.com">ipl</a>'
        },
        xAxis: {
            type: "category",
            labels: {
                rotation: -45,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: "Extra Runs"
            }
        },
        legend: {
            enabled: !1
        },
        tooltip: {
            pointFormat: "Extra runs: <b>{point.y:0.0f} </b>"
        },
        series: [{
            name: "Bowlers",
            data: seriesData1,
            dataLabels: {
                enabled: !0,
                rotation: 0,
                color: "#FFFFFF",
                align: "center",
                y: 25,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        }]
    })
}
function visualizeTopTenEconomicalBowlersIn2015(data) {
    const seriesData1 = [];
    for (let economy in data.topTenEconomicalBowlersIn2015) {
        seriesData1.push([economy, data.topTenEconomicalBowlersIn2015[economy]]);
    }
    Highcharts.chart("container4", {
        chart: {
            type: "column"
        },
        title: {
            text: "Top Economical Bowlers in 2015 season"
        },
        subtitle: {
            text: 'Source: <a href="http://ipl.com">ipl</a>'
        },
        xAxis: {
            type: "category",
            labels: {
                rotation: -45,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: "Economy"
            }
        },
        legend: {
            enabled: !1
        },
        tooltip: {
            pointFormat: "Economy: <b>{point.y:0.2f} </b>"
        },
        series: [{
            name: "Bowlers",
            data: seriesData1,
            dataLabels: {
                enabled: !0,
                rotation: 0,
                color: "#FFFFFF",
                align: "center",
                format: "{point.y:.2f}",
                y: 25,
                style: {
                    fontSize: "13px",
                    fontFamily: "Verdana, sans-serif"
                }
            }
        }]
    })
}
function visualizeMatchesWonByEachTeamVsVenue(data) {
    var i = formater(data.matchesWonByEachTeamVsVenue)
        , s = [];
    for (team in i) {
        var c;
        (c = {}).name = team,
            c.data = i[team],
            s.push(c)
    }
    Highcharts.chart("container5", {
        chart: {
            type: "bar"
        },
        title: {
            text: "Story: Matches Won by each team per venue"
        },
        xAxis: {
            categories: Object.keys(data.matchesWonByEachTeamVsVenue)
        },
        yAxis: {
            min: 0,
            title: {
                text: "Matches won vs stadium"
            }
        },
        legend: {
            reversed: !0
        },
        plotOptions: {
            series: {
                stacking: "normal"
            }
        },
        series: s
    })
}