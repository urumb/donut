# Donut Factory Landing Page

Static luxury bakery landing page rebuilt with HTML5, Tailwind CSS, vanilla JavaScript, and GSAP.

## Structure

- `index.html` - semantic page markup and CDN dependencies
- `css/styles.css` - custom layout, cursor, responsive, and accessibility styles
- `js/main.js` - initialization, navigation, smooth anchors, and Swiggy ordering behavior
- `js/cursor.js` - custom donut cursor with bite and crumb effects
- `js/animations.js` - GSAP and ScrollTrigger reveal/parallax animations
- `js/ambient.js` - lightweight animated ambient canvas background
- `assets/images` and `assets/icons` - reserved for local optimized assets

## Run

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
```

All order buttons redirect to the Donut Factory Swiggy listing. Product `+` buttons show a short confirmation and then redirect; no cart functionality is implemented.
