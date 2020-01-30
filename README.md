# Ride: GDRP Cookie notice & modal

## Installation

You can use [Composer](http://getcomposer.org) to install this application.

```
composer require ride/wba-gdprcookie
```

## Usage

The module includes a script & styling for a cookie banner and a modal where the visitor can select his/her cookie preferences.

For this to work you'll have to add the following snippet to your `base/index.tpl`. Preffered right before the `</body>` closing tag.

```smarty
<!-- Adds the cookie template to your page -->
{if isset($gdprTemplate)}
    {$gdprTemplate}
{/if}
<!-- End of cookie template snippet -->
```

 
