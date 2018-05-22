/*!
 * min lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2018-2018 dawnchengx
 *
 * Version: 1.0.0
 * 
 */
 (function(root, factory){
    root.lazyload = factory();
 })(typeof global !== "undefined" ? global : this.window || this.global,  function (root) {
    function lazyload(selector){
        if('object' == typeof selector){
            selector.forEach(function(v){
                v.src = v.getAttribute('data-src');
            })
        }else{
            var selector_all = document.querySelectorAll(selector);
            selector_all.forEach(function(v){
                v.src = v.getAttribute('data-src');
            })
        }
    }
    return lazyload;
 })