

function jsonObjects(){
	
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.getResult = element(by.css("h2[class='ng-binding']"));
	
	
	
	
	
	
	
	
	this.getUrl = function(){
		browser.get('https://juliemr.github.io/protractor-demo/');
		
	};
	
	
};



module.exports = new jsonObjects();





