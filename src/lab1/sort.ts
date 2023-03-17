const arrNum3 = [1,9,5,7,3];
const arrStri3=["hoang","hoa","tai"]
const sortLab = function <H>(array: H[],callblack?: (a: H, b: H) => number) :H[]{
    if (!!callblack) {
       callblack=(a:H,b:H):number=>{
if(a>b) {
    return 1
} else {
    return -1
}
       } 
   
    }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (callblack(array[i], array[j]) < 0) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  return array
};

sortLab(arrStri3,(a,b)=>{
    return a.localeCompare(b)
});
console.log(arrStri3);