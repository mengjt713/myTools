/*
* 解密
* */
function decrypt (password) {
    var newArray = [],
        oldPassword = password,
        newPassword = [];
    oldPassword.split('').forEach(function (data, index) {
        if (index % 2 == 0) {
            var dataCode = (parseInt(oldPassword.substring(index, index + 2), 16)) ^ 'u'.charCodeAt();
            newArray[index / 2] = String.fromCharCode(dataCode);
        }
    })
    newArray.forEach(function (data, index) {
        if (index % 2) {
            newPassword[index - 1] = data;
        } else {
            if (index == oldPassword.length - 1) {
                newPassword[index] = data;
            } else {
                newPassword[index + 1] = data;
            }
        }
    })
    return newPassword.join('')
}
/*
* 加密
* */
function encryption(password) {
    var newArray= [],
        oldPassword = password,
        newPassword = null;
    oldPassword.split('').forEach(function (data,index) {
        var dataCode = (data.charCodeAt() ^ 'u'.charCodeAt()).toString(16);
        if(dataCode.length==1){
            dataCode = "0"+dataCode
        }
        if(index%2){
            newArray[index-1] = dataCode;
        }else {
            if(index == oldPassword.length-1){
                newArray[index] = dataCode;
            }else{
                newArray[index+1] = dataCode;
            }
        }
    })
    return newArray.join('')
}
var a = encryption("Aa1234")
console.log(decrypt(a));
