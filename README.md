# Password Policy - 90 Days
A Drupal recipe that installs and configures Password Policy and sets 90-day expiration default.

## Configuring Drupal for Recipes

See https://www.drupal.org/files/issues/2023-10-01/Configuring%20Drupal%20to%20Apply%20Recipes.md

## Installing this Recipe

`composer require kanopi/password-policy-90-days`

## Applying this Recipe

From your webroot run `php core/scripts/drupal recipe recipes/contrib/password-policy-90-days` and `drush cr`

If you have our Docksal command in your project, `fin recipe-apply password-policy-90-days`

## Unpacking this Recipe

To unpack this recipe's dependencies to your site's composer.json, in the root of your project run:

`composer unpack kanopi/password-policy-90-days`

If you have our Docksal command in your project, `fin recipe-unpack kanopi/password-policy-90-days`

## Known Issues

* If the Password Policy module is currently enabled, installation will fail.
