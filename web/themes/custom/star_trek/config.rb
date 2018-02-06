# environment
# Use :production instead of :development to compile for release.

environment = :development


# location of the themes ressource

relative_assets = true
css_dir = "css"
sass_dir = "sass"
javascripts_dir = "js"
fonts_dir = "fonts"
# Use :expanded instead of :nested for respecting Drupal's coding standards (nested is more readable when working)
output_style = :expanded

# debugg scss
sass_options = (environment == :development && debug == true) ? {:debug_info => true} : {}