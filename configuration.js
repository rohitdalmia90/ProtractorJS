exports.config = {
		seleniumAddress:'http://localhost:4444/wd/hub',
		specs:['ElementBasics.js'],
		
		
		
		
		 capabilities: {
			    browserName: 'chrome',
			    chromeOptions: {
			      args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
			    }
			  },
			  onPrepare : function(){
					browser.manage().window().maximize();
				},
			  
};