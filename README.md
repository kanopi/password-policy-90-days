# Password Policy - 90 Days
A Drupal recipe that installs and configures Password Policy and sets 90-day
expiration default.

This recipe installs a Password Policy that has the following rules:

* Password must be changed every 90 days.
* Password can't be one of the 5 most recent passwords.
* Password must contain at least 1 letter character.
* Password must contain at least 1 special character.
* Password must contain at least 1 uppercase character.
* Password must contain at least 1 lowercase character.
* Password must contain at least 1 numeric character.
* Password character length must be at least 12 characters


## Configuring Drupal for Recipes

See https://www.drupal.org/files/issues/2023-10-01/Configuring%20Drupal%20to%20Apply%20Recipes.md


## Installing this Recipe

`composer require kanopi/password-policy-90-days`


## Applying this Recipe

CD into your webroot.
Run`php core/scripts/drupal recipe recipes/contrib/password-policy-90-days`
Run `drush cr`

If you have our Docksal command in your project, run the following command:
`fin recipe-apply password-policy-90-days`


## Unpacking this Recipe

To unpack this recipe's dependencies to your site's composer.json, in the root
of your project run:

`composer unpack kanopi/password-policy-90-days`

If you have our Docksal command in your project, run the following command:
`fin recipe-unpack kanopi/password-policy-90-days`


## Known Issues

* If the Password Policy module is currently enabled, installation will fail.
