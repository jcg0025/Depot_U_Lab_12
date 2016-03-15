$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
    
    function postData() {
           
            var formData = {
                text: $('#text').val(),
                userName : 'anonymous'
            }
            
            var tweet = '\n'+ JSON.stringify(formData);
            
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/messages',
                data: tweet
            }).success(function(success){
                console.log('hey');
                
                $('.tweetContainer').prepend('<br>');
                $('.tweetContainer').prepend(formData.text);
                $('.tweetContainer').prepend('<br>');
                $('.tweetContainer').prepend(formData.userName);
                $('.tweetContainer').prepend('<br>');
                
            }).error(function(err){
                console.log('error');
                console.log(err);
            });
	}
    $('#post').click(function(){
        postData();
        $('#text').val('');
    });
    
	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/messages'
        }).then(function(success){
            var results = [];
            var textArray = success.split('\n');
            textArray.forEach(function(item) {
               item = JSON.parse(item);
               results.push(item);
            })
            for (var i = 0; i < results.length; i++){
                $('.tweetContainer').append('<br>');
                $('.tweetContainer').append(results[i].userName);
                $('.tweetContainer').append('<br>');
                $('.tweetContainer').append(results[i].text);
                $('.tweetContainer').append('<br></br>');
            }
            
        }, function(err) {
            console.log(err);
        });
        
        
	}
	/*Calls function once page loaded to display tweets to page*/
	getData();
    
   
});
