/*
 命名  :record
 类型  :function
 描述  :undo，redo，操作
 依赖  :nothing
 set()
 get()
 */
(function () {



    function Record() {


        let chapter = 0;    //默认初始步骤
        let maxChapter = 0; //默认当前最大步骤数
        let maxStep = 5;    //默认最大可倒回操作步骤数
        let contentMap = {
            0: null
        }; //默认步骤内容存放map对象

        /*设置当前步数*/
        let setChapter = function () {
            chapter++;
            maxChapter = chapter;
        };
        /*获取当前步数*/
        let getChapter = function () {
            return chapter;
        };
        /*设置当前map对象保存内容*/
        let setContent = function (content) {
            setChapter();
            contentMap[getChapter()] = content;
            if (maxChapter > maxStep) {
                for (let index in contentMap) {
                    index = parseInt(index);
                    if (index > maxStep) {
                        delete contentMap[index]
                        maxChapter = maxStep;
                        chapter = maxStep;
                    } else {
                        contentMap[index] = contentMap[index + 1];
                    }
                }
            }

        };
        /*获取当前保存对象内容*/
        let getContent = function (step, operateEvent) {
            if (operateEvent == 'undo') {
                if (chapter > 0) {
                    chapter--;
                }
            } else if (operateEvent == 'redo') {
                if (chapter < maxChapter) {
                    chapter++;
                }
            }
            if (step && step <= maxChapter) {
                chapter = step;
            }
            return contentMap[chapter];
        };

        return {
            set: function (content) {
                setContent(content)
            },
            get: function (operateEvent, chapter) {
                let finnalChapter = chapter ? chapter : '';
                return getContent(finnalChapter, operateEvent);
            }
        }

    }

    module.exports = Record;

    (function (global, factory) {
        if (typeof define === 'function' && define.amd) {
            define([], factory);
        } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = factory;
        } else {
            global.factory = factory;
        }
    })(window, Record)

})();













