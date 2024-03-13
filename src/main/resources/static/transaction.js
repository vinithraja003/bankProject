
var alltransaction='http://localhost:8080/alldata';


console.log(alltransaction);
var tabledata="";
    $.ajax({
		
		type:"GET",
		url:alltransaction,
		
		success:function(response){
			console.log(response);
			
			   response.forEach(function(data){
				     tabledata+='<tr>'+
				     '<td>'+data.no +'</td>'+
				      '<td>'+  data.f_name   +'</td>'+
				       '<td>'+ data.f_accNo   +'</td>'+
				         '<td>'+ "To"  +'</td>'+
				        '<td>'+ data.t_name+'</td>'+
				         '<td>'+data.t_accNo+'</td>'+
				           '<td>'+ data.amount  +'</td>'+
				             '<td>'+  data.type +'</td>'+
				               '<td>'+ data.date   +'</td>'+
				            '</tr>';
				   
			   });
			
			     $('#show_table > tbody').html(tabledata);
			
		},
		error:function(response){
			console.log("error",response);
		}
	});
	
	
	
	$('search').click(function(){
		
		     var data=$('#Data').val();
		
	});