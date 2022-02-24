# Ride: GDRP Cookie notice & modal

## Installation

You can use [Composer](http://getcomposer.org) to install this application.

```
composer require ride/wba-gdprcookie
```

## Usage

The module includes a script & styling for a cookie banner and a modal where the visitor can select his/her cookie preferences.

You need to include the following snippet in your `base/index.tpl`. 
Right underneath the `content_body` block

```smarty
<!-- Adds the cookie template to your page -->
{if isset($gdprTemplate)}
    {$gdprTemplate}
{/if}
<!-- End of cookie template snippet -->
```

Add the link to the settings on your page.
```
<a href="javascript:void(0)" class="js-lcc-settings-toggle">{'cookies.settings_title'|translate}</a>
```

In your `parameters.json` you set the url to your cookie policy page.
This has to be done per language.
eg.

`cookies.policy_url.nl => 'https://your.policy.url'

`cookies.policy_url.en` => 'https://your.policy.url'

`cookies.policy_url.fr` => 'https://your.policy.url'

If there is only one language present you can just set

`cookies.policy_url` => 'https://your.policy.url'

### Don't forget to add your cookie policy page to the ignored paths
You don't want the modal to pop up on your policy page.
So in your `parameters.json` add:
`"cookies.ignored_paths": "/en/cookie-policy"`

Always use the __relative url__.

If you want to add more ignored paths for let's say multisites,
use the ignored paths as in the example below.

Cookie settings can be altered in parameters too:
```
  "cookies.cookie_key": "__cookie_consent",
  "cookies.cookie_value_analytics": "2",
  "cookies.cookie_value_marketing": "3",
  "cookies.cookie_value_both": "true",
  "cookies.cookie_value_none": "false",
  "cookies.cookie_expiration_days": "365",
  "cookies.gtm_event": "cookie_refresh",
  "cookies.ignored_paths.0": "",
  "cookies.ignored_paths.1": "",
  "cookies.custom_style": false
```

 ## UPDATING FROM 2.2.0 TO 2.3.0
 Translations have changes in this update. If you overwrite some in your own project, be sure to check if they are up to date.


