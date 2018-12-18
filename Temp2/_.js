const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
},
 inRange(number, start, end) {
    if (end === undefined) 
      { 
         end = start;
         start = 0;
      } 
    if (start > end)
      {
        const temp = end;
        end = start;
        start = temp;
      }
    const isInRange = start <= number && number < end;
    return isInRange;
 },
  words(string) {
    var res = string.split(" ");
    return res;
  },
  pad(str,len){
   n = str.length;
   if (len <= n) {
     return str;
   }
   let startPaddingLength =  Math.floor((len - n) / 2);
   let endPaddingLength = len - str.length - startPaddingLength;
   
   let paddedString = ' ';
   let finalStr = paddedString.repeat(startPaddingLength) + str +        paddedString.repeat(endPaddingLength); 
   return finalStr;
     
   //str = str.padStart(m + n);
   //return str.padEnd(len);
 },
  chunk (array, size = 1){
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+=size ){
        let arrayChunk = array.slice(i, i+size);
        arrayChunks.push(arrayChunk);  
      }
        return arrayChunks
  },
  findKey (object, predicate) {
     for (let key in object) {
      if (predicate(object[key])) {
        return key;
      }
    }
  },
invert(object) { 
  	let invertedObject = {}; 
  	for (let key in object) 
    			{ const originalValue = object[key]; invertedObject =                       {originalValue: key} } return invertedObject; 
},
drop(array, n) {

 if(n === undefined)
  {
    n = 1;
  }
  //store sliced array
  let droppedArray = array.slice(n, array.length);
  return droppedArray;
},
dropWhile (array, predicate) {
  cb = (element, index) => {
  return !(predicate(element, index, array));
  };

  let dropNumber = array.findIndex(cb);
  let droppedArray = this.drop(array, dropNumber);

  return droppedArray;
},
has (object, key) {
var hasValue = object.hasOwnProperty(key);
return hasValue;  
}  
}
// Do not write or modify code below this line.
module.exports = _;