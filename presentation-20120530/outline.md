Outline for Presentation (2012-05-30)
=====================================

1. Print Has It Easy
	1. Pretty typefaces make designers happy
	1. Well-made typefaces make customers happy
	1. Font licensing technology makes foundries happy
1. Web Has It Hard
	1. "Web safe" typefaces make designers bored
	1. Inconsistent typefaces make customers confused
	1. Previous font licensing technology makes foundries uneasy
	1. Previous font licensing technology makes developers frustrated
1. What to do?
	1. How do we get typefaces that make designers, customers, foundries, and developers all happy at the same time?
	1. Webfonts (@font-face)
1. About Webfonts (@font-face)
	1. New technology that makes font use easy and secure
	1. Took improvements in fonts and browsers
	1. Can now change fonts as easily as colors
	1. I first wrote about this two years ago [http://www.ls-unscripted.com/index.php/2010/03/23/web-fonts-my-journey-to-good-enough-for-now/]
1. Benefits of Webfonts
	1. No creating images for fancy headlines
	1. Better typography
	1. Easy update and maintenance
	1. Faster load time
1. Demo
	1. This sentence uses the old, web-safe font, Verdana.
	1. This sentence uses a webfont called "Tangerine".
1. Code
	1. ```@font-face {
    font-family: 'Megalopolis';
    src: url('fonts/megalopolisextra-webfont.eot');
    src: url('fonts/megalopolisextra-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/megalopolisextra-webfont.woff') format('woff'),
         url('fonts/megalopolisextra-webfont.ttf') format('truetype'),
         url('fonts/megalopolisextra-webfont.svg#MEgalopolisExtraRegular') format('svg');
    font-weight: normal;
    font-style: normal; }```
1. Find Webfonts
	1. Paid Options
		1. Typekit (by Adobe) [https://typekit.com/]
		1. FontSpring [http://www.fontspring.com/fontface]
		1. Ascender Fonts [http://www.ascenderfonts.com/webfonts/]
	1. Free Options
		1. FontSquirrel [http://www.fontsquirrel.com/]
		1. Google web fonts [http://www.google.com/webfonts]
1. Guidelines
	1. Most foundries require additional web license
	1. Searching for "look-a-likes" painstaking
	1. Have a back-up in mind
	1. No good mocking options for paid services