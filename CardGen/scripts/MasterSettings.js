/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * The Master settings
 * 
 * @returns {MasterSettings}
 */
function MasterSettings(){
	
	this.iin;
	this.length = 16;
	
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
		var firstsDigitsMaster = [ 51, 52, 53, 54, 55 ];
		return firstsDigitsMaster[parseInt(Math.random() * 5)];
	};
	
	this.generate();
}