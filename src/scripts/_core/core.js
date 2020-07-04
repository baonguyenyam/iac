// None
console.log('IAC Group Ready!')
if($("#progressBar") && $("#progressBar").length >0){
	var timeleft = 1800;
	var downloadTimer = setInterval(function() {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
		}
		document.getElementById("progressBar").value = 1800 - timeleft;
		$('.time').text(timeleft);
		timeleft -= 1;
	}, 1800);
}
