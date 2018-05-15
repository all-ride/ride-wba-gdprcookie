<div class="cookiebanner" id="cookiebanner">
    <div class="section section--light section--sml">
        <div class="container">
            <div class="cookie__wrapper">
                <div class="cookie__body">
                    {'label.cookiebanner'|translate}
                </div>
                <div class="cookie__cta inline">
                    <a href="#" class="inline__item cookiemonster__settings js-cookie-settings">{'settings.notice.gdpr'|translate}</a>
                    <a href="#" class="btn cookiemonster__accept js-cookie-accept">{'accept.notice.gdpr'|translate}</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="cookie-modal" id="cookieModal">
    <div class="cookie-modal__content">
        <h2 class="text--center">{'settings.notice.gdpr'|translate}</h2>
        <p class="modal__description">
            {'body.notice.gdpr'|translate}
        </p>
        <br>
        <form>
            <div class="cookie__section">
                <strong class="cookie__title">{'title.essential.modal.gdpr'|translate}</strong><br>
                <p class="block modal__description">
                    {'text.essential.modal.gdpr'|translate}<br>
                </p>
                <input class="js-cookie-essential" type="checkbox" name="essential" id="essential"  disabled="disabled" checked="checked">

                <label> {'alwaysactive.gdpr'|translate}</label>
            </div>
            <div class="cookie__section">
                <strong class="cookie__title">{'title.performance.modal.gdpr'|translate}</strong><br>
                <p class="block modal__description">
                    {'text.performance.modal.gdpr'|translate}<br>
                </p>
                <input class="js-cookie-performance" type="checkbox" name="CookiePerformance" id="performance" value="2">
                <label for="performance" id="performanceLabel" class="js-cookie-performance"> {'active.gdpr'|translate}</label>
            </div>
            <div class="cookie__section">
                <strong class="cookie__title">{'title.marketing.modal.gdpr'|translate}</strong><br>
                <p class="block modal__description">
                    {'text.marketing.modal.gdpr'|translate}<br>
                </p>
                <input class="js-cookie-marketing" type="checkbox" name="CookieMarketing" id="marketing" value="3">
                <label for="marketing" id="marketingLabel" class="js-cookie-marketing"> {'active.gdpr'|translate}</label>
            </div>
        </form>
        <p class="text--center spacer">
            <a href="#" class="btn js-modal-close">{'close.modal.gdpr'|translate}</a>
        </p>
    </div>
</div>