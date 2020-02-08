function isPrime(n){
    if(n === 2){
      return true;
    }
    if(! Number.isInteger(n) || n <2 || n%2 === 0){
      return false
    }
    for(let i = 3; i <= n -1 ; i++){
      if(n%i === 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(11));