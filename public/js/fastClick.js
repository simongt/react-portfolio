'use strict';

(function (root, dom) {

  root.FastClick = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    if (!history.pushState) {
      return;
    }

    var contentSelector = options.contentSelector || 'body',
      onNavigate = options.onNavigate || function () {},
      parser = new DOMParser();

    var removeHash = function removeHash(href) {
      var index = href.indexOf('#');
      return index === -1 ? href : href.substr(0, index);
    };

    var cache = {};
    var content = dom.querySelector(contentSelector),
      queued = undefined,
      currentHref = removeHash(root.location.href);

    var isPreloadable = function isPreloadable(element) {
        return element.tagName === 'A' && element.host === root.location.host && (element.href.indexOf('#') === -1 || removeHash(element.href) !== currentHref);
      },
      filterEvents = function filterEvents(callback) {
        return function (event) {
          if (isPreloadable(event.target)) {
            event.preventDefault();
            callback(event.target.href);
          }
        };
      },
      cachePage = function cachePage(href) {
        if (href in cache) return;

        var request = new XMLHttpRequest();
        cache[href] = {
          request: request
        };

        request.open('GET', href, true);

        request.onreadystatechange = function () {
          if (request.readyState === 4) {

            var page = parser.parseFromString(request.responseText, 'text/html'),
              title = page.querySelector('title');

            cache[href].content = page.querySelector(contentSelector);
            cache[href].title = title && title.innerText;

            if (queued === href) {
              dequeue();
              navigate(href);
            }
          }
        };

        request.send();
      },
      navigate = function navigate(href) {
        var next = cache[href];

        content.replaceWith(next.content);
        content = next.content;

        dom.title = next.title;

        if (currentHref !== href) {
          history.pushState({}, '', href);
          currentHref = href;
        }

        onNavigate(href, content);
      },
      enqueue = function enqueue(href) {
        return queued = href;
      },
      dequeue = function dequeue() {
        return queued = undefined;
      };

    dom.addEventListener('mouseover', filterEvents(cachePage));

    dom.addEventListener('click', filterEvents(function (href) {
      if (href in cache && cache[href].content) {
        navigate(href);
      } else {
        enqueue(href);
        cachePage(href);
      }
    }));

    root.addEventListener('popstate', function (event) {
      var href = root.location.pathname;

      if (href in cache && cache[href].content) {
        navigate(href);
      } else {
        enqueue(href);
        cachePage(href);
      }
    });
  };
})(window, document);
