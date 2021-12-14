# Personal website

Yoinked from gatsby-starter-strata by [HTML5 UP](https://html5up.net/)

If the CV has changed, re-build with `gatsby build` then run:
 - 1st terminal: `gatsby serve`
 - 2nd terminal: `wkhtmltopdf --viewport-size 1000 --zoom 1.1 http://localhost:9000/cv src/assets/Teo_Cherici_CV.pdf`
to generated new CV.
Play with the zoom value to find a good page spacing.
Verify quality of pdf, build and release.