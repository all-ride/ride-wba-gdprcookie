<?php

namespace ride\web;

use ride\library\event\Event;
use ride\library\http\Request;
use ride\library\mvc\Response;
use ride\library\mvc\view\HtmlView;
use ride\library\mvc\view\View;
use ride\web\base\service\TemplateService;

/**
 * Listener to hook the GDPR listener into Ride
 */
class GdprApplicationListener {
    /**
     * Path to the javascript
     *
     * @var string
     */
    const SCRIPT_COOKIEBANNER = 'js/cookie-consent.js';

    /**
     * Path to the css
     *
     * @var string
     */
    const STYLES = 'css/cookie-consent.css';

    /**
     * Id of the url where cookie policy is written down
     *
     * @var string|array
     */
    private $policyUrl;

    /**
     * Boolean to set if you use custom styling of the default styling
     * @var boolean
     */
    private $customStyle;

    /**
     * @var \ride\web\base\service\TemplateService
     */
    private $templateService;

    /**
     * Constructs the cookie monster
     *
     * @param TemplateService $templateService
     * @param string $policyUrl
     * @param bool $customStyle
     */
    public function __construct(TemplateService $templateService, $policyUrl = null, $customStyle = false) {
        $this->policyUrl = $policyUrl;
        $this->templateService = $templateService;
        $this->customStyle = $customStyle;
    }

    /**
     * Event listener to add the GDPR modal to the response if applicable
     *
     * @param \ride\library\event\Event $event
     * @return null
     */
    public function addGdpr(Event $event) {
        try {
            $web = $event->getArgument('web');

            $request = $web->getRequest();
            $response = $web->getResponse();
            $view = $response->getView();
            $this->getLocale($request);

            if ($this->shouldAddGdpr($view)) {

                if (!$this->customStyle) {
                    $view->addStyle($request->getBaseUrl().'/'.self::STYLES);
                }
                $view->addJavascript($request->getBaseUrl().'/'.self::SCRIPT_COOKIEBANNER);
                $template = $this->templateService->createTemplate('base/cookie/default', ['policyUrl' => $this->policyUrl]);
                $gdprTemplate = $this->templateService->render($template);
                $view->getTemplate()->set('gdprTemplate', $gdprTemplate);
            }

            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Checks if the GDPR modal should be added
     *
     * @param \ride\library\http\Request $request
     * @param \ride\library\mvc\Response $response
     * @param \ride\library\mvc\view\View $view
     * @return boolean
     */
    private function shouldAddGdpr(View $view = null) {
        return !(!$view || !$view instanceof HtmlView);
    }

    private function getLocale(Request $request) {
        if (is_array($this->policyUrl) && $request->getRoute()->getLocale()) {
            $this->policyUrl = $this->policyUrl[$request->getRoute()->getLocale()];
        } elseif(is_array($this->policyUrl)) {
            $this->policyUrl = array_shift($this->policyUrl);
        }
    }
}
