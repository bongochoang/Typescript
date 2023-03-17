var arrNum3 = [1, 9, 5, 7, 3];
var arrStri3 = ["hoang", "hoa", "tai"];
var sortLab = function (array, callblack) {
    if (!!callblack) {
        callblack = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (callblack(array[i], array[j]) < 0) {
                var x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    return array;
};
sortLab(arrStri3, function (a, b) {
    return a.localeCompare(b);
});
console.log(arrStri3);
