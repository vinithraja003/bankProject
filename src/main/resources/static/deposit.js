 var userloginpage="http://localhost:8080/emphome";





$(document).ready(function(){
	
		  
		   let userobj;            
           let bankobj;
           
           
        //bank table- insert record :data
        let d = new Date();
        let DT = d.toLocaleString();
            let type="Credit";
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
        		 
        		
	    });
	   
	      
//Deposit Amount:      
	  $('#deposit').click(function(){
		  
		  var amount=$('#amount').val();
		  var reamount=$('#re-amount').val();
		  var balance=$('#balance').text();
		  
		  if(amount != reamount){
			  document.getElementById('error-amount').innerHTML="Amount Not Match"
		  }
		  else{
			  
			          		
			 let userbalance;
			 let bankbalance;   
			 let bank;
			             		 
			 //Get Bank details         		 
                     $.ajax({
        		   type: "GET",
        		   contentType:"application/json;charset=utf-8",
        		   url: 'http://localhost:8080/alluser/1',
        	
        		   success: function(data){
					   
					    bankobj=   data;
					  
					 
  
  //user details:
  let userfinal=JSON.parse(userobj)
  
  console.log("USER-----")
  console.log(userfinal[0]);
  //console.log("userbalace"+userfinal[0].userbalance);
  
  //Bank details:
  console.log("BANK-----")
  console.log(bankobj);
 // console.log("BankBalance"+bankobj.userbalance);  
  
  
  //bank table:
   fname=bankobj.username;
   faccno=bankobj.useraccno;
   tname=userfinal[0].username; 
   taccno=userfinal[0].useraccno;
   amount=amount;
   
   
   
  
  
              bankbalance=bankobj.userbalance-amount;
              bankbalance=bankbalance.toString();
              userbalance=parseInt(userfinal[0].userbalance)+parseInt(amount);
              userbalance=userbalance.toString();
              
              
                    console.log("bankbalance:"+bankbalance);
                    console.log("userbalance:"+ userbalance);
                    
	//Post method  bank:
        		   bank={
					userid: bankobj.userid,
                    username:  bankobj.username,
                    useraccno: bankobj.useraccno,
                    useremail: bankobj.useremail,
                    usernumber: bankobj.usernumber,
                    useraddress:bankobj.useraddress,
                     usergender:  bankobj.usergender,
                     useracctype:  bankobj.useracctype,
                     userbalance:bankbalance,
               }	   
               
                 $.ajax({
            type: "POST",
            contentType:"application/json;charset=utf-8",
            url:'http://localhost:8080/adduser',
            data: JSON.stringify(bank),
        		   dataType:'json',
           
            
              success: function() {	
        		 
                    console.log(" Bank -success");
                    },
                    error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
                    });
                    
                    
                    
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
                    alert("Successfull Deposit ....Goto Home Page");
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
                             
                             
					   },
                    error:function(e){
					   alert("Error");
					   console.log("error:",e);
				   }
        		 });
        		 
        		 
        		
	    
      
     
     
     
     
  
               }
		 		 	 
		//close deposit function 
		  }); 
		  
		  
  
  
	      
	
});

		   
	
		  
		   
		   
		   
		 
		   
		    

		    
		    
		    
		    
		    
		    
		    
		   
		     		 
        		 
  		 
