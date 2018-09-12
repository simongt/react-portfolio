'use strict';

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    let arr2 = Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

(function (root, dom) {

  let textProperty = dom.createDocumentFragment('<div>').textContent ? 'textContent' : 'innerText',
    getText = function getText(element) {
      return element[textProperty];
    },
    setText = function setText(element, text) {
      return element[textProperty] = text;
    };

  let random = function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let choose = function choose(arr) {
    return arr[random(0, arr.length - 1)];
  };

  let pad = function pad(string, length) {
    return [].concat(_toConsumableArray(Array(length > string.length ? length - string.length : 0))).reduce(function (prev) {
      return prev + ' ';
    }, string);
  };
  let replace = function replace(string, index, char) {
    return string.substring(0, index) + char + string.substring(index + 1);
  };

  let glitchCharacters = ['!', '@', '#', '$', '%', '&', '*', '<', '>', '{', '}', '[', ']', '+', '-', '/'];
  let rotateStrings = ['web developer', 'photographer'/*, 'teacher'*/];

  let _tweenText = function _tweenText(element, prevText, nextText, indices, callback) {
    if (indices.length) {
      let index = choose(indices),
        location = indices.indexOf(index),
        newIndices = [].concat(_toConsumableArray(indices.slice(0, location)), _toConsumableArray(indices.slice(location + 1)));
      let newText = replace(prevText, index, nextText[index] || '');
      setText(element, newText);
      setTimeout(function () {
        return _tweenText(element, newText, nextText, newIndices, callback);
      }, random(25, 50));
    } else if (callback) {
      callback();
    }
  };

  root.rotateText = function (element) {

    if (!element) return;

    let runAnimation = function runAnimation() {
      return setInterval(function () {
        let currentText = getText(element).toLowerCase(),
          index = rotateStrings.indexOf(currentText),
          nextText = rotateStrings[index + 1 === rotateStrings.length ? 0 : index + 1],
          prevText = pad(currentText, nextText.length + 2),
          cipherText = nextText.split('').map(function (letter) {
            return choose(glitchCharacters);
          }).join(''),
          indices = prevText.split('').map(function (letter, index) {
            return index;
          });

        _tweenText(element, prevText, cipherText, indices, function () {
          _tweenText(element, cipherText, nextText, indices);
        });
      }, 5000);
    };

    let interval = runAnimation();

    dom.addEventListener('visibilitychange', function (event) {
      if (dom.hidden)
        clearInterval(interval);
      else
        interval = runAnimation();
    });
  };
})(window, document);
