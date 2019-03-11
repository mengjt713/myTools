
/*
*获取当前页面中的标签数量
* */
function getTagsMap() {
    return [...document.querySelectorAll('*')].reduce((a, c) => {
        let tagName = c.tagName.toLowerCase();
        if(a[tagName]) {
            a[tagName] += 1;
        } else {
            a[tagName] = 1;
        }
        return a;
    }, {})
}
getTagsMap()