/*
 * By Fernando Giovanini (fernando@giovanini.me)
 * 
 * Icons by http://www.yootheme.com/icons
 */

function clickVisa(info, tab){
	click(info, tab, 'visa');
}

function clickMaster(info, tab){
	click(info, tab, 'master');
}

function clickAmex(info, tab){
	click(info, tab, 'amex');
}

function clickDiners(info, tab){
	click(info, tab, 'diners');
}

function click(info, tab, issuer){
	var cardNumberGenerator = new CardNumberGenerator( new LuhnAlgorithm1() );
	var cardSettingsFactory = new CardSettingsFactory();
	var number = cardNumberGenerator.generate( cardSettingsFactory.makeCardSettings( issuer ) );
	chrome.tabs.executeScript(tab.id,{code:"document.activeElement.value = '"+number+"'"});
}

chrome.contextMenus.create({"title": 'Visa', "contexts":['editable'], "onclick": clickVisa});
chrome.contextMenus.create({"title": 'Master', "contexts":['editable'], "onclick": clickMaster});
chrome.contextMenus.create({"title": 'Amex', "contexts":['editable'], "onclick": clickAmex});
chrome.contextMenus.create({"title": 'Diners', "contexts":['editable'], "onclick": clickDiners});