$(document).keydown(function(e) {
    if((e.keyCode === 82)) {
        e.preventDefault();
        $('#runwindow').fadeTo("slow" , 0.9);
    }
	if((e.keyCode === 27)) {
        e.preventDefault();
       $('#runwindow').fadeTo("fast" , 0.0);
    }
	if((e.keyCode === 13))  //Selecte a desktop icon and press enter
	{
        var selectedId = document.getElementById('DesktopIconIdEnterKey').value;
		e.preventDefault();
		openWindowScreen(selectedId);
    }
});
