# Donut Factory Landing Page

Static luxury bakery landing page built with HTML5, CSS3, vanilla JavaScript, and GSAP.

## Structure

- `index.html` - semantic page markup and CDN dependencies for fonts/GSAP
- `css/styles.css` - custom responsive layout, hero donut, cursor, and accessibility styles
- `js/main.js` - initialization, navigation, smooth anchors, and Swiggy ordering behavior
- `js/cursor.js` - custom full-donut cursor with temporary bite and crumb effects
- `js/animations.js` - GSAP and ScrollTrigger reveal/parallax animations
- `js/ambient.js` - lightweight animated ambient canvas background
- `assets/images` and `assets/icons` - reserved for local optimized assets

## Run

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

All order buttons redirect to the Donut Factory Swiggy listing. Product `+` buttons show a short confirmation and then redirect; no cart functionality is implemented. The event orders CTA scrolls to the contact/footer section.
