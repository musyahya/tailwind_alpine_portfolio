let mix = require("laravel-mix");

mix.css("src/css/app.css", "css").setPublicPath("public");
mix.js("src/js/app.js", "js").setPublicPath("public");
