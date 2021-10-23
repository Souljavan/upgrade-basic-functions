const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let suma=0;
    param.forEach(element => {suma=suma+element;});
    return suma;
}

console.log(sumAll(numbers));