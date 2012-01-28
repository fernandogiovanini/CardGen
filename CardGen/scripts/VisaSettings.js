/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * The Visa settings
 * 
 * @returns {VisaSettings}
 */
function VisaSettings(){
	
	this.iin = 4;
	this.length;
	
	this.getIin = function(){
		return this.iin.toString();
	};
	
	this.getLength = function(){
		return this.length.toString();
	};
	
	this.generate = function(){
		this.length = generateLength();
	};
	
	function generateLength() {
		var visaLenght = [ 16, 13 ];
		return visaLenght[parseInt(Math.random() * 2)];
	};
	
	this.generate();
}