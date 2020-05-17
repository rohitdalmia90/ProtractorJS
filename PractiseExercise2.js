describe('PractiseExercise2', function() {
	
	function selectItem(a){

		element.all(by.tagName("app-card")).each(function(item) {
			
			item.element(by.css("h4 a")).getText().then(function(text){
				if(text == a){
					item.element(by.css("button[class='btn btn-info']")).click();
				}
				
			})
			
		})
		
		
	}
	
	
	it('prExcercise2',function(){
		
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.linkText("Shop")).click();
		
		selectItem("Samsung Note 8");
		selectItem("iphone X");
		
		
		
		
		
		element(by.partialLinkText("Checkout")).getText().then(function(t1){
			console.log(t1);
		var res=t1.split("(");
		console.log(res[1].trim().charAt(0));
		expect(res[1].trim().charAt(0)).toBe("2");
		})
		
	})
	
	
	
	
})