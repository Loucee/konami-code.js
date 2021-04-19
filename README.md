# konami-code.js
Konami code easter egg

## Usage and demo
Once you include the script, simply go to your website and try the konami code (up, up, down, down, left, right, left, right, B, A)
You can see the script in action on [my website.](https://loucee.dev)

If you would like to change the effects on the code, simply override the events in the script:

```js
KonamiCode.onComplete = function() {
  // Konami code finished successfully
}

KonamiCode.onFailed = function() {
  // Konami code sequence interrupted
}

KonamiCode.onKeyPressed = function(keyCode) {
  // On correct key input
  // keyCode for the pressed key is passed to this function
}
```

Once the code is entered successfully you can reset by setting `KonamiCode.cheatsOn` back to false

## Installation
Include either konami-code.min.js **and** konami-code.min.css on the page you want to use it on *or* include the [single file version](https://github.com/Loucee/konami-code.js/blob/main/release/one-file/konami-code.min.js)

```html
<link rel="stylesheet" href="css/konami-code.min.css">
<script type="text/javascript" src="js/konami-code.min.js"></script>
```

## License
MIT
