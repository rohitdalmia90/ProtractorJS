describe('frames', function() {
	
	
	it('frames_desc',function(){
		
		browser.waitForAngularEnabled(false);
		
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		browser.switchTo().frame(element(by.id("courses-iframe")).getWebElement());
		
		element(by.css("a[href='https://courses.rahulshettyacademy.com/sign_in']")).getText().then(function(text) {
			console.log(text);
			
		})
		
		
		
		
		
	});
	
})

