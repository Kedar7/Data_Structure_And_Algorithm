// function characterCount(str){
//  var result ={};
//  for(var i =0; str.length > 0; i++){
//     var character =  str[i];
//     if(result[character] > 0 ){
//         result[character]++;
//     } else {
//         result[character] = 1;
//     }
//  }
//  return result;
// }

function same(array1,array2){
    console.log(array1,array2);
    if(array1.length != array2.length){
        return false;
    }
    let frequencyCounter1 ={};
    let frequencyCounter2 ={};
    for(let val in array1){
        frequencyCounter1[val] = true;
       
    }
    console.log(frequencyCounter1);
}

same([1,2,3],[2,1,9]);