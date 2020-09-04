

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
		}else{
			$('#line').val('');
			$("#commandid").children().css('margin-top', "0px");
			return;
		}
		
        $('#line').val('');
	}
	
	function resetDisplay(){
		$("#helpid").css('display', "none");
		$("#creditsid").css('display', "none");
	}
});