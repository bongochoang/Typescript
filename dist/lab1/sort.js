// const Arr1=[1,3,5,7,9]
// const Arr2=[2,4,6,8,10]
// function Sort<H>(arr:H[],callback?:(a:H[],b:H[])=>H){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
// }
// Sort(Arr1);
// console.log(Arr1);
var arrSort1 = [2, 9, 10, 6, 7];
var arrSort2 = ["d", "a", "f", "v"];
function labSort(arr1, callback) {
    for (var i = 0; i < arr1.length - 1; i++) {
        for (var j = i + 1; j < arr1.length; j++) {
            if (arr1[i] < arr1[j]) {
                var temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
            var temp1 = [];
            var newItem = callback(arr1[i], arr1[j]);
            temp1.push(newItem);
            return temp1;
        }
    }
}
var taingu = labSort(arrSort1, function (a, b) {
    return a - b;
});
console.log(taingu);
