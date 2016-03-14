$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	// function splitString(stringToSplit, seperator) {
    //     var array = stringToSplit.split(seperator);
        
    // }
    // function postData() {
        // $('form').submit(function(){
        //     var formData = {
        //         text: $('input[name=newTweet]').val(),
        //         userName : 'anonymous'
        //     }
            
        //     var tweet = JSON.stringify(formData);
            
        //     $.ajax({
        //         type: 'POST',
        //         url: 'http://localhost:3000/messages',
        //         data: tweet,
        //         dataType: 'json' 
        //     })
        // })
	// }

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/messages'
        }).then(function(success){
            var textArray = success.split('\n');
            var results = [];
            textArray.forEach(function(item) {
               item = JSON.parse(item);
               results.push(item);
            })
            console.log(results);
        }, function(err) {
            console.log(err);
        });
	}

	/*Calls function once page loaded to display tweets to page*/
	getData();
   
});
