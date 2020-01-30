<?php

namespace ride\web;

use ride\library\event\Event;
use ride\library\http\Request;
use ride\library\mvc\Response;
use ride\library\mvc\view\HtmlView;
use ride\library\mvc\view\View;

/**
 * Listener to hook the GDPR listener into Ride
 */
class GdprApplicationListener {

    /**
     * Path to the javascript
     * @var string
     */
    const SCRIPT_COOKIEBANNER = 'js/gdpr.js';

    /**
     * Path to the css
     * @var string
     */
    const STYLES = 'css/gdpr.css';

    /**
     * Id of the node where cookie policy is written down
     * @var string
     */
    private $policy_node;

    /**
     * Constructs the cookie monster
     * @param string $policy_node
     * @return null
     */
    public function __construct($policy_node = null) {
        $this->policy_node = $policy_node;
    }

    /**
     * Event listener to add the GDPR modal to the response if applicable
     * @param \ride\library\event\Event $event
     * @return null
     */
    public function addGdpr(Event $event) {
        $web = $event->getArgument('web');

        $request = $web->getRequest();
        $response = $web->getResponse();
        $view = $response->getView();

        if ($this->shouldAddGdpr($request, $response, $view)) {
            $view->addStyle($request->getBaseUrl().'/'.self::STYLES);
            $view->addJavascript($request->getBaseUrl().'/'.self::SCRIPT_COOKIEBANNER);
            $view->getTemplate()->set('policy_node', $this->policy_node);
        }

    }

    /**
     * Checks if the GDPR modal should be added
     * @param \ride\library\http\Request $request
     * @param \ride\library\mvc\Response $response
     * @param \ride\library\mvc\view\View $view
     * @return boolean
     */
    private function shouldAddGdpr(Request $request, Response $response, View $view = null) {
        if (!$view || !$view instanceof HtmlView) {
            return false;
        }

        return true;
    }
}
