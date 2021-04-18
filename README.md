# konami-code.js
Konami code easter egg

## Usage and demo
Once you include the script, simply go to your website and try the konami code (up, up, down, down, left, right, left, right, B, A)
You can see the script in action on [my website.](https://loucee.dev)

If you would like to change the effects on the code, simply override the events in the script:

```js
KonamiCode.onDone = function() {
  // Konami code finished successfully
}

KonamiCode.onFail = function() {
  // Konami code sequence interrupted
}

KonamiCode.onNext = function(keyCode) {
  // On correct key input
  // keyCode for the pressed key is passed to this function
}
```

Once the code is entered successfully you can reset by setting `KonamiCode.cheatsOn` back to false

## Installation
Include either konami-code.min.js **and** konami-code.min.css on the page you want to use it on *or* include the [single file version]()

## License
MIT
