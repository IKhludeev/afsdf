jQuery(function($) {
		function CheckRad(){
		var count = 0;
			if($('#rad1').is(':checked')) {
				count+=1;
			}
			if($('#rad2_3').is(':checked')){

					count+=1;
			}
			if($('#rad3_4').is(':checked')){
				count+=1;
			}
			if($('#1check_2').is(':checked') && $('#1check_4').is(':checked') && !$('#1check_1').is(':checked') && !$('#1check_3').is(':checked')){
				count+=1;
			}
			if($('#2check_1').is(':checked') && $('#2check_2').is(':checked') && !$('#2check_3').is(':checked') && !$('#2check_4').is(':checked')){
				count+=1;
			}	
					
			 alert("Правильных ответов "+count+", и набрали: "+count*20+" процентов");
		}
        $('#result').on('click', function (){CheckRad();});
});