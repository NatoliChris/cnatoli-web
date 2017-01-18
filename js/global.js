$(document).ready(function() {

	// Blockchain counting
	var count = 0;
	setInterval(function(){
		var a = $('.block');
		for(var i = 0; i < a.length; ++i){
			$(a[i]).text('#' + (count+i));
		}
		count++;
	}, 1500);
});
