/*
* 深拷贝
* JSON.parse(JSON.stringify(object))
* 浅拷贝只拷贝一层，深拷贝会是多层
*1、会忽略 undefined  2、会忽略 symbol 3、不能序列化函数  4、不能解决循环引用的对象  5、不能正确处理new Date() 6、不能处理正则
* */

function shallowCopy(source){
    let target = {};
    for(var i in source){
        if(source.hasOwnProperty(i)){
            target[i] = source[i]
        }
    }
    return target;
}

function clone(source){
    let target = {};
    for(var i in source){
        if(source.hasOwnProperty(i)){
            if(typeof source[i] =='object'){
                target[i] = clone(source[i])
            }else {
                target[i] = source[i];
            }
        }
    }
    return target;
}
/*自带深拷贝*/
function cloneJSON(source) {
    return JSON.parse(JSON.stringify(source));
}
function isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}
//定义检测类型函数
function checkedType(target){
    return Object.prototype.toString.call(target).slice(8,-1)
}
function clone1(target){
    //判断数据类型
    //初始化一个变量result
    let result,targetType = checkedType(target);
    if(targetType ==='Object'){
        result = {}
    }else if(targetType ==='Array'){
        result = [];
    }else {
        return target
    }
    for(let i in target){
        let value = target[i];
        if(checkedType(value) ==='Object'||checkType ==='Array'){
            result[i] = clone(value)
        }else{
            result[i] = value;
        }
    }
    return result;
}
