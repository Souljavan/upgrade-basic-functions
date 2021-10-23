const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma=0;
    param.forEach(element => {
        if (isNaN(element)){
            suma=suma+element.length;
        }else{
            suma=suma+Number(element);
        }
    });
    return(suma);
}

console.log(averageWord(mixedElements));