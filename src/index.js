module.exports = function reverse(n) {
    const stringFromN = String(n);

    const reversedArrayFromString = stringFromN.split("").reverse();

    const stringFromReversedArray = reversedArrayFromString.join("");

    return stringFromReversedArray.replace("-", "");
};
