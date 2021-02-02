var url = "https://superheroapi.com/api";
var token = "10157265635562126";
// let statsArr = [];
let nameStatsArr = [];

//'Lets Play' Button displays Superheros for Round One creates array of objects with name and totalStat of superheroes

$("#play").on("click", function () {
    let idArr = [];
    for (var i = 0; i < 16; i++) {
        num = Math.floor(Math.random() * 731) + 1;
        idArr.push(num);
    }

    //Find Duplicates and replace number
    // let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    // console.log(findDuplicates(idArr));
    // if (findDuplicates(idArr).length > 0) {
    //     let dupNum = findDuplicates(idArr)[0];
    //     let dupLength = findDuplicates(idArr).length;
    //     idArr.splice(0, dupLength, dupNum);
    //     console.log(idArr);
    //     num = Math.floor(Math.random() * 731) + 1;

    // }

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

$("#R1Button1").on("click", function () {

    $("#p1 > span.totalStats").text(nameStatsArr[0].totalStat);
    $("#p2 > span.totalStats").text(nameStatsArr[1].totalStat);

    if (nameStatsArr[0].totalStat > nameStatsArr[1].totalStat) {
        $("#p17").html(nameStatsArr[0].name + "<span class='totalStats'></span>");
    } else {
        $("#p17").html(nameStatsArr[1].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button2").on("click", function () {
    $("#p3 > span.totalStats").text(nameStatsArr[2].totalStat);
    $("#p4 > span.totalStats").text(nameStatsArr[3].totalStat);

    if (nameStatsArr[2].totalStat > nameStatsArr[3].totalStat) {
        $("#p18").html(nameStatsArr[2].name + "<span class='totalStats'></span>");
    } else {
        $("#p18").html(nameStatsArr[3].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button3").on("click", function () {
    $("#p5 > span.totalStats").text(nameStatsArr[4].totalStat);
    $("#p6 > span.totalStats").text(nameStatsArr[5].totalStat);

    if (nameStatsArr[4].totalStat > nameStatsArr[5].totalStat) {
        $("#p19").html(nameStatsArr[4].name + "<span class='totalStats'></span>");
    } else {
        $("#p19").html(nameStatsArr[5].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button4").on("click", function () {
    $("#p7 > span.totalStats").text(nameStatsArr[6].totalStat);
    $("#p8 > span.totalStats").text(nameStatsArr[7].totalStat);

    if (nameStatsArr[6].totalStat > nameStatsArr[7].totalStat) {
        $("#p20").html(nameStatsArr[6].name + "<span class='totalStats'></span>");
    } else {
        $("#p20").html(nameStatsArr[7].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button5").on("click", function () {
    $("#p9 > span.totalStats").text(nameStatsArr[8].totalStat);
    $("#p10 > span.totalStats").text(nameStatsArr[9].totalStat);

    if (nameStatsArr[8].totalStat > nameStatsArr[9].totalStat) {
        $("#p21").html(nameStatsArr[8].name + "<span class='totalStats'></span>");
    } else {
        $("#p21").html(nameStatsArr[9].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button6").on("click", function () {
    $("#p11 > span.totalStats").text(nameStatsArr[10].totalStat);
    $("#p12 > span.totalStats").text(nameStatsArr[11].totalStat);

    if (nameStatsArr[10].totalStat > nameStatsArr[11].totalStat) {
        $("#p22").html(nameStatsArr[10].name + "<span class='totalStats'></span>");
    } else {
        $("#p22").html(nameStatsArr[11].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button7").on("click", function () {
    $("#p13 > span.totalStats").text(nameStatsArr[12].totalStat);
    $("#p14 > span.totalStats").text(nameStatsArr[13].totalStat);

    if (nameStatsArr[12].totalStat > nameStatsArr[13].totalStat) {
        $("#p23").html(nameStatsArr[12].name + "<span class='totalStats'></span>");
    } else {
        $("#p23").html(nameStatsArr[13].name + "<span class='totalStats'></span>");
    }
});

$("#R1Button8").on("click", function () {
    $("#p15 > span.totalStats").text(nameStatsArr[14].totalStat);
    $("#p16 > span.totalStats").text(nameStatsArr[15].totalStat);

    if (nameStatsArr[14].totalStat > nameStatsArr[15].totalStat) {
        $("#p24").html(nameStatsArr[14].name + "<span class='totalStats'></span>");
    } else {
        $("#p24").html(nameStatsArr[15].name + "<span class='totalStats'></span>");
    }
});
const result = nameStatsArr.find(hero => hero.name === nameStatsArr[0].name);

//Round TWO 'Fight' Buttons displays totalStat and winner of duel in the next round

$("#R2Button1").on("click", function () {

    let heroTop = $("#p17").text();
    let heroBottom = $("#p18").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);


    $("#p17 > span.totalStats").text(heroTopStats.totalStat);
    $("#p18 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p25").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p25").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});

$("#R2Button2").on("click", function () {

    let heroTop = $("#p19").text();
    let heroBottom = $("#p20").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p19 > span.totalStats").text(heroTopStats.totalStat);
    $("#p20 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p26").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p26").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});

$("#R2Button3").on("click", function () {
    let heroTop = $("#p21").text();
    let heroBottom = $("#p22").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p21 > span.totalStats").text(heroTopStats.totalStat);
    $("#p22 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p27").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p27").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});

$("#R2Button4").on("click", function () {
    let heroTop = $("#p23").text();
    let heroBottom = $("#p24").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p23 > span.totalStats").text(heroTopStats.totalStat);
    $("#p24 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p28").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p28").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});

//Round THREE 'Fight' Buttons displays totalStat and winner of duel in the next round

$("#R3Button1").on("click", function () {
    let heroTop = $("#p25").text();
    let heroBottom = $("#p26").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p25 > span.totalStats").text(heroTopStats.totalStat);
    $("#p26 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p29").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p29").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});

$("#R3Button2").on("click", function () {
    let heroTop = $("#p27").text();
    let heroBottom = $("#p28").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p27 > span.totalStats").text(heroTopStats.totalStat);
    $("#p28 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p30").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p30").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});


//Round FOUR CHAMPIONSHIP 'Fight' button displays the winner of the tournament

$("#R4Button1").on("click", function () {
    let heroTop = $("#p29").text();
    let heroBottom = $("#p30").text();

    let heroTopStats = nameStatsArr.find(hero => hero.name === heroTop);
    let heroBottomStats = nameStatsArr.find(hero => hero.name === heroBottom);

    $("#p29 > span.totalStats").text(heroTopStats.totalStat);
    $("#p30 > span.totalStats").text(heroBottomStats.totalStat);

    if (heroTopStats.totalStat > heroBottomStats.totalStat) {
        $("#p31").html(heroTopStats.name + "<span class='totalStats'></span>");
    } else {
        $("#p31").html(heroBottomStats.name + "<span class='totalStats'></span>");
    }
});
 