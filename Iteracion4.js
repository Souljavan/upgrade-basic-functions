const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let suma=0;
    param.forEach(element => {suma=suma+element;});
    suma=suma/param.length;
    return(suma)
}

console.log(average(numbers));