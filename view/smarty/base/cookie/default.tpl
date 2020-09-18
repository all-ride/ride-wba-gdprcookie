{$config = $app.system->getConfig()}
{$cookies = $config->get('cookies')}
<div role="dialog" aria-labelledby="lcc-modal-alert-label" aria-describedby="lcc-modal-alert-desc" aria-modal="true" class="lcc-modal lcc-modal--alert js-lcc-modal js-lcc-modal-alert" style="display: none;"
     data-cookie-key="{$cookies['cookie_key']}"
     data-cookie-value-analytics="{$cookies['cookie_value_analytics']}"
     data-cookie-value-marketing="{$cookies['cookie_value_marketing']}"
     data-cookie-value-both="{$cookies['cookie_value_both']}"
     data-cookie-value-none="{$cookies['cookie_value_none']}"
     data-gtm-event="{$cookies['gtm_event'] }"
     data-cookie-expiration-days="{$cookies['cookie_expiration_days']}"
     data-ignored-paths="{$cookies['ignored_paths']|implode:','}"
>
    <div class="lcc-modal__content">
        <h2 id="lcc-modal-alert-label" class="lcc-modal__title">
            {translate key="cookies.alert_title"}
        </h2>
        <p id="lcc-modal-alert-desc" class="lcc-text">
            {translate key="cookies.alert_text"}
        </p>
    </div>
    <div class="lcc-modal__actions">
        <a href="#" class="lcc-button lcc-button--link js-lcc-settings-toggle">
            {translate key="cookies.alert_settings"}
        </a>
        <button type="button" class="lcc-button js-lcc-accept">
            {translate key="cookies.alert_accept"}
        </button>
    </div>
</div>

<div role="dialog" aria-labelledby="lcc-modal-settings-label" aria-describedby="lcc-modal-settings-desc" aria-modal="true" class="lcc-modal lcc-modal--settings js-lcc-modal js-lcc-modal-settings" style="display: none;">
    <button class="lcc-modal__close js-lcc-settings-toggle" type="button">
        <span class="lcc-u-sr-only">
            {translate key="cookies.settings_close"}
        </span>
        &times;
    </button>
    <div class="lcc-modal__content">
        <div class="lcc-modal__content">
            <h2 id="lcc-modal-settings-label" class="lcc-modal__title">
                {translate key="cookies.settings_title"}
            </h2>
            <p id="lcc-modal-settings-desc" class="lcc-text">
                {$locale = $app.locale}
                {translate key="cookies.settings_text" policyUrl=$policyUrl }
            </p>
            <div class="lcc-modal__section lcc-u-text-center">
                <button type="button" class="lcc-button js-lcc-accept">
                    {translate key="cookies.settings_accept_all"}
                </button>
            </div>
            <div class="lcc-modal__section">
                <label for="lcc-checkbox-essential" class="lcc-label">
                    <input type="checkbox" id="lcc-checkbox-essential" disabled="disabled" checked="checked">
                    <span>{translate key="cookies.setting_essential"}</span>
                </label>
                <p class="lcc-text">
                    {translate key="cookies.setting_essential_text"}
                </p>
            </div>
            <div class="lcc-modal__section">
                <label for="lcc-checkbox-analytics" class="lcc-label">
                    <input type="checkbox" id="lcc-checkbox-analytics">
                    <span>{translate key="cookies.setting_analytics"}</span>
                </label>
                <p class="lcc-text">
                    {translate key="cookies.setting_analytics_text"}
                </p>
            </div>
            <div class="lcc-modal__section">
                <label for="lcc-checkbox-marketing" class="lcc-label">
                    <input type="checkbox" id="lcc-checkbox-marketing">
                    <span>{translate key="cookies.setting_marketing"}</span>
                </label>
                <p class="lcc-text">
                    {translate key="cookies.setting_marketing_text"}
                </p>
            </div>
        </div>
    </div>
    <div class="lcc-modal__actions">
        <a href="#" class="lcc-button lcc-button--link js-lcc-settings-toggle">
            {translate key="cookies.settings_cancel"}
        </a>
        <button type="button" class="lcc-button js-lcc-settings-save">
            {translate key="cookies.settings_save"}
        </button>
    </div>
</div>

<div class="lcc-backdrop js-lcc-backdrop" style="display: none;"></div>