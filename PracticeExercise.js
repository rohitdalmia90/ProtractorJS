describe('PracticeExercise', function() {
	
	it('Practice',function(){
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("Mystudents");
		element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element.all(by.tagName("option")).count().then(function(number){

			console.log('total gender: ' + number)

			})
			element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(txt) {
				console.log(txt);
				
			})
			element(by.name("name")).clear();
			element(by.name("name")).sendKeys("M").then(function() {
				element(by.css("[class='alert alert-danger']")).getText().then(function(alrt) {
					console.log(alrt);
					
				})
				
			})
			
			
			
		})
	})
	
})
	
	
	
	
	
	

	
	
	
