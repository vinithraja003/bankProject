var userloginpage="http://localhost:8080/emphome";
var userlogin="http://localhost:8080/userhome";
var userdetailspage="http://localhost:8080/userDetails";
var usertransaction="http://localhost:8080/transaction";

$(document).ready(function(){
	

//Login User
    $('#userlogin').click(function(){
		 window.location=userlogin ;
		 
	});
//user register:
   $('#userregister').click(function(){
	    window.location="http://localhost:8080/userReg";
   });
   
 //user details:
   
   $('#userdetails').click(function(){
	   
	    window.location= userdetailspage;    	
   });
   
 //user transaction page:
 $('#transaction').click(function(){
	   
	    window.location= usertransaction;    	
   });
 
 
   
	
//Save user
	  $('#user_reg').click(function(){
		  
		  // FORM VALIDATION	  
		   var name = $('#name').val() ;
           var  number= $('#number').val() ;
           var  email= $('#email').val() ;
           var  address= $('#address').val() ;
           var  accountno= $('#account_no').val() ;
            var  amount= $('#amount').val() ;
            var  acctype= $('#acc_type').val() ;
           
            
            
            var saving="Saving Account";
            var current="Current Account";
          
           console.log(acctype);
           console.log(amount);
           
          if(name=="" || number=="" || email=="" || address=="" || accountno=="" || amount=="")
          {
		       if(  name=="" ){
		     document.getElementById("error-name").innerHTML="please enter your";
			   
		   }
		   if( name!=""){
			        document.getElementById("error-name").innerHTML="";
		    } 
		  if( number==""){
			        document.getElementById("error-number").innerHTML="please enter your";
	       }	
	       if( number!=""){
			        document.getElementById("error-number").innerHTML="";
	       }		
		    if( email==""){
			        document.getElementById("error-email").innerHTML="please enter your";
		   }
		    if( email!=""){
			        document.getElementById("error-email").innerHTML="";
		   }
		     if( address==""){
			        document.getElementById("error-address").innerHTML="please enter your";
		   }
		    if( address!=""){
			        document.getElementById("error-address").innerHTML="";
		   }
		    if( accountno==""){
			        document.getElementById("error-accountnumber").innerHTML="please enter your";
		   }
		   if( accountno!=""){
			        document.getElementById("error-accountnumber").innerHTML="";
		   }
		   if( amount==""){
			        document.getElementById("error-amount").innerHTML="please enter your";
		   }
		   if( amount!=""){
			        document.getElementById("error-amount").innerHTML="";
		   }
		  		
	}
	else if(acctype==saving){
		if(amount<500){
			document.getElementById("error-amount").innerHTML="saving account min balance 500 deposit";
		} else{
		  let data={
			    username:name,
			    usernumber:number,
			    useremail:email,
			    useraddress:address,
			    useraccno:accountno,
			    useracctype:acctype,
			    userbalance:amount,
			    usergender:$('[name=inlineRadioOptions]:checked').val(),
			
		  }
		     console.log(data);
        	   $.ajax({
        		   type: "POST",
        		   contentType:"application/json;charset=utf-8",
        		   url: 'http://localhost:8080/adduser',
        		   data: JSON.stringify(data),
        		   dataType:'json',
        		   success: function(){
					   console.log(data);
        			   alert('User registered');
        			    window.location=userloginpage ;
        		   },
        		   error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });
           }
	  
		
	}
	else if(acctype==current){
		if(amount<1000){
			document.getElementById("error-amount").innerHTML="current account min balance 1000 deposit";
		} else{
		  let data={
			    username:$('#name').val(),
			    usernumber:$('#number').val(),
			    useremail:$('#email').val(),
			    useraddress:$('#address').val(),
			    useraccno:$('#account_no').val(),
			    useracctype:$('#acc_type').val(),
			     userbalance:$('#amount').val(),
			    usergender:$('[name=inlineRadioOptions]:checked').val(),
			
		  }
		     console.log(data);
        	   $.ajax({
        		   type: "POST",
        		   contentType:"application/json;charset=utf-8",
        		   url: 'http://localhost:8080/adduser',
        		   data: JSON.stringify(data),
        		   dataType:'json',
        		   success: function(){
					   console.log(data);
        			   alert('User registered');
        			    window.location=userloginpage ;
        		   },
        		   error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });
           }
	  
		
	}
		  
		  
		 
	  });



	  
	  
	  
	  
	  
});