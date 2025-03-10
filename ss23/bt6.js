let valuesArray = [null, "example", 42];
let correct = [];
for (let index = 0; index < valuesArray.length; index++) {
    if (valuesArray[index]) {
        correct.push(valuesArray[index]);
    }
}
console.log(truthyValues);