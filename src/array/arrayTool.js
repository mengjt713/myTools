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
/*
* 数组去重
* */
var arr = [11,1,2,3,4,4,5,3,3,6,4,3,34,4,5,9,6,8,6,5];

function uniquel1(arr){
    var lastArr = [];
    for(let i = 0 ;i<arr.length;i++){
        if(lastArr.indexOf(arr[i])==-1){
            lastArr.push(arr[i])
        }
    }
    return lastArr;
}
function uniquel2(arr){
    var obj = {},lastArr=[];
    for(let i = 0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = arr[i]
            lastArr.push(arr[i]);
        }
    }
    return lastArr;
}
function uniquel3(arr){
    var set = new Set(arr)
    return [...set]
}