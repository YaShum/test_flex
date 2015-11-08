$(document).ready(function() {
	
	// Expand Panel
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});		
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});		
		
});

/*
$(document).ready(function() {	
	$("#open").click(function(){
		$("div#panel").slideDown("slow");	
	});			
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});				
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});				
});


/*tab.onclick = function(){
    var className = panel.className;
	if( className.indexOf('expanded') == -1)
	{
	   className += 'expanded';
	}
	else{
	     className = className.replace('expanded','');
		}
	panel.className = className;
    return false;
    };	
	*/
	/*
function toogleInformer()
{
var elm = document.getElementById("panel");
if(elm)
{
   if(elm.style.display == "block")
   {
      elm.style.display = "none";
	  document.getElementById("tab").innerHTML = '+развернуть';
	}
	else
	{
	  elm.style.display = "block";
	  document.getElementById("tab").innerHTML = '-спрятать';
	 }
}
}