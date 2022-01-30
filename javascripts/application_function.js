//Open Window
function openWindowScreen(selectedIdVal)
{
		selectedId = selectedIdVal;
		var obj = document.getElementById('currentTopValue');
		var zValue = parseInt(obj.value) + 1;
		obj.value = zValue;
		var zz ="#"+selectedId;
		var mm = selectedId;
		if(zz == '#loginBox')
		{
			$("#loginBox" ).fadeTo(7000 , 10);
			return false;
		}
		if($(zz).width() == defaultWindowWidth )
		{
			var w = $(window).width();
			var h = $(window).height();
			var left = (w - defaultWindowWidth)/2;
			var top = (h - 100)/2
			top = 20;
		}
		else
		{
			var left = 2;
			var top = 1;
		}
		
		var miniName = zz+'Mini';
		
		$(miniName).show('fade',800);
		$(zz).css({'left':+left+'px','top':+top+'px','z-index':zValue});
		
		$(zz).show('scale',500);
		
		$(function() 
		{
			$(zz).draggable({containment: 'parent',cursor: 'crosshair',iframeFix: true,opacity: 0.7,
				drag: function() 
				 {
					$(zz).css('background-image','../images/bg_trans.png');
					//$(zz).css('background-color','#000000');
				 }
		
			});
				
		});	

}
