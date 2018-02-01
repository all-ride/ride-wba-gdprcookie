/* Author: Statik */
(function(window) {
    'use strict';

    var CookieMonster = function() {
      var cookieWrapper;
      var __cookieCheckerCookieName = '__cookieCheckerCookieName';

      var _init = function() {
        var shouldRun = _getCookie(__cookieCheckerCookieName) ? false : true;
        if (shouldRun) {
          _renderCookieWrapper();
        } else {
          return;
        }

        document.body.addEventListener('click', _listener);
      };

      var _closeCookieModal = function() {
        var cookieModal = document.getElementById('cookieModal');
        cookieModal.classList.toggle("superhidden");
      };

      var _checked = function(checkbox) {
            var checkboxvar = document.getElementById(checkbox);
            var labelvar = document.getElementById(checkbox+'Label');
            if (checkboxvar.checked == false){
                labelvar.innerHTML = "niet actief";
            }
            else{
                labelvar.innerHTML = "actief";
            }
        };


      var _renderCookieWrapper = function() {
        var cookieTemplate = document.getElementById('cookiemonster');

        cookieWrapper = document.createElement('div');
        cookieWrapper.className = 'cookiemonster';
        cookieWrapper.innerHTML = '<div class="section section--light"><div class="container"><div class="cookie__wrapper">' +
          '<div class="cookie__body">' + rideApp.translator.translate('body.notice.gdpr') + '</div>' +
          '<div class="cookie__cta inline"><a href="#" class="inline__item cookiemonster__settings js-cookie-settings">' + rideApp.translator.translate('settings.notice.gdpr') + '</a>>' +
          '<a href="#" class="inline__item btn btn--ext cookiemonster__accept js-cookie-accept">' + rideApp.translator.translate('accept.notive.gdpr') + '</a></div>' +
          // '<a href="#" class="cookiemonster__close js-cookie-close">&times;</a>' +
          
        '</div></div></div>';

        if (cookieTemplate) {
          cookieWrapper.innerHTML = cookieTemplate.innerHTML;
        }
        document.body.appendChild(cookieWrapper);
      };

      var _renderCookieModal = function() {
        var cookieModal = document.getElementById('cookiemodal');
        
        //check if the modal was already opened before
        if (cookieModal) {
          cookieModal.classList.toggle("superhidden");
          return;
        }

        cookieWrapper = document.createElement('div');
        cookieWrapper.id = 'cookieModal';
        var cookieModal = document.getElementById('cookieModal');
        console.log(cookieModal);
        cookieWrapper.className = 'cookie-modal';
        cookieWrapper.innerHTML = '<div class="cookie-modal__content">' +
        '<h2 class="text--center">' + rideApp.translator.translate('Cookie settings') + '</h2>' + 
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, aliquid saepe. Aspernatur harum eaque temporibus. Debitis, a." +
        '<form>' +

        '<p class="spacer"><strong class="cookie__title">' + rideApp.translator.translate('Essentiële cookies') + '</strong><br>' +
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
         '<br><label>' + rideApp.translator.translate('altijd actief') + '</label>' +

         '</p><p><strong class="cookie__title">' + rideApp.translator.translate('Performance cookies') + '</strong><br>' +
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
         '<br><input class="js-cookie-performance" type="checkbox" name="" id="CookiePerformance" value="' + rideApp.translator.translate('altijd actief') + '"> <label id="CookiePerformanceLabel">' + rideApp.translator.translate('altijd actief') + '</label>' +

         '</p><p><strong class="cookie__title">' + rideApp.translator.translate('Marketing cookies') + '</strong><br>' +
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
         '<br><input class="js-cookie-marketing" type="checkbox" name="" id="CookieMarketing" value="' + rideApp.translator.translate('altijd actief') + '"> <label id="CookieMarketingLabel">' + rideApp.translator.translate('altijd actief') + '</label>' +

         '</p></form>' + 
         '<p class="text--center spacer"><a href="#" class="btn js-modal-close">' + rideApp.translator.translate('Sluiten') + '</a></p>' +
        '</div>';

          document.body.appendChild(cookieWrapper);
        
      };

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
          _setCookie(__cookieCheckerCookieName, '365');
          _removeCookieWrapper();

        } else if (_hasClass(element, 'js-modal-close')) {
          event.preventDefault();
          _closeCookieModal();

        } else if (_hasClass(element, 'js-cookie-performance')) {
          _setCookie('performance', '365');
          _checked('CookiePerformance');

        } else if (_hasClass(element, 'js-cookie-marketing')) {
          _setCookie('marketing', '365');
          _checked('CookieMarketing');
        }


      };

      var _removeCookieWrapper = function() {
        document.body.removeChild(cookieWrapper);
      }

      var _hasClass = function(element, selector) {
        return element.className && new RegExp("(\\s|^)" + selector + "(\\s|$)").test(element.className);
      };

      var _getCookie = function(key) {
        if (!key) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      };
      var _setCookie = function(key, expireDays) {
        if (expireDays) {
          var date = new Date();
          date.setTime(date.getTime() + (expireDays*24*60*60*1000));
          var expires = date.toUTCString();
        }
        document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent('true') + (expires ? '; expires=' + expires : "") + "; path=/";
      };

      return {
        init: _init
      };
    };

    var cookie = new CookieMonster();
    // window.onload = cookie.init();

    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", cookie.init, false);
    }
})(window, undefined);

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || null;
}
