const request = require('request');

// var date = new Date();

// var url = 'https://stats.nba.com/stats/scoreboardV2?GameDate=' + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + '&LeagueID=00&Dayoffset=0';

// var url = 'https://stats.nba.com/stats/teamgamelog?TeamID=1610612747&Season=2018-19&SeasonType=Regular Season';

// var url = 'https://stats.nba.com/stats/scoreboardV2?GameDate=12/22/2018&LeagueID=00&Dayoffset=0';

const options = {
    url: '',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        'Connection': 'keep-alive',
        'Accept-Encoding': '',
        'Accept-Language': 'en-US,en;q=0.8'
    }
  };

function getStats(callback){
    
    options.url = 'https://stats.nba.com/stats/teamgamelog?TeamID=1610612747&Season=2018-19&SeasonType=Regular Season';
    console.log(options.url);

    request.get(options, (err, res, body) => {
        if(err){
            console.log(err);
            return;
        }

        var j = JSON.parse(body);
        
        options.url = 'https://stats.nba.com/stats/boxscoretraditionalv2?GameID=' + j.resultSets[0].rowSet[0][1] + '&StartPeriod=1&EndPeriod=4&StartRange=1&EndRange=4&RangeType=1'
        console.log(options.url);

        request.get(options, (err, res, body) => {
            if(err){
                console.log(err)
                return;
            }
            var j = JSON.parse(body);
    
            // process.stdout.write(j.resultSets[0].headers[5] + '\t');
    
            // for(var stat = 8; stat < j.resultSets[0].headers.length; stat++)
            //     process.stdout.write(j.resultSets[0].headers[stat] + '\t');
    
            // process.stdout.write("\n");
    
            // for(var player in j.resultSets[0].rowSet){
            //     for(var i = 0; i < j.resultSets[0].rowSet[player].length; i++){
            //         if(i == 5 || i > 7)
            //             process.stdout.write(String(j.resultSets[0].rowSet[player][i] + '\t'));
            //         if(i == j.resultSets[0].rowSet[player].length - 1)
            //             process.stdout.write('\n');
            //     }
            // } 

            // console.log(JSON.stringify(j, null, 2));

            return callback(j)
            // return callback({"resource":"boxscore","parameters":{"GameID":"0021800670","StartPeriod":1,"EndPeriod":4,"StartRange":1,"EndRange":4,"RangeType":1},"resultSets":[{"name":"PlayerStats","headers":["GAME_ID","TEAM_ID","TEAM_ABBREVIATION","TEAM_CITY","PLAYER_ID","PLAYER_NAME","START_POSITION","COMMENT","MIN","FGM","FGA","FG_PCT","FG3M","FG3A","FG3_PCT","FTM","FTA","FT_PCT","OREB","DREB","REB","AST","STL","BLK","TO","PF","PTS","PLUS_MINUS"],"rowSet":[["0021800670",1610612747,"LAL","Los Angeles",1627742,"Brandon Ingram","F","","32:37",0,7,0.000,0,2,0.000,4,4,1.000,1,3,4,11,0,0,4,1,4,-19.000],["0021800670",1610612747,"LAL","Los Angeles",1628398,"Kyle Kuzma","F","","31:17",10,18,0.556,7,12,0.583,2,2,1.000,1,6,7,3,3,0,4,4,29,-14.000],["0021800670",1610612747,"LAL","Los Angeles",2199,"Tyson Chandler","C","","16:00",3,6,0.500,0,0,0.000,0,0,0.000,3,4,7,0,0,2,1,1,6,-13.000],["0021800670",1610612747,"LAL","Los Angeles",203484,"Kentavious Caldwell-Pope","G","","23:05",5,7,0.714,3,4,0.750,0,0,0.000,0,2,2,1,2,0,2,0,13,-15.000],["0021800670",1610612747,"LAL","Los Angeles",1628366,"Lonzo Ball","G","","28:20",5,13,0.385,3,8,0.375,0,0,0.000,0,4,4,9,1,0,4,5,13,-20.000],["0021800670",1610612747,"LAL","Los Angeles",201580,"JaVale McGee","","","8:45",2,2,1.000,0,0,0.000,0,0,0.000,1,1,2,0,0,1,0,1,4,-9.000],["0021800670",1610612747,"LAL","Los Angeles",1628404,"Josh Hart","","","28:09",3,6,0.500,2,4,0.500,4,5,0.800,1,6,7,4,3,1,1,2,12,13.000],["0021800670",1610612747,"LAL","Los Angeles",201563,"Michael Beasley","","","8:37",2,6,0.333,0,1,0.000,1,1,1.000,0,2,2,2,1,0,2,1,5,6.000],["0021800670",1610612747,"LAL","Los Angeles",1627826,"Ivica Zubac","","","23:10",11,12,0.917,0,0,0.000,0,1,0.000,4,5,9,0,0,0,4,3,22,25.000],["0021800670",1610612747,"LAL","Los Angeles",1629004,"Svi Mykhailiuk","","","18:39",2,7,0.286,2,6,0.333,1,1,1.000,1,3,4,1,0,0,0,3,7,14.000],["0021800670",1610612747,"LAL","Los Angeles",202362,"Lance Stephenson","","","13:28",1,2,0.500,0,0,0.000,0,0,0.000,0,3,3,2,1,0,1,2,2,21.000],["0021800670",1610612747,"LAL","Los Angeles",1629021,"Moritz Wagner","","","7:53",1,3,0.333,1,1,1.000,2,2,1.000,0,2,2,0,0,1,0,1,5,11.000],["0021800670",1610612760,"OKC","Oklahoma City",202331,"Paul George","F","","38:31",9,14,0.643,5,8,0.625,4,6,0.667,2,4,6,8,3,0,3,1,27,14.000],["0021800670",1610612760,"OKC","Oklahoma City",203924,"Jerami Grant","F","","33:59",4,11,0.364,1,4,0.250,2,2,1.000,1,2,3,1,0,2,1,3,11,8.000],["0021800670",1610612760,"OKC","Oklahoma City",203500,"Steven Adams","C","","36:19",6,9,0.667,0,0,0.000,5,6,0.833,6,8,14,1,4,0,2,2,17,20.000],["0021800670",1610612760,"OKC","Oklahoma City",1628390,"Terrance Ferguson","G","","32:22",5,8,0.625,5,7,0.714,3,5,0.600,1,1,2,2,1,0,2,4,18,10.000],["0021800670",1610612760,"OKC","Oklahoma City",201566,"Russell Westbrook","G","","38:21",7,29,0.241,5,11,0.455,7,10,0.700,1,7,8,12,1,1,3,4,26,15.000],["0021800670",1610612760,"OKC","Oklahoma City",203471,"Dennis Schroder","","","16:30",3,7,0.429,1,5,0.200,2,2,1.000,0,1,1,2,0,0,3,1,9,-12.000],["0021800670",1610612760,"OKC","Oklahoma City",1627846,"Abdel Nader","","","11:24",0,3,0.000,0,2,0.000,1,2,0.500,0,1,1,0,0,0,0,0,1,-10.000],["0021800670",1610612760,"OKC","Oklahoma City",202335,"Patrick Patterson","","","9:38",3,4,0.750,3,4,0.750,0,1,0.000,0,0,0,1,0,0,0,2,9,-11.000],["0021800670",1610612760,"OKC","Oklahoma City",203457,"Nerlens Noel","","","11:41",2,3,0.667,0,0,0.000,0,0,0.000,1,1,2,1,1,0,1,2,4,-20.000],["0021800670",1610612760,"OKC","Oklahoma City",1628977,"Hamidou Diallo","","","11:15",0,3,0.000,0,1,0.000,0,2,0.000,1,2,3,1,0,0,0,0,0,-14.000]]},{"name":"TeamStats","headers":["GAME_ID","TEAM_ID","TEAM_NAME","TEAM_ABBREVIATION","TEAM_CITY","MIN","FGM","FGA","FG_PCT","FG3M","FG3A","FG3_PCT","FTM","FTA","FT_PCT","OREB","DREB","REB","AST","STL","BLK","TO","PF","PTS","PLUS_MINUS"],"rowSet":[["0021800670",1610612760,"Thunder","OKC","Oklahoma City","240:00",39,91,0.429,20,42,0.476,24,36,0.667,13,27,40,29,10,3,15,19,122,0.000000],["0021800670",1610612747,"Lakers","LAL","Los Angeles","240:00",45,89,0.506,18,38,0.474,14,16,0.875,12,41,53,33,11,5,23,24,122,0.000000]]},{"name":"TeamStarterBenchStats","headers":["GAME_ID","TEAM_ID","TEAM_NAME","TEAM_ABBREVIATION","TEAM_CITY","STARTERS_BENCH","MIN","FGM","FGA","FG_PCT","FG3M","FG3A","FG3_PCT","FTM","FTA","FT_PCT","OREB","DREB","REB","AST","STL","BLK","TO","PF","PTS"],"rowSet":[["0021800670",1610612760,"Thunder","OKC","Oklahoma City","Starters","179:32",31,71,0.437,16,30,0.533,21,29,0.724,11,22,33,24,9,3,11,14,99],["0021800670",1610612760,"Thunder","OKC","Oklahoma City","Bench","179:32",31,71,0.437,16,30,0.533,21,29,0.724,11,22,33,24,9,3,11,14,99],["0021800670",1610612747,"Lakers","LAL","Los Angeles","Starters","131:19",23,51,0.451,13,26,0.500,6,6,1.000,5,19,24,24,6,2,15,11,65],["0021800670",1610612747,"Lakers","LAL","Los Angeles","Bench","131:19",23,51,0.451,13,26,0.500,6,6,1.000,5,19,24,24,6,2,15,11,65]]}]})
            // return j;
        });

    });
}

module.exports = {getStats};