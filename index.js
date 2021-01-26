var url = "https://superheroapi.com/api";
var token = "10157265635562126";
let statsArr = [];

$("#play").on("click", function () {
    let idArr = [];
    for (var i = 0; i < 16; i++) {
        num = Math.floor(Math.random() * 731) + 1;
        idArr.push(num);
    }
    console.log(idArr);

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
                $(`#p${pos}`).text(results.name + "<span class='totalStats'></span>");
                pos = pos + 1;
                statsArr.push(results)
            }
        )
    }
});

let numArr = [];
let sumArr = [];

$("#R1Button1").on("click", function () {
    console.log(statsArr)
    // let powerstats = parseInt(statsArr[0].powerstats.combat);
    // let powerstats = parseInt(statsArr[0].powerstats.combat) + parseInt(statsArr[0].powerstats.durability) + parseInt(statsArr[0].powerstats.intelligence) + parseInt(statsArr[0].powerstats.power) + parseInt(statsArr[0].powerstats.speed) + parseInt(statsArr[0].powerstats.strength);

    for (var j = 0; j < 2; j++) {
        numArr.push(parseInt(statsArr[j].powerstats.combat));
        numArr.push(parseInt(statsArr[j].powerstats.durability));
        numArr.push(parseInt(statsArr[j].powerstats.intelligence));
        numArr.push(parseInt(statsArr[j].powerstats.power));
        numArr.push(parseInt(statsArr[j].powerstats.speed));
        numArr.push(parseInt(statsArr[j].powerstats.strength));
        for (var i = 0; i < statsArr.length; i++) {
            if (numArr.includes("null") === true) {
                let index = numArr.findIndex((e) => e === "null");
                numArr[index] = 0;
            }
        }   
        var sum = numArr.reduce(function(a, b){
            return a + b;
        });

        sumArr.push(sum);
    }
    $("#p1 > span.totalStats").text(sumArr[0]);
    $("#p2 > span.totalStats").text(sumArr[1]);

    if (sumArr[0] > sumArr[1]) {
        $("#p17").text(statsArr[0].name);
    } else {
        $("#p17").text(statsArr[1]).name;
    }

    console.log(sumArr);




    // $("#p1").querySelector("span").text("powerstats");
    
});