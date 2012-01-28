/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * The Diners settings
 * 
 * @returns {DinersSettings}
 */
function DinersSettings(){
	
	this.iin;
	this.length = 14;
	
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
		var firstsDigitsDiners = [ 36, 300, 301, 302, 303, 304, 305 ];
		return firstsDigitsDiners[parseInt(Math.random()
				* firstsDigitsDiners.length)];
	};
	
	this.generate();
}