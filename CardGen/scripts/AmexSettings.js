/*
 * Code by www.giovanini.me - Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * The Amex settings
 * 
 * @returns {AmexSettings}
 */
function AmexSettings(){
	
	this.iin;
	this.length = 15;
	
	this.getIin = function(){
		return this.iin.toString();
	};
	
	this.getLength = function(){
		return this.length.toString();
	};
	
	this.generate = function(){
		this.iin = generateInn();
	};
	
	function generateInn() {
		var firstsDigitsAmex = [ 34, 37 ];
		return firstsDigitsAmex[parseInt(Math.random() * 2)];
	};
	
	this.generate();
}