<div class="cookiebanner" id="cookiebanner">
    <div class="section section--light section--sml">
        <div class="container">
            <div class="cookie__wrapper">
                <div class="cookie__body">
                    {'cookie_banner_description'|translate}
                </div>
                <div class="cookie__cta inline">
                    <a href="#" class="inline__item cookiemonster__settings js-cookie-settings">{'cookie_settings'|translate}</a>
                    <a href="#" class="button cookiemonster__accept js-cookie-accept">{'cookies_accept'|translate}</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="cookie-modal" id="cookieModal">
    <div class="cookie-modal__content">
        <h2 class="text--center">{'cookie_settings'|translate}</h2>
        <p class="modal__description">
            {'cookies_modal_description'|translate}
        </p>
        <form>
            <div class="cookie__section">
                <strong class="cookie__title">{'cookies_essential'|translate}</strong><br>
                <small class="block modal__description">
                    {'cookies_essential_description'|translate}<br>
                </small>
                <input class="js-cookie-essential" type="checkbox" name="essential" id="essential"  disabled="disabled" checked="checked">

                <label> {'cookies_always_active'|translate}</label>
            </div>
            <div class="cookie__section">
                <strong class="cookie__title">{'cookies_analytics'|translate}</strong><br>
                <small class="block modal__description">
                    {'cookies_analytics_description'|translate}<br>
                </small>
                <input class="js-cookie-performance" type="checkbox" name="CookiePerformance" id="performance" value="2">
                <label for="performance" id="performanceLabel" class="js-cookie-performance"> {'cookies_active'|translate}</label>
            </div>
            <div class="cookie__section">
                <strong class="cookie__title">{'cookies_marketing'|translate}</strong><br>
                <small class="block modal__description">
                    {'cookies_marketing_description'|translate}<br>
                </small>
                <input class="js-cookie-marketing" type="checkbox" name="CookieMarketing" id="marketing" value="3">
                <label for="marketing" id="marketingLabel" class="js-cookie-marketing"> {'cookies_active'|translate}</label>
            </div>
        </form>
        <p class="text--center spacer">
            <a href="#" class="btn js-modal-close">{'cookies_close'|translate}</a>
        </p>
    </div>
</div>