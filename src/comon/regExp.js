//匹配开头和结尾的空白符，替换成空字符
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
console.log( trim("  foobar   ") );
/*
* 将每个单词的首字母转换为大写
* */
function titleize(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(c) {
        return c.toUpperCase();
    });
}
console.log( titleize('my name is epeli') );
/*
* 驼峰化
* */
function camelize(str) {
    return str.replace(/[-_\s]+(.)?/g, function(match, c) {
        return c ? c.toUpperCase() : '';
    });
}
console.log( camelize('-moz-transform') );

/*
* 中划线化
* */
function dasherize(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}
console.log( dasherize('MozTransform') );

/*
*html转义和反转义
**/
// 将HTML特殊字符转换成等值的实体
function escapeHTML(str) {
    var escapeChars = {
        '¢' : 'cent',
        '£' : 'pound',
        '¥' : 'yen',
        '€': 'euro',
        '©' :'copy',
        '®' : 'reg',
        '<' : 'lt',
        '>' : 'gt',
        '"' : 'quot',
        '&' : 'amp',
        '\'' : '#39'
    };
    return str.replace(new RegExp('[' + Object.keys(escapeChars).join('') +']', 'g'), function(match) {
        return '&' + escapeChars[match] + ';';
    });
}
console.log( escapeHTML('<div>Blah blah blah</div>') );
// => "&lt;div&gt;Blah blah blah&lt;/div&gt";

// 实体字符转换为等值的HTML。
function unescapeHTML(str) {
    var htmlEntities = {
        nbsp: ' ',
        cent: '¢',
        pound: '£',
        yen: '¥',
        euro: '€',
        copy: '©',
        reg: '®',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
    };
    return str.replace(/\&([^;]+);/g, function(match, key) {
        if (key in htmlEntities) {
            return htmlEntities[key];
        }
        return match;
    });
}
console.log( unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;') );
// => "<div>Blah blah blah</div>"
