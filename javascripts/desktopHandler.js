/**************************SETTINGS*****************************/
//Specify ID to Operate which kind of operation	
	var RSShortcut = 'shortcutIcon';
//Ms Word/Excel/Notepad Concept	
function funcObjectDetails(concept)
{
	if(concept == 'Word')
	{
		var Word = new Object();
		Word.imageName = 'word.png';
		Word.fileName = 'Word';
		return Word;
	}
	if(concept == 'Excel')
	{
		var Excel = new Object();
		Excel.imageName = 'excel.png';
		Excel.fileName = 'Excel';
		return Excel;
	}
	if(concept == 'Document')
	{
		var Document = new Object();
		Document.imageName = 'notepad.png';
		Document.fileName = 'Document';
		return Document;
	}
}
	
	
/***************************************************************/


$(document).ready(function(){
						   
	$(".right_sub_menu").click(function(){
		var IdOfTheIcon = this.getAttribute('id');
		if(IdOfTheIcon == 'R_S_Word' || IdOfTheIcon == 'R_S_Excel' || IdOfTheIcon == 'R_S_Document') //NEW MS WORD /EXCEL / NOTEPAD
		{
				var conceptNameArray = IdOfTheIcon.split('_');
				var conceptName = conceptNameArray[2]; //Because we want last part of R_S_Document that is Document
				var objectDetails = funcObjectDetails(conceptName); //now call the func funcObjectDetails to get Bunch obj details
				var CurrentEmptyId = document.getElementById('emptyIdStartValue').value;
				var Contents,openerWindow,openerWindowId,containerName,miniContents,mainWinodwId;
				var IdName = 'empty_'+CurrentEmptyId;
				var IdMiniName = 'empty_window_'+CurrentEmptyId+'Mini';
				var mainWinodwId = 'empty_window_'+CurrentEmptyId;
				//Desktop icon creation
				Contents  = '<img clickid="'+IdName+'" src="images/desktop/'+objectDetails.imageName+'" border="0" height="55" width="55" />';
                Contents += '<br />';
                Contents += '<div class="icon_font" >'+objectDetails.fileName+' '+CurrentEmptyId+'</div>';
				//contenteditable="true" editabledocmarker="true"  spellcheck="false" 
				//Takbar icon creation
				miniContents  = '<img parentid="'+mainWinodwId+'" class="minIcon" '; 
				miniContents += 'src="images/desktop/'+objectDetails.imageName+'" height="45" width="45" style="padding-left:5px;"  />';
				
				if(document.getElementById(IdName))
				{
					document.getElementById(IdName).innerHTML = Contents;
					document.getElementById(IdMiniName).innerHTML = miniContents;
					$("#"+IdName).addClass("icon");
					document.getElementById('emptyIdStartValue').value = parseInt(CurrentEmptyId)+1;
					openerWindowId = 'empty_window_'+CurrentEmptyId;
					containerName  = 'empty_window_Container_'+CurrentEmptyId;
				}
				else
				{
					$( "#dialog" ).dialog({
						autoOpen: false,
						show: "clip",
						hide: "fold",
						draggable: false,
						height: 250,
						width : 450,
						maxWidth: 530
					});
					$("#dialog").dialog("enable");
					$( "#dialog" ).dialog({ buttons: { "Ok": function() { $(this).dialog("close"); } } });
					$("#dialog").html("<p>You Can not create more icon without registering with Go Desktop</p>");
					$("#dialog").dialog("open");
				}
		}
		
	});
	
	
	//*******RIGHT CLICK ON DESKTOP ICON**********
	$(".right_desktop_icon_menu").click(function(){
		var IdOfTheIcon = this.getAttribute('id');
		var currentElement = document.getElementById('currentSelectedDesktopIcon').value;
		var realIdofIcon = document.getElementById('curreckDesktopRealId').value;
		if(IdOfTheIcon == 'R_D_ICON_Delete') //Delete icon from Desktop
		{
			
			//Remove icon from Desktop
			$('#'+realIdofIcon).effect("transfer",{ to: '#recyclebin_Dicon' }, 700);
			$('#'+realIdofIcon)
					.animate( { height: "hide" }, 2000)
					.animate( { left: 0 }, 800 );
		
			//Add Removed Icon to RecycleBin Window
			var iconContents = $('#'+realIdofIcon).html();
			var prevRecycleContents = $('#recycled_ICON_area').html();
			
			//var itemCounter = 0;
			//itemCounter = $("#recycled_ICON_area > div").size();
			var itemCounter = $("#highestRecycleBinId").val();
			iconContents = "<div class='recycleIconClass' id='recycle_icon_"+itemCounter+"' parentid='"+realIdofIcon+"'>"+iconContents+"</div>";
			var newContents = prevRecycleContents+iconContents;
			$('#recycled_ICON_area').html(newContents);
			itemCounter = itemCounter+1;
			$("#highestRecycleBinId").val(itemCounter);
			var itemCounter = 0;
			itemCounter = $("#recycled_ICON_area > div").size();
			var counterContents = '&nbsp; '+itemCounter+' items';
			
			$("#recyclebinCounter").html(counterContents);
			if(itemCounter > 0)
			{
				if(itemCounter > 3)
					$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_full_extra.png"});
				else
					$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_full.png"});
			}
			else
			{
				$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_empty.png"});	
			}
		}
		if(IdOfTheIcon == 'R_D_ICON_Open')
		{
			var x = openWindowScreen(currentElement);
		}
	});	
	
	
	$(".recyclebin_icon_menu").click(function(){
		var IdOfTheIcon = this.getAttribute('id');
		var idToRestoreContent = document.getElementById('RecycleBinIconIdToRestore').value;
		var recycleBinId = document.getElementById("RecycleBinIconId_Real").value;
		if(IdOfTheIcon == 'R_RBIN_ICON_Restore') //Restore icon To The Desktop
		{
			var contents = $('#'+recycleBinId).html();
			$('#'+idToRestoreContent).html(contents);
			$('#'+idToRestoreContent).show('slow');
			document.getElementById(recycleBinId).innerHTML = '';
			$('#'+recycleBinId).hide('slow');
			$('#'+recycleBinId).remove();
			var itemCounter = 0;
			itemCounter = $("#recycled_ICON_area > div").size();
			var counterContents = '&nbsp; '+itemCounter+' items';
			$("#recyclebinCounter").html(counterContents);
			if(itemCounter > 0)
			{
				if(itemCounter > 3)
					$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_full_extra.png"});
				else
					$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_full.png"});
			}
			else
			{
				$("#recyclebin_Dicon img").attr({ src: "images/desktop/recyclebin_empty.png"});	
			}
		}
	});												 
												 

});