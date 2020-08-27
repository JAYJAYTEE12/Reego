

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
        $('#line').val('');
    }
});