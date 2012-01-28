/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

/**
 * A simple factory that returns a card setting objetc
 * If you want to add an aditional card, just make a 
 * CardSetting class that implements the getIin() and 
 * getLength() methods, and add it in the switch above
 * 
 * @returns {CardSettingsFactory}
 */
function CardSettingsFactory(){

	this.makeCardSettings = function(issuerNetwork){
		switch (issuerNetwork) {
			case 'amex':
				return new AmexSettings();
				break;
			case 'diners':
				return new DinersSettings();
				break;
			case 'master':
				return new MasterSettings();
				break;
			case 'visa':
				return new VisaSettings();
				break;
		}
	};
	
}