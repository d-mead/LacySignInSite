

(function ($) {
    "use strict";

    


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var firstname = $('.validate-input input[name="firstname"]');
    var lastname = $('.validate-input input[name="lastname"]');
    var compID = $('.validate-input input[name="compID"]');
    var idinput = $('.validate-input input[name="id-input"]');


    $('.validate-form').on('submit',function(){
        var check = true;
        if(mode == "retrieveInfo"){
            if($(firstname).val().trim() == ''){
                showValidate(firstname);
                check=false;
            }
    
            if($(lastname).val().trim() == ''){
                showValidate(lastname);
                check=false;
            }
    
            // if($(compID).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            if($(compID).val().trim().match(/^[a-zA-Z]{2,3}[0-9][a-zA-Z]{2,3}$/) == null){
                showValidate(compID);
                check=false;
            }
        }

        

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    
})(jQuery);



var textBox = document.getElementById("id-input")
updatedMode();
var idinput = $('.validate-input input[name="id-input"]');

var mode = "retrieveID";
var ID = null;

textBox.addEventListener('keydown', function (e) { /* enter hit on ID field*/
    console.log(e)
    if (e.keyCode == 13) {
        console.log('Enter pressed');
        console.log(textBox.value)
        e.preventDefault();
        if($(idinput).val().trim().match(/^[0-9]{9,}$/) == null){
            console.log("under 9");
            showValidate(idinput);
            
        } else {
            ID = $(idinput).val().trim().substring(0, 9);
            console.log(ID);
            mode = "retrieveInfo";
            updatedMode();
        }
        
        //   button1.click();
    }
});
function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
}

function updatedMode(){
    if(mode == "retrieveInfo"){
        getID.style.display = 'none';
        getInfo.style.display = 'block';
    } else { /*mode == retrieveID*/
        getID.style.display = 'block';
        getInfo.style.display = 'none';
    }
}