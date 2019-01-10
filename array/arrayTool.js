/*
 * 获取数组中不同的部分
 * */
function getArrDifference(arr1, arr2) {

    return arr1.concat(arr2).filter(function(v, i, arr) {

        return arr.indexOf(v) === arr.lastIndexOf(v);

    });

}
var a = [1,2,3,4,5],b = [1,3,4,9,8];

console.log(getArrDifference(a,b));