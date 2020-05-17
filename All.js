describe('All',function(){
	
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
		
	}
	
	it('All',function(){
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		Add(2,4);
		Add(8,9);
		Add(5,7);
		Add(6,9);
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
			
		})
		
		//Using each function to perform on each record
		
		//Chain locators using parent-child in css
		
		element.all(by.repeater("result in memory")).each(function(item) {
			
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
			
			
		})
		
		
		
	})
	
})