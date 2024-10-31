function validateForm() {

	var file_urls_list = jQuery("#file_url").val();
	file_urls_list = file_urls_list.trim();
	var lines = file_urls_list.split(/\r|\r\n|\n/);
	var count = lines.length;

		if(count != 1){
	        
	        alert('It is light version...! Please enter one url..'); 
	        return false;   

		}else{

	    	return true;
		}
}