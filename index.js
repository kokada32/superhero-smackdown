var url = "https://superheroapi.com/api";
var token = "10157265635562126";
let nameStatsArr = [];

//'Lets Play' Button displays Superheros for Round One creates array of objects with name and totalStat of superheroes

$("#play").on("click", function () {
    let idArr = [];
    for (var i = 0; i < 16; i++) {
        num = Math.floor(Math.random() * 731) + 1;
        idArr.push(num);
    }

    //Find Duplicates and replace number
    
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    let dupArr = findDuplicates(idArr);
    console.log(findDuplicates(idArr));
    if (dupArr.length > 0) {
        for (var k = 0; k < dupArr.length; k++) {
            let dupNum = dupArr[k];
            console.log(dupNum);
            let dupIndex = idArr.indexOf(dupNum);
            console.log(dupIndex);
            let num2 = Math.floor(Math.random() * 731) + 1;
            console.log(num2);
            idArr.splice(dupIndex, 1, num2);
            console.log(idArr);
        }
    }   

    let pos = 1;
    for (var j = 0; j < idArr.length; j++){
        let heroId = idArr[j];
        $.get(
            `https://accesscontrolalloworiginall.herokuapp.com/${url}/${token}/${heroId}`,
            function(results) {
                $(`#p${pos}`).html(results.name + "<span class='totalStats'></span>");
                pos = pos + 1;
                numArr = [];
                numArr.push(parseInt(results.powerstats.combat));
                numArr.push(parseInt(results.powerstats.durability));
                numArr.push(parseInt(results.powerstats.intelligence));
                numArr.push(parseInt(results.powerstats.power));
                numArr.push(parseInt(results.powerstats.speed));
                numArr.push(parseInt(results.powerstats.strength));

                for (var i = 0; i < numArr.length; i++) {
                    if (isNaN(numArr[i]) ) {
                        numArr[i] = 0;
                    }
                }   

                var sum = numArr.reduce(function(a, b){
                    return a + b;
                });

                let obj = {};
                obj.name = results.name;
                obj.totalStat = sum;
                nameStatsArr.push(obj);
            }
        )
    }
    console.log(nameStatsArr);
});

//Round ONE 'Fight' Buttons displays totalStat and winner of duel in the next round

function fight (id1, id2, index1, index2, resultId) {
    $(id1 + " > span.totalStats").text(nameStatsArr[index1].totalStat);
    $(id2 + " > span.totalStats").text(nameStatsArr[index2].totalStat);

    if (nameStatsArr[index1].totalStat > nameStatsArr[index2].totalStat) {
        $(resultId).html(nameStatsArr[index1].name + "<span class='totalStats'></span>");
    } else {
        $(resultId).html(nameStatsArr[index2].name + "<span class='totalStats'></span>");
    }
}

$("#R1Button1").on("click", function () {
    fight("#p1", "#p2", 0, 1, "#p17");
});

$("#R1Button2").on("click", function () {
    fight("#p3", "#p4", 2, 3, "#p18");
});

$("#R1Button3").on("click", function () {
    fight("#p5", "#p6", 4, 5, "#p19");
});

$("#R1Button4").on("click", function () {
    fight("#p7", "#p8", 6, 7, "#p20");
});

$("#R1Button5").on("click", function () {
    fight("#p9", "#p10", 8, 9, "#p21");
});

$("#R1Button6").on("click", function () {
    fight("#p11", "#p12", 10, 11, "#p22");
});

$("#R1Button7").on("click", function () {
    fight("#p13", "#p14", 12, 13, "#p23");
});

$("#R1Button8").on("click", function () {
    fight("#p15", "#p16", 14, 15, "#p24");
});


//Round TWO 'Fight' Buttons displays totalStat and winner of duel in the next round

function fight2 (id1, id2, resultId) {
    let heroTop = $(id1).text();
    let heroBottom = $(id2).text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $(id1 + " > span.totalStats").text(heroTopStats.totalStat);
    $(id2 + " > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $(resultId).html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $(resultId).html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
}

$("#R2Button1").on("click", function () {
    fight2("#p17", "#p18", "#p25");
});

$("#R2Button2").on("click", function () {
    fight2("#p19", "#p20", "#p26");
});

$("#R2Button3").on("click", function () {
    fight2("#p21", "#p22", "#p27");
});

$("#R2Button4").on("click", function () {
    fight2("#p23", "#p24", "#p28");
});

//Round THREE 'Fight' Buttons displays totalStat and winner of duel in the next round

$("#R3Button1").on("click", function () {
    fight2("#p25", "#p26", "#p29");
});

$("#R3Button2").on("click", function () {
    fight2("#p27", "#p28", "#p30");
});


//Round FOUR CHAMPIONSHIP 'Fight' button displays the winner of the tournament and winnersList

const winnersCollection = firebase.database().ref("winner");

$("#R4Button1").on("click", function (e) {
    e.preventDefault();
    fight2("#p29", "#p30", "#p31");

    //Creates list of winners
    let winnerName = $("#p31").text();
    let winnerStats = nameStatsArr.find(hero => hero.name === winnerName);
    winnersCollection.push({
        name: winnerName,
        stats: winnerStats.totalStat,
        votes: 0
    });

    //Read list of winners and displays them
    winnersCollection.on('value', function (results) {
        const $winnersList = $("#winnersList");
        $winnersList.empty();
        $winnersList.html("<h1 id='winnersTitle'>Winners</h1>")
        results.forEach(function (result){
            const { name, stats, votes } = result.val();
            const key = result.key;
            const $li = $("<li>").attr("data-winner-id", key).text(name + "  " + stats);
            const $right = $("<div>").addClass("right").text(votes);
            const $upvote = $("<a>").attr("href", "#").addClass("upvote").text("+");
            const $downvote = $("<a>").attr("href", "#").addClass("downvote").text("-");
            const $remove = $("<a>").attr("href", "#").addClass("remove").text("X");

            $right.prepend($downvote);
            $right.append($upvote);
            $li.prepend($remove);
            $li.append($right);
            $winnersList.append($li);

        })
    })
});

//Update list of votes

$('#winnersList').on('click', 'a.upvote', function(event) {
    event.preventDefault();
    const key = $(event.target).closest('li').attr('data-winner-id')
    const winnerVotes = winnersCollection.child(key).child('votes');
    winnerVotes.transaction(function (votes) {
      return votes + 1;
    });
  });

$('#winnersList').on('click', 'a.downvote', function(event) {
    event.preventDefault();
    const key = $(event.target).closest('li').attr('data-winner-id')
    const winnerVotes = winnersCollection.child(key).child('votes');
    winnerVotes.transaction(function (votes) {
        if (votes === 0) {
        return votes;
        }
        return votes - 1;
    });
});

//Deletes winner from the list

$('#winnersList').on('click', 'a.remove', function(event) {
    event.preventDefault();
    
    const key = $(event.target).closest('li').attr('data-winner-id');
    const winnerObj = winnersCollection.child(key);
    winnerObj.remove();
});