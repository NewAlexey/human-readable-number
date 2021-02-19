module.exports = function toReadable (number) {
    if (String(number).length === 1) {
        return length1(number);
    } else if (String(number).length === 2) {
        return length2(number);
    } else {
        return length3(number);
    }
}

function length1(num) {
    let arrLengthOne = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return arrLengthOne[num];
}
function length2(num) {
    let objNumber10_19 = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let objNumber20_90 = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (num <= 19 && num >= 10) {
        return objNumber10_19[num];
    } else if (String(num)[1] === "0" && num <= 99 && num >= 20) {
        return objNumber20_90[num];
    } else if (num <= 99 && num >= 20) {
        return (`${objNumber20_90[num - +String(num)[1]]} ${length1(+String(num)[1])}`);
    }
}
function length3(num) {
    if (String(num)[1] === "0" && String(num)[2] === "0") {
        return `${length1(+String(num)[0])} hundred`;
    } else if (String(num)[1] === "0") {
        return `${length1(+String(num)[0])} hundred ${length1(+(String(num)[2]))}`
    } else {
        return `${length1(+String(num)[0])} hundred ${length2(+(String(num).slice(1)))}`
    }
}