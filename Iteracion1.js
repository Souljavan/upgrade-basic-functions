//1.1
function sum(numberOne , numberTwo) {
    if (numberOne==undefined&&numberTwo==undefined){
        return('Los numeros deben venir definidos. ');
    }
    else if (isNaN(numberOne)==true||isNaN(numberTwo)==true){
        return('Los dos parametros deben ser numeros. ');
    }
    else{

        if (numberOne>numberTwo){
            return(numberOne)
        }
        else if(numberTwo>numberOne){
            return(numberTwo)
        }
        else{
            return('Los numeros son iguales')
        }
    
    }
    
  }



