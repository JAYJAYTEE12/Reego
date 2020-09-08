

$( document ).ready(function() {
    $("#line").keyup(function(event){
        if(event.keyCode === 13){
            getInputValue();
        }
    });
    
    function getInputValue(){
        var inputVal = document.getElementById("line").value;
        if(inputVal == ""){
            return;
		}
		resetDisplay();
		$("#commandid").children().css('margin-top', "50px");
		if(inputVal == "help"){
			$("#helpid").css('display', "block");
		}else if(inputVal == "credits"){
			$("#creditsid").css('display', "block");
		}else if(inputVal == "github"){
			window.open('https://github.com/JAYJAYTEE12', "_self");
			$("#commandid").children().css('margin-top', "0px");
		}else if(inputVal == "content"){
			window.open('https://www.youtube.com/channel/UCO01SOwAk8225gyBHPya1ig', "_self");
			$("#commandid").children().css('margin-top', "0px");
		}else{
			$("#errorid").css('display', "block");
		}
		
        $('#line').val('');
	}
	
	function resetDisplay(){
		$("#helpid").css('display', "none");
		$("#creditsid").css('display', "none");
		$("#errorid").css('display', "none");
	}
});