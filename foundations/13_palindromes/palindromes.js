const palindromes = function (string) {
    let processedString = string.replaceAll(/[^\w+]/g, '').toLowerCase()
    for (let i = 0; i < Math.floor(processedString.length / 2); i++) {
        if (processedString.at(i) !== processedString.at(-1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
