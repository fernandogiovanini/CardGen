/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * The Card Number Generator
 * 
 * @param algorithm LuhnAlgorithm
 * @returns {CardNumberGenerator}
 */
function CardNumberGenerator(algorithm){
	
	this.algorithm = algorithm;
	
	this.generate = function(cardSettings){
		var cardWithoutCheckDigit = generateCardWithoutCheckDigit(cardSettings);
		var checkDigit = algorithm.getCheckDigit(cardWithoutCheckDigit);
		return cardWithoutCheckDigit.toString() + checkDigit;
	};
	
	function generateCardWithoutCheckDigit(cardSettings) {
		var randomicNumbersLength = parseInt(cardSettings.getLength()) - cardSettings.getIin().length;
		var card = cardSettings.getIin();
		for ( var x = 0; x < randomicNumbersLength - 1; x++) {
			card = +card + parseInt(Math.random() * 9).toString();
		}
		return card;
	}
}