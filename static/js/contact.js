$(document).ready(function() {
    
	$('#submit').click(function(event){
        
        event.preventDefault();

        var type = $('#type').val();
        
        if(type == ''){
			$('.message').html(
			'<h2 style="color:red;">Select the Option</h2>'
			);
			$('#type').focus();
            return false;
        }
        
        var name = $('#name').val();
        
        if(name == ''){
			$('.message').html(
			'<h2 style="color:red;">Enter Name</h2>'
			);
			$('#name').focus();
            return false;
        }
        
        var mail = $('#mail').val();
        
        if(mail == ''){
			$('.message').html(
			'<h2 style="color:red;">Enter Mail</h2>'
			);
			$('#mail').focus();
            return false;
        }

        if( $("#mail").val()!='' ){
			if( !isValidEmailAddress( $("#mail").val() ) ){
			$('.message').html(
			'<h2 style="color:red;">Mail incorrect !</h2>'
			);
			$('#mail').focus();
			return false;
			}
		}
        
        var mobile = $('#mobile').val();
        
        if(mobile == ''){
			$('.message').html(
			'<h2 style="color:red;">Enter Mobile</h2>'
			);
			$('#mobile').focus();
            return false;
        }
        
        var message = $('#message').val();
        
        if(message == ''){
			$('.message').html(
			'<h2 style="color:red;">Enter Message</h2>'
			);
			$('#messsage').focus();
            return false;
		}
                
        $.ajax
        ({
            type: "POST",
            url: "static/mail/contact.php",
            data: {
                type : type,
                name : name,
                mail : mail,
                mobile : mobile,
                message : message
            },
            success: function(data)
            {
                $('#cn').trigger("reset");
                $('.message').html('<h2>Message sent</h2>');
            }
            
        });
        
	});
			
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};