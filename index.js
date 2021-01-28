var url = "https://superheroapi.com/api";
var token = "10157265635562126";
let statsArr = [];

//Lets Play Button displays Superheros for Round One

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
                statsArr.push(results)
            }
        )
    }
});
console.log(statsArr);

//Round One Fight Buttons
let sumArr = [];

$("#R1Button1").on("click", function () {
    for (var j = 0; j < 2; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p1 > span.totalStats").text(sumArr[0]);
        $("#p2 > span.totalStats").text(sumArr[1]);
        
    }

    if (sumArr[0] > sumArr[1]) {
        $("#p17").html(statsArr[0].name + "<span class='totalStats'></span>");
    } else {
        $("#p17").html(statsArr[1].name + "<span class='totalStats'></span>");
    }

    sumArr = [];

});

$("#R1Button2").on("click", function () {
    for (var j = 2; j < 4; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p3 > span.totalStats").text(sumArr[0]);
        $("#p4 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p18").html(statsArr[2].name + "<span class='totalStats'></span>");
    } else {
        $("#p18").html(statsArr[3].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button3").on("click", function () {
    for (var j = 4; j < 6; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p5 > span.totalStats").text(sumArr[0]);
        $("#p6 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p19").html(statsArr[4].name + "<span class='totalStats'></span>");
    } else {
        $("#p19").html(statsArr[5].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button4").on("click", function () {
    for (var j = 6; j < 8; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p7 > span.totalStats").text(sumArr[0]);
        $("#p8 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p20").html(statsArr[6].name + "<span class='totalStats'></span>");
    } else {
        $("#p20").html(statsArr[7].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button5").on("click", function () {
    for (var j = 8; j < 10; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p9 > span.totalStats").text(sumArr[0]);
        $("#p10 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p21").html(statsArr[8].name + "<span class='totalStats'></span>");
    } else {
        $("#p21").html(statsArr[9].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button6").on("click", function () {
    for (var j = 10; j < 12; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p11 > span.totalStats").text(sumArr[0]);
        $("#p12 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p22").html(statsArr[10].name + "<span class='totalStats'></span>");
    } else {
        $("#p22").html(statsArr[11].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button7").on("click", function () {
    for (var j = 12; j < 14; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p13 > span.totalStats").text(sumArr[0]);
        $("#p14 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p23").html(statsArr[12].name + "<span class='totalStats'></span>");
    } else {
        $("#p23").html(statsArr[13].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});

$("#R1Button8").on("click", function () {
    for (var j = 14; j < 16; j++) {
        numArr = [];
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));

        for (var i = 0; i < numArr.length; i++) {
            if (isNaN(numArr[i]) ) {
                numArr[i] = 0;
            }
        }   

        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
        $("#p15 > span.totalStats").text(sumArr[0]);
        $("#p16 > span.totalStats").text(sumArr[1]);

    }

    if (sumArr[0] > sumArr[1]) {
        $("#p24").html(statsArr[14].name + "<span class='totalStats'></span>");
    } else {
        $("#p24").html(statsArr[15].name + "<span class='totalStats'></span>");
    }

    sumArr = [];
});