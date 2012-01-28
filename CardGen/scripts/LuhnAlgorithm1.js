/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * A Luhn Algorithm implementation 
 * It calculates de checkdigit
 * 
 * @returns {LuhnAlgorithm1}
 */
function LuhnAlgorithm1(){
	
	this.getCheckDigit = function(cardWithoutCheckDigit) {
		var sum = 0;
		var cardNumberLength = cardWithoutCheckDigit.length;
		for ( var x = cardNumberLength - 1; x >= 0; x--) {
			var value;
			if ((x - cardNumberLength - 1) % 2 == 0) {
				value = getValueForEvenChar(cardWithoutCheckDigit.charAt(x));
			} else {
				value = getValueForOddChar(cardWithoutCheckDigit.charAt(x));
			}
			sum += value;
		}
		return calculateCheckDigitMod(sum);
	};

	function getValueForEvenChar(charAt) {
		var value = parseInt(charAt) * 2;
		if (value > 9) {
			value = parseInt(value.toString().substring(0, 1))
					+ parseInt(value.toString().substring(1, 2));
		}
		return value;
	}

	function getValueForOddChar(charAt) {
		return parseInt(charAt);
	}

	function calculateCheckDigitMod(sum) {
		return (sum * 9) % 10;
	}
}