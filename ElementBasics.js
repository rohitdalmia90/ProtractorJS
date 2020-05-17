describe('Element_Basics',function(){
	
	//importing the jsonObjects file 
	
	var obj = require("./JsonObject.js");
	var d = require("./data.js");
	
	beforeEach(function() {
		obj.getUrl();
		
	})
	
	
	
	it('Entering text',function(){
		
		obj.firstInput.sendKeys(d.datadrive.firstInput);
		obj.secondInput.sendKeys(d.datadrive.secondInput);
		obj.goButton.click();
		expect(obj.getResult.getText()).toBe(d.datadrive.result);
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(sumTxt) {
		console.log(sumTxt);
		
	});
	
	
	//real output will displayed only when promise is resolved
	//protractor when retrieving anything from browser , promise need to be handled
	
	
		
		
		
		
	})
	
 afterEach(function() {
	 console.log("Test is completed");
 	
 })
	
})






