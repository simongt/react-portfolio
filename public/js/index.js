'use strict';

(function (dom) {
  var ready = function ready(fn) {
    if (dom.readyState != 'loading') fn();
    else dom.addEventListener('DOMContentLoaded', fn);
  };

  ready(function () {

    var body = dom.querySelector('body');

    FastClick({
      contentSelector: '.js-content',
      onNavigate: function onNavigate(href, content) {
        body.className = content.dataset.page;
      }
    });

    rotateText(dom.querySelector('.js-rotate'));
  });
})(document);