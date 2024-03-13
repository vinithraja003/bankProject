var userloginpage="http://localhost:8080/emphome";

$(document).ready(function(){
		      
          let userobj;
         
         
 //bank table- insert record :data
        let d = new Date();
        let DT = d.toLocaleString();
            let type="Debit";
            let date=DT;
            let fname;
            let faccno;
            let tname;
            let taccno;
            let amount;
         
         
         
//search account number
   $('#search').click(function(){
	   
		let accno=$('#acc_no').val() ;
		
		        let url = 'http://localhost:8080/all/useraccno?useraccno='+accno
		
        	   $.ajax({
        		   type: "GET",
        		   contentType:"application/json;charset=utf-8",
        		   url: url.trim(),
        		   success: function(data){
				
					  
					   if(data!=""){
						    document.getElementById('error-accno').innerHTML="";
        			  //define global variable
        			  userobj = JSON.stringify(data);
        			  
        			   document.getElementById('Id').innerHTML=data[0].userid;
        			  document.getElementById('accountno').innerHTML=data[0].useraccno;
        			  document.getElementById('name').innerHTML=data[0].username;
        			  document.getElementById('balance').innerHTML=data[0].userbalance;
        			  
        			    }else{
						   
						    document.getElementById('error-accno').innerHTML="Account Number Invalid";
						    
						     setTimeout(function(){
                                 window.location.reload();}, 3000);
					     }
        			  
        			  
        		   },
        		   error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });	
        		 
    //close search function 		
	    });
	    
	    


 //Withdrwal Amount:      
	  $('#withdrawal').click(function(){
		  
		  var amount=$('#amount').val();
		  var reamount=$('#re-amount').val();
		  var balance=$('#balance').text();
		  
		  if(amount != reamount){
			  document.getElementById('error-amount').innerHTML="Amount Not Match"
		  }
		  else{
 //user details:
  let userfinal=JSON.parse(userobj)
  console.log("USER-----")
  console.log(userfinal[0]);
  console.log("userbalace"+userfinal[0].userbalance);
  
  
   //bank table:
   fname=userfinal[0].username; 
   faccno=userfinal[0].useraccno;
   tname="Your Account";
   taccno="Your Account";
   amount=amount;
  
                          
                          userbalance=parseInt(userfinal[0].userbalance)-parseInt(amount);
                          var mainbalance= userbalance
                          userbalance=userbalance.toString();
                           
                           console.log(userbalance);
                           
                         
 //Validation
   var saving="Saving Account";
    var current="Current Account";
    
    console.log(balance);
    console.log(amount);
    
    
    
                if(parseInt(balance)>parseInt(amount)) {
						  if(userfinal[0].useracctype==saving && 500<=mainbalance){
							  
//Post Method to user:
               
       let   user={
					userid: userfinal[0].userid,
                    username:  userfinal[0].username,
                    useraccno: userfinal[0].useraccno,
                    useremail: userfinal[0].useremail,
                    usernumber: userfinal[0].usernumber,
                    useraddress:userfinal[0].useraddress,
                     usergender: userfinal[0].usergender,
                     useracctype: userfinal[0].useracctype,
                     userbalance:userbalance,
                  }	   
               
                 $.ajax({
            type: "POST",
            contentType:"application/json;charset=utf-8",
            url:'http://localhost:8080/adduser',
            data: JSON.stringify(user),
        		   dataType:'json',
           
            
              success: function() {	
        		 
                    console.log("User-success");
                    alert("Successfull Withdrawal ....Goto Home Page");
                    window.location= userloginpage;                    
                    },
                    error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
                    });
                    
                    
            //bank  transaction  data                      
                      let bankdata={
						  
						  f_name:fname,
						  f_accNo:faccno,
						  t_name:tname,
						  t_accNo: taccno,
						  type:type,
						  amount: amount,
						  date:date,
						  
					  }       
                       $.ajax({
             type: "POST",
            contentType:"application/json;charset=utf-8",
            url:'http://localhost:8080/add_data',
            data: JSON.stringify(bankdata),
            dataType:'json',
           
           success: function() {
			   
			   	  console.log("bank data success")
			   
		   } ,      
                             
            });  
			  
			  
							  
						  }
						  else if(userfinal[0].useracctype==current && 1000<=mainbalance){
							  
 //Post Method to user:
               
       let   user={
					userid: userfinal[0].userid,
                    username:  userfinal[0].username,
                    useraccno: userfinal[0].useraccno,
                    useremail: userfinal[0].useremail,
                    usernumber: userfinal[0].usernumber,
                    useraddress:userfinal[0].useraddress,
                     usergender: userfinal[0].usergender,
                     useracctype: userfinal[0].useracctype,
                     userbalance:userbalance,
                  }	   
               
         $.ajax({
            type: "POST",
            contentType:"application/json;charset=utf-8",
            url:'http://localhost:8080/adduser',
            data: JSON.stringify(user),
        		   dataType:'json',
           
            
              success: function() {	
        		 
                    console.log("User-success");
                    alert("Successfull Withdrawal ....Goto Home Page");
                    window.location= userloginpage;                    
                    },
                    error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
                    });
                    
                    
                    
            //bank  transaction  data                      
                      let bankdata={
						  
						  f_name:fname,
						  f_accNo:faccno,
						  t_name:tname,
						  t_accNo: taccno,
						  type:type,
						  amount: amount,
						  date:date,
						  
					  }       
                       $.ajax({
             type: "POST",
            contentType:"application/json;charset=utf-8",
            url:'http://localhost:8080/add_data',
            data: JSON.stringify(bankdata),
            dataType:'json',
           
           success: function() {
			   
			   	  console.log("bank data success")
			   
		   } ,      
                             
            });  
			  
			  
							  
						  }else{
							  alert("minimum  maintain  your  balance ");
						  }
						
					}else{
						alert("Not Enough Money In Your Account");
					}           
                         
                         
                           

			 
			  
			          		
			}
	   
	     //close withdrwal 
	    });
	    
//close function	    
});