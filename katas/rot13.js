rot13 = (input) => {
    let resultArray = [];
    let inputArray = input.split('').forEach(word => {
        let charCode = word.charCodeAt();
        if(charCode > 122 || charCode < 65) return resultArray.push(String.fromCharCode(charCode));

        if((charCode > 109 && charCode <= 122) || (charCode > 77 && charCode <= 90)){
            charCode = charCode - 13;
        } else {
            charCode = charCode + 13;
        }
        resultArray.push(String.fromCharCode(charCode));
    });
    return resultArray.join('');
}