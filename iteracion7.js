const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'];
  function finderName(param,paramfind) {
    let control=0;
    for (par of param ){
     if (paramfind == par){
     	control=1
     	return("Encontrado parametro:"+paramfind)
     }
    }
    if (control==0){
    return("No Encontrado parametro:"+paramfind)
    }
  }


console.log(finderName(nameFinder,"Xabier"))