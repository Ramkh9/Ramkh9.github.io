
$(document).ready(function(){
$("#actionForm").submit(function(e){
       e.preventDefault(); 

                    $('#submit').attr('disabled', true);
                    $("#submit").html('يعالج....');
$.ajax({

    method: "POST",
    url: "https://script.google.com/macros/s/AKfycbxEB039LLR1EuEPHCNlnzdRhHZ_jpTMJ51gRXv8p5_SC-51No5MfApIbvOmmy9y7Ekl/exec",
    dataType: "json",
    data: $("#actionForm").serialize(),

    success: function(res){

         if(res.result === 'success'){

             location.replace('thanks.html');

        }else{

           alert('حسنًا ، لم يتم إرسال النموذج ، حاول لاحقًا');
           location.reload();

        }
        
    },

    erro:function(e){
      console.log(e);
    }
  }) // ajax end 
     
  })

})
