/* Author: Statik */
(function (window) {
  'use strict';


  var CookieMonster = function () {
    var cookieWrapper;
    var __cookieCheckerCookieName = '__cookieGdpr';

    var _init = function () {
      var shouldRun = _getCookie(__cookieCheckerCookieName) ? false : true;
      if (shouldRun) {
        _renderCookieWrapper();
      } else {
        return;
      }
      document.body.addEventListener('click', _listener);
    };


    var _renderCookieWrapper = function () {
      var cookieTemplate = document.getElementById('cookiemonster');

      cookieWrapper = document.createElement('div');
      cookieWrapper.className = 'cookiemonster';
      cookieWrapper.innerHTML = '<div class="section section--light"><div class="container"><div class="cookie__wrapper">' +
      '<div class="cookie__body">' + rideApp.translator.translate('body.notice.gdpr') + '</div>' +
      '<div class="cookie__cta inline"><a href="#" class="inline__item cookiemonster__settings js-cookie-settings">' + rideApp.translator.translate('settings.notice.gdpr') + '</a>' +
      '<a href="#" class="inline__item btn btn--ext cookiemonster__accept js-cookie-accept">' + rideApp.translator.translate('accept.notice.gdpr') + '</a></div>' +
      '</div></div></div>';

      if (cookieTemplate) {
        cookieWrapper.innerHTML = cookieTemplate.innerHTML;
      }
      document.body.appendChild(cookieWrapper);
    };



    var _renderCookieModal = function() {

        //check if the modal was already opened before
        var cookieModal = document.getElementById('cookieModal');
        
        if (cookieModal) {
          // _isCookieChecked('performance');
          // _isCookieChecked('marketing');

          cookieModal.classList.toggle("superhidden");
          return;
        }

        cookieModal = document.createElement('div');
        cookieModal.id = 'cookieModal';
        cookieModal.className = 'cookie-modal';
        cookieModal.innerHTML = '<div class="cookie-modal__content">' +
        '<h2 class="text--center">' + rideApp.translator.translate('title.modal.gdpr') + '</h2>' +
        rideApp.translator.translate('intro.modal.gdpr') +
        '<form>' +

        '<p class="spacer"><strong class="cookie__title">' + rideApp.translator.translate('title.essential.modal.gdpr') + '</strong><br>' +
        rideApp.translator.translate('text.essential.modal.gdpr') +
        '<br><label>' + rideApp.translator.translate('alwaysactive.gdpr') + '</label>' +

        '</p><p><strong class="cookie__title">' + rideApp.translator.translate('title.performance.modal.gdpr') + '</strong><br>' +
        rideApp.translator.translate('text.performance.modal.gdpr') +
        '<br><input class="js-cookie-performance" type="checkbox" name="CookiePerformance" id="performance" checked value="2"><label for="performance" id="performanceLabel" class="js-cookie-performance">' + rideApp.translator.translate('active.gdpr') + '</label>' +

        '</p><p><strong class="cookie__title">' + rideApp.translator.translate('title.marketing.modal.gdpr') + '</strong><br>' +
        rideApp.translator.translate('text.marketing.modal.gdpr') +
        '<br><input class="js-cookie-marketing" type="checkbox" name="CookieMarketing" id="marketing" checked value="3"><label for="marketing" id="marketingLabel" class="js-cookie-marketing">' + rideApp.translator.translate('active.gdpr') + '</label>' +

        '</p></form>' +
        '<p class="text--center spacer"><a href="#" class="btn js-modal-close">' + rideApp.translator.translate('close.modal.gdpr') + '</a></p>' +
        '</div>';

        document.body.appendChild(cookieModal);
      };


      // check when links get clicked
      var _listener = function (event) {
        var element = event.target;
        if (!element) {
          return;
        }

        if (_hasClass(element, 'js-cookie-settings')) {
          event.preventDefault();
          _renderCookieModal();

        } else if (_hasClass(element, 'js-cookie-accept')) {
          event.preventDefault();
          _setCookie(__cookieCheckerCookieName, '365', true);
          _removeCookieWrapper();

        } else if (_hasClass(element, 'js-modal-close')) {
          event.preventDefault();
          _setCookie(__cookieCheckerCookieName, '365', true);
          _closeCookieModal();
          _removeCookieWrapper();
          location.reload();

        } else if (_hasClass(element, 'js-cookie-performance')) {
          _updateCheckbox('performance');

        } else if (_hasClass(element, 'js-cookie-marketing')) {
          _updateCheckbox('marketing');
        }
      };


      var _closeCookieModal = function() {

        if (_isCookieChecked('performance')==true && _isCookieChecked('marketing')==false) {
          _setCookie('gdpr', '365', 2);
        }

        if (_isCookieChecked('marketing')==true && _isCookieChecked('performance')==false) {
          _setCookie('gdpr', '365', 3);
        }

        var cookieModal = document.getElementById('cookieModal');
        cookieModal.classList.toggle("superhidden");
      };


      var _updateCheckbox = function(label) {
        var checkboxvar = document.getElementById(label);
        var labelvar = document.getElementById(label+'Label');

        if ((checkboxvar.defaultChecked && !(checkboxvar.checked)) || !(checkboxvar.checked))  {
          labelvar.innerHTML = rideApp.translator.translate('notactive.gdpr');
          checkboxvar.checked=false;
          checkboxvar.defaultChecked=false;
        }
        else {
          labelvar.innerHTML = rideApp.translator.translate('active.gdpr');
          checkboxvar.checked=true;
        }
      };

      var _isCookieChecked = function(cookie) {
        var cookieId = document.getElementById(cookie);
        if ((cookieId.checked)==true || (cookieId.defaultChecked)) {
          return true;
        }
        else {
          return false;
        }

      };

      var _removeCookieWrapper = function () {
        document.body.removeChild(cookieWrapper);
      };

      var _hasClass = function (element, selector) {
        return element.className && new RegExp("(\\s|^)" + selector + "(\\s|$)").test(element.className);
      };

      var _getCookie = function (key) {
        if (!key) {
          return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      };

      var _setCookie = function (key, expireDays, value) {
        if (expireDays) {
          var date = new Date();
          date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
          var expires = date.toUTCString();
        }
        document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + (expires ? '; expires=' + expires : "") + "; path=/";
      };

      return {
        init: _init
      };
    };

    var cookie = new CookieMonster();
    // init and check is already being done in original cookiemonster??
    // window.onload = cookie.init();

    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", cookie.init, false);
    }
  })(window, undefined);

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || null;
  }
