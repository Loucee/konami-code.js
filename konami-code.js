
var konamiCode = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ];
var currentSequence = [ ];
var KonamiCode = {
	cheatsOn: false,
	onComplete: function() {
		document.body.innerHTML += "<div class='kc-cheats'>CHEATS <span class='kc-cheats-on'>ON</span></div>";
	},
	onFailed: function() { },
	onKeyPressed: function(keyCode) {
		document.body.innerHTML += `<div class='kc-key-popup'><div class='kc-key-popup-inner'>${_keyFromCode(keyCode)}</div></div>`;
	}
}

document.addEventListener('keydown', function(event) {
	var keyCode = event.keyCode || event.which;

	if (KonamiCode.cheatsOn) {
		return;
	}

	if (keyCode == konamiCode[currentSequence.length]) {
		currentSequence.push(keyCode);

		if (currentSequence.length == konamiCode.length) {
			currentSequence = [];
			KonamiCode.cheatsOn = true;

			KonamiCode.onComplete();
		}

		KonamiCode.onKeyPressed(keyCode);		
	}
	else {
		if (currentSequence.length > 0) {
			KonamiCode.onFailed();
		}
		currentSequence = [];
	}
});

function _keyFromCode(keyCode) {
	if (keyCode == 38) {
		return '<svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>';
	}
	if (keyCode == 40) {
		return '<svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>';
	}
	if (keyCode == 37) {
		return '<svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>';
	}
	if (keyCode == 39) {
		return '<svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>';
	}

	return String.fromCharCode(keyCode)
}
