   
var GetAllUser='http://localhost:8080/alluser';

   
   
    var tabledata="";
 
      $.ajax({
        		   type: "GET",
        		   url: GetAllUser,
        		   
        		   success: function(response){
					   console.log(response);
					   
					   response.forEach(function(data){
						   tabledata+='<tr>'+
						   '<td>'+data.userid+'</td>'+
						    '<td>'+data.username+'</td>'+
						     '<td>'+data.useraccno+'</td>'+
						      '<td>'+data.usernumber+'</td>'+
						        '<td>'+data.useremail+'</td>'+
						         '<td>'+data.useraddress+'</td>'+
						          '<td>'+data.usergender+'</td>'+
						           '<td>'+data.useracctype+'</td>'+
						           '<td>'+data.userbalance+'</td>'+
						             '<td>'+
						            '<button type="button" class="btn btn-success btn-md">Edit</button>'+
						            '<button type="button" class="btn btn-danger btn-md">Delete</button>'+
						            '</td>'+
						        '</tr>' ; 
					          			   
        		   });
        		   $('#show_table>tbody').html(tabledata);
        		   },
        		   error:function(response)
        		   {
					  
					   console.log("error:",response);
				   }
				  
           });
           
           
           
          
   
	