// 立即执行：防止加载时闪烁
(function() {
    // 在脚本加载时立即添加no-js类，作为降级方案
    document.documentElement.className += ' no-js';
    
    // 尽快添加loaded类
    function addLoadedClass() {
        document.body.className = (document.body.className + ' loaded').trim();
        document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '').trim();
    }
    
    // 如果DOM已经加载完成，立即执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLoadedClass);
    } else {
        addLoadedClass();
    }
})();

// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();


document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        _Blog.toggleTheme = function () {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
            }
        };
        _Blog.toggleTheme();

        // ready function.
        // 确保加载类已添加（双重保障）
        if (!document.body.className.match(/\bloaded\b/)) {
            document.body.className = (document.body.className + ' loaded').trim();
        }
    }
);