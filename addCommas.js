function addCommas(num) {
    const numStr = num.toString();
    if (numStr.length < 4) return numStr;

    const hasDecimal = numStr.includes(".");
    let numArray, formattedNum = ""; count = 0, wholeNum = "", decimalNums = "";

    if (hasDecimal) {
        numArray = numStr.split(".");
        wholeNum = numArray[0];
        decimalNums = numArray[1]
    } else {
        wholeNum = numStr
    }

    for (let i = wholeNum.length - 1; i >= 0; i--) {
        formattedNum += wholeNum[i];
        count += 1;
        if (count == 3 && i != 0) {
            formattedNum += ",";
            count = 0;
        }
    }

    if (hasDecimal) {
        return formattedNum.split("").reverse().join("") + "." + decimalNums;
    } else {
        return formattedNum.split("").reverse().join("")
    }
}

module.exports = addCommas;