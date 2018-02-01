# Ride: GDRP Cookie notice & modal

## Installation

You can use [Composer](http://getcomposer.org) to install this application.

```
composer require ride/web-gdprcookie
```


## Translation

To translate the strings in in the notice and modal, you have to add the keys to the exposed translations the `parameters.json` of your project.

    "i18n.expose.nl.1": "body.notice.gdpr",
    "i18n.expose.nl.2": "settings.notice.gdpr",
    "i18n.expose.nl.3": "accept.notice.gdpr",
    "i18n.expose.nl.4": "title.modal.gdpr",
    "i18n.expose.nl.5": "title.essential.modal.gdpr",
    "i18n.expose.nl.6": "title.performance.modal.gdpr",
    "i18n.expose.nl.7": "title.marketing.modal.gdpr",
    "i18n.expose.nl.8": "intro.modal.gdpr",
    "i18n.expose.nl.9": "text.essential.modal.gdpr",
    "i18n.expose.nl.10": "text.performance.modal.gdpr",
    "i18n.expose.nl.11": "text.marketing.modal.gdpr",
    "i18n.expose.nl.12": "close.modal.gdpr",
    "i18n.expose.nl.13": "active.gdpr",
    "i18n.expose.nl.14": "notactive.gdpr",
    "i18n.expose.nl.15": "alwaysactive.gdpr",
    
Add translations for these in your project and they will be used in the notice and modal.
