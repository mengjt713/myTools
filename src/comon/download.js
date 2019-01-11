define(function () {

    function downLoadFile(data){
        var blob = dataURLtoBlob("data:text/csv;base64," +data);
        if(isIE()){
            navigator.msSaveBlob(blob, "文件"+formatDate+".xml");
        }else {
            var a = document.getElementById("downLog");
            //noinspection JSDuplicatedDeclaration
            a.download = '文件'+formatDate()+'.xml';
            a.href = URL.createObjectURL(blob);
            a.click();
        }
    }
    /*
    * 日期格式化
    * */
    function formatDate(){
        var _addSuffix=function(value){
            value=value < 10 ? '0'+value : value;
            return value;
        };
        var date=new Date();
        var year=date.getFullYear().toString();
        var month=_addSuffix(date.getMonth()+1);
        var day=_addSuffix(date.getDate());
        var hour=_addSuffix(date.getHours());
        var minute=_addSuffix(date.getMinutes());
        var second=_addSuffix(date.getSeconds());
        return year+month+day+hour+minute+second;
    }
    /**
     * base64转blob
     */
    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        // var bom = "\ufeff",m= bom.length,bomarr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([ new Uint8Array([0xEF, 0xBB, 0xBF]),u8arr] , { type: mime+";charset=utf-8,"});
    }

    /**
     * 判断浏览器
     */
    function isIE() {
        var agent = window.navigator.userAgent;
        if(agent.indexOf("Edge") > -1){//首先判断是否为Edge浏览器
            return true;
        }
        else if(agent.indexOf("Firefox") > -1){//判断是否为firefox
            return false;
        }
        else if (agent.indexOf("Chrome") <= -1) {
            return true;
        } else {//是否为chrome
            return false;
        }
    }
    return {
        downLoadFile:downLoadFile
    }

});