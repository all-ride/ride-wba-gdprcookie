# Ride: GDRP Cookie notice & modal

## Installation

You can use [Composer](http://getcomposer.org) to install this application.

```
composer require ride/wba-gdprcookie
```

## Usage

The module includes a script & styling for a cookie banner and a modal where the visitor can select his/her cookie preferences.

In your `parameters.json` you set the url to your cookie policy page.
This has to be done per language.
eg.

`gdpr.policyUrl.nl` => 'https://your.policy.url'

`gdpr.policyUrl.en` => 'https://your.policy.url'

`gdpr.policyUrl.fr` => 'https://your.policy.url'

If there is only one language present you can just set

`gdpr.policyUrl` => 'https://your.policy.url'
 

You need to include the following snippet in your `base/index.tpl`.  Preferred right before the `</body>` closing tag.

```smarty
<!-- Adds the cookie template to your page -->
{if isset($gdprTemplate)}
    {$gdprTemplate}
{/if}
<!-- End of cookie template snippet -->
```

 
