var login="http://localhost:8080/login";
var emphome="http://localhost:8080/emphome";


$(document).ready(function(){
	
/*register:  */
	  $('#save_emp').click( function(){	
		  
	// FORM VALIDATION	  
		   var name = $('#name').val() ;
           var  number= $('#number').val() ;
           var  email= $('#email').val() ;
           var  address= $('#address').val() ;
           var  password= $('#password').val() ;
           var  repass= $('#re-password').val() ;
	    if(name=="" || number=="" || email=="" || address=="" || password=="" || repass==""){
		  if(  name=="" ){
		     document.getElementById("error-name").innerHTML="please enter name";
			   
		   }
		   if( name!=""){
			        document.getElementById("error-name").innerHTML="";
		    } 
		  if( number==""){
			        document.getElementById("error-number").innerHTML="please enter number";
	       }	
	       if( number!=""){
			        document.getElementById("error-number").innerHTML="";
	       }		
		    if( email==""){
			        document.getElementById("error-email").innerHTML="please enter email";
		   }
		    if( email!=""){
			        document.getElementById("error-email").innerHTML="";
		   }
		     if( address==""){
			        document.getElementById("error-address").innerHTML="please enter address";
		   }
		    if( address!=""){
			        document.getElementById("error-address").innerHTML="";
		   }
		    if( password==""){
			        document.getElementById("error-password").innerHTML="please enter password";
		   }
		   if( password!=""){
			        document.getElementById("error-password").innerHTML="";
		   }
		    if( repass==""){
			        document.getElementById("error-repassword").innerHTML="password not same";
		   }
		  
		  
		 } 
		 else if( password!=repass){
			        document.getElementById("error-repassword").innerHTML="password not same";
		   }
		  
		
		  else{
			  
		  
    	   let data = {
        		       emp_name : $('#name').val() ,
        			   emp_mobilenumber: $('#number').val() ,
        			   emp_email: $('#email').val() ,
        			   emp_address: $('#address').val() ,
        			   emp_password: $('#password').val() ,
        			  
        	   }
        	   console.log(data);
        	   $.ajax({
        		   type: "POST",
        		   contentType:"application/json;charset=utf-8",
        		   url: 'http://localhost:8080/addemp',
        		   data: JSON.stringify(data),
        		   dataType:'json',
        		   success: function(){
        			   alert('employee registered');
        			    window.location=login ;
        		   },
        		   error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });
        		 
        	}	 
    	  
     });
    	 
    	 
    /** Login: */
    	 $('#login_emp').click(function(){
			 var number=$('#number').val();
			 var password=$('#password').val();
			 
			if(number=="" || password==""){
				 if(number==""){
					 document.getElementById("error-number").innerHTML="please enter number";
				 }
				  if(number!=""){
					 document.getElementById("error-number").innerHTML="";
					
				 }
				 if(password==""){
					 document.getElementById("error-password").innerHTML="please enter password";
				 }
			 }
			 else if(number!="" && password!=""){
			 
			 
			 
			    let data={
				 emp_mobilenumber:$('#number').val(),
				 emp_password:$('#password').val()
				   }
			  
        	     $.ajax({
        		   type: "POST",
        		   contentType:"application/json;charset=utf-8",
        		   url: 'http://localhost:8080/emplogin',
        		   data: JSON.stringify(data),
        		   dataType:'json',
        		   success: function(){
					               console.log(data);
        			   alert('employee login');
        			                
        			    window.location=emphome ;
        		   },
        		   error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });
        	}
			
		 });
    	 
   
    	 
    	 
		   
  });