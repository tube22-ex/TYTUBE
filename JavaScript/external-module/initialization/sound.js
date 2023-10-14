const sound = {
	audio:[],
	index:0,
	init:()=>{
		for(let i=0;i<8;i++){
			sound.audio.push(new Audio(sound.data_uri));
		}
	},
	play:()=>{
		sound.audio[sound.index%sound.audio.length].play();
		sound.index += 1;
	},
	data_uri:"data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAbXA0MgBUWFhYAAAAEQAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAG1wNDFpc29tAFRTU0UAAAAPAAADTGF2ZjU5LjI3LjEwMAAAAAAAAAAAAAAA//tUwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAGAAAFQABJSUlJSUlJSUlJSUlJSUlJbW1tbW1tbW1tbW1tbW1tbW2SkpKSkpKSkpKSkpKSkpKStra2tra2tra2tra2tra2trbb29vb29vb29vb29vb29vb2/////////////////////8AAAAATGF2YzU5LjM3AAAAAAAAAAAAAAAAJAXcAAAAAAAABUAbuzFmAAAAAAAAAAAAAAAAAAAA//tUxAAAB9BNC7QxgAGOoe23EtACjAAABIAABAnELdzQDc4XT3dz4hf/ohUIjj/iCCGwo6UcGC7wQKOLg+UB9+Xfyf4gGggXHAgUONKODH/hj8EGBG5HGZFGYgwCQAEQCDaAAhgDM3aDEAFFqyk2ii3DmBNCcbIGkURLzMvGhrNJJoGiSHUhTOmyy4yqNrWZA0mB5avXt5MNTxgiyknQS0v/oczUuupb7beTigeMGABIqVJ/8PPJqhNbeWRTNMhA//tUxAQAClCPZfzxgAFWpmqw9Iw4BRiIcX86U6eBzPjKSkJTwVTBhawoYVquYUXAdXEkayhS2Uvh3/XM57Xfh8DuCaNp1z1DlmYBcHTuZaGirsKlSLlOSmN7taN9t2Jgns9mEgAHrgTEBQyAwIiAhXBhAEpjhGyjM4g2NsKWmZhGRlHcx7DWHmlTFceMrm7LssQu8ler9KN/rrpPOGV7ocIlncp3p0r6/wy/Zm/Vvu3B8OodENUEOFVkYzaIBBcP//tUxAUACrynUeYYbIFKDuq88w1gAAIhAXDc/A6ZO2LZkrKtEBhAmaQvdcyB4V2Ab1DXOh4D49k5nju2R0kiojehEetYhgKLiqS4pK6SwSHpJHUEHkDBfd951vwv2X2sKpDzcQqIpSAIMEEIeDSEnT6HIBDjpOVeTosYTkZ+ZqBKyk0FbnInWUCf0VzQiVGGz0ozDgWSKg4UmRo8maS2eel1Mc61q0rQf76x4Zn1PFosyFkKOJuHl3U0SAAVRWEi//tUxAYACtCrW+YIcIFLJK20kI57oNRcchQJCQtma983vAs60DgSr9T5CX0hLXc4Vrn/paPM5oiaKdCcIyDizRAAmrEjmrFziBttsLigo6FgxwfE9jykXrfRihwEIIDG99LHI0QUm4RB0AuGaKLQLYiLsp4irLyS0tyYcLinkIhfn9+f1BCZGmEApCCEMKznCaT54TeUJoHUyZWV1rF9Cw1i8zEu4I81kJjWy+8tMHgUrqoUeoiWZloAB0MJQ5AK//tUxAaACvCfTcYMz0FIE2dxhIzwLgGgZKi0rOtjscMwpWBgqOEBrW2kZiArfWNFU1Woy83MkVFqOAWIkUWWxImONRK1jh4+git1fW4nUPZUHhSVoTuLC6fbnSWyocHQFLbI2oAEBcgYJnSxnzoHzd0RDQ+YDQhKPZIoJsy/Vc1SbIYVtwvWGup/S1jf0mOkuzMa0KDASDCiz2kiPEUGuSPSqzpEREhKQUecDR2IgL/5KgAAIJAQDcG6UQdkwLCC//tUxAcDx7gY+UewwAAAADSAAAAEZA8sy3RUWQoWFyJn0gsLsioqLB78WFYhFRQW/ULs7dQuRxausUb+oXZirdQuzFRaTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
};

const clear_sound = {
	audio:[],
	index:0,
	init:()=>{
		for(let i=0;i<8;i++){
			clear_sound.audio.push(new Audio(clear_sound.data_uri));
		}
	},
	play:()=>{
		clear_sound.audio[clear_sound.index%clear_sound.audio.length].play();
		clear_sound.index += 1;
	},
	data_uri:"data:audio/mp3;base64,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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//u0bAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//u0bAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//u0bAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//u0bAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//u0bAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
};