/* global $*/
$(function(){
    var checkall = 'false';
    
    $('<label for="all"> All:</label><input type="checkbox" id="all" value="true" />').insertAfter("#country");
    
    $('#all').on('click',function(){
        if($('#all').is(':checked')){
            checkall = 'true';
        }else{
            checkall = 'false';
        }
    });
    
    $('#lookup').on('click',function(){
        if($('#country').val()!=='' || checkall === 'true'){
        $.ajax({
            url: 'world.php',
            method: 'GET',
            data: {country:($('#country').val()),all:`${checkall}`},
            success:function(data){
                $('#result').append(data);
            }
        });
        }else{
            alert("Please enter a coutry or select all");
        }
    });

});