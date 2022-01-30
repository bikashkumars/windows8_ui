/**************************SETTINGS*****************************/
/*
DESIGN AND DEVELOPED BY
BIKASH KUMAR SUNDARAY
SOFTWARE ENGINEER
OPEN SOURCE DEVELOPER
INDIA
*/
//Right Click Menu	
	var rightClickMenuWidth  = 190;
	var rightClickMenuHeight = 210;

//Window Opener and White container inside it
	var defaultWindowWidth  = 850;
	var defaultWindowHeight = 500;
	var innerWindowWidth    = 825;
	var innerWindowHeight   = 450;
	
//Types of Right Click Menu id --> MouseOnDeskIcon
	var valueToDoNothingWhenRightClick = 10;
	
	var valueToShowGloabalRightClick    = 0;
	var valueToBlockGloabalRightClick   = 1;
	var valueToShowRightClickOnIcon     = 1;
	var valueToBlockRightClickOnIcon    = 0;
	var valueToAllowRightClickOnSidebar = 2;
	var valueToBlockRightClickOnSidebar = 0;
	var valueToAllowRightClickOnTaskbar = 3;
	var valueToBlockRightClickOnTaskbar = 0;
	var valueToShowRightClickOnRecycleBin = 5;
	
//Enable and Disable Features [1 = enable and 0=disable]
	var dSelectDesktopIconAfterClickingDesktop = 1;
	
	
//Drag and Drop Setting
$(document).ready(function()
{
	$( "#sidebar" ).droppable();
	$(".icon").live('mousedown', function() {
        $(".icon").draggable({cursor: "move"});
		$(".icon").draggable( "option", "connectToSortable", 'sidebar' );
		$(".icon").draggable({ revert: "invalid" });
    });
	
	/*
	$(".icon").draggable({cursor: "move"});
	$( ".icon" ).draggable({ connectToSortable: 'sidebar' });
	$( ".icon" ).draggable( "option", "revert", true );
	$( ".icon" ).draggable({ revert: "invalid" });
	*/
	
	//if($.browser.msie)
	//{						  
		$(".windowConfig").css({backgroundColor:'#58ACFA'});
	//}
})	
	

	
/***************************************************************/


function setheightWidth()
{
	 if (typeof window.innerWidth != 'undefined')
	 {
		viewportwidth = window.innerWidth,
		viewportheight = window.innerHeight
	 }
	 else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElementclientWidth != 0)
	 {
		 viewportwidth = document.documentElement.clientWidth,
	 	viewportheight = document.documentElement.clientHeight
	 }
	 else
	 {
		 viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
	  	 viewportheight = document.getElementsByTagName('body')[0].clientHeight
	 }
	
	myWidth =  viewportwidth;	
	myHeight= viewportheight;
	var tempHeight,tempWidth;
	tempHeight = myHeight - 55;
	tempWidth = myWidth - 15;
	
	document.getElementById('Main').style.height = myHeight+"px";
	document.getElementById('Main').style.width = myWidth+"px";
	
	document.getElementById('window').style.height = tempHeight+"px";
	document.getElementById('window').style.width = myWidth+"px";
	
	document.getElementById('icon').style.top = tempHeight+"px";
	
	
	document.getElementById('TimeBar').style.top = (tempHeight+15)+"px";
	document.getElementById('TimeBar').style.left = (myWidth-200)+"px";
	
	window.setTimeout("setheightWidth()",400);
	
	document.getElementById('gosaver').style.left = (myWidth-460)+"px";
	document.getElementById('gosaver').style.top = (tempHeight-100)+"px";
	
	document.getElementById('sidebar').style.left = (myWidth-185)+"px";
	document.getElementById('sidebar').style.height = (myHeight-65)+"px";
	
	var showhides =(myHeight-65)/2+"px";
	document.getElementById('sidebarClick').style.top = showhides;
	document.getElementById('sidebarClick').style.left = (myWidth-205)+"px";
	document.getElementById('runwindow').style.top = (tempHeight - 160)+"px"; //run window
	
	//minimizer window
	document.getElementById('TaskbarMiniMizer').style.top = (myHeight-55)+"px";
	document.getElementById('TaskbarMiniMizer').style.left = "90px";
	document.getElementById('TaskbarMiniMizer').style.width = (myWidth-265)+"px";
	document.getElementById('TaskbarMiniMizer').style.height = "52px";
	
	document.getElementById('loginBox').style.left = ((myWidth/2)-250)+"px";
	document.getElementById('loginBox').style.top = 90+"px";
	
	document.getElementById('magicbook').style.left = ((myWidth/2)-300)+"px";
	document.getElementById('magicbook').style.top = 90+"px";
	
}

function toggleMenuBar()
{
	document.getElementById('goMenu').style.display="none";
	$("#statmenu_pic").css({'display':'none'});
}

$(document).ready(function()
{
		$(document).click(function()
		{
			$("#RightMenu").hide(); //Right click Menu
			$("#Tips").hide(); //Start Menu Tip window
			$("#RightMenu_New").hide('fast'); //Right click Sub Menu
			$("#RightClickOn_Icon").hide('fast');
			$("#RightClickOn_RecycleBinIcon").hide('fast');
		});
		
		
		showTime();
		//setTimeout("screen1('screen1.gif','1')",4000);
		
		
		$('.icon img').live('mouseover', function() {
		    if(!$.browser.msie)
			{	
				$(this).fadeTo("fast" , 0.6);
			}
			document.getElementById("MouseOnDeskIcon").value = valueToBlockGloabalRightClick; //1 not to allow right click on desktop icon
			//document.getElementById("MouseOverDesktopIconId").value =;
		});
		
		$('.icon img').live('mouseout', function() {
		    if(!$.browser.msie)
			{						  
				$(this).fadeTo("fast" , 1.0);
			}
			document.getElementById("MouseOnDeskIcon").value = valueToShowGloabalRightClick; //0 to allow right click on desktop icon
			//document.getElementById("MouseOverDesktopIconId").value =;
		});
		
		$("#goMenu,#Taskbar").mouseover(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToBlockGloabalRightClick; //1 not to allow right click on desktop icon													   
		});
		$("#goMenu,#Taskbar").mouseout(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToShowGloabalRightClick; //1 not to allow right click on desktop icon													   
		});
		
		$("#TaskbarMiniMizer ,#recyclebin ,#goMenu").mouseover(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToAllowRightClickOnSidebar; //1 not to allow right click on desktop icon													   
		});
		$("#TaskbarMiniMizer ,#recyclebin ,#goMenu").mouseout(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToBlockRightClickOnSidebar; //1 not to allow right click on desktop icon													   
		});
		
		
		$('.recycleIconClass').live('mouseover', function() {
		    var parentId= $(this).attr('parentid');
			var Id= $(this).attr('id');
			document.getElementById("MouseOnDeskIcon").value = valueToShowRightClickOnRecycleBin; //5 to show RecycleBin Right Click
			document.getElementById("RecycleBinIconIdToRestore").value = parentId;
			document.getElementById("RecycleBinIconId_Real").value = Id;
			
		});
		$('.recycleIconClass').live('mouseout', function() {
		    document.getElementById("MouseOnDeskIcon").value = valueToBlockRightClickOnSidebar; //0 not to allow right click on RecycleBin icon	
			//document.getElementById("RecycleBinIconIdToRestore").value = '';
			//document.getElementById("RecycleBinIconId_Real").value = '';
		});
		
		
		$("#sidebar").mouseover(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToAllowRightClickOnSidebar; //1 not to allow right click on desktop icon													   
		});
		$("#sidebar").mouseout(function () {
			document.getElementById("MouseOnDeskIcon").value = valueToBlockRightClickOnSidebar; //0 not to allow right click on desktop icon													   
		});
		
		
		
		$("#icon").mouseover(function () {
			//$(this).animate({'background-image':'../images/start_menu_hover.png'}, 'slow');
		//	$("#icon").fadeTo("slow" , 0.6);
		//	$("#icon").fadeTo("slow" , 1.0);
		 });
		
		
		
		 $("#icon").click(function () {
    	   $("#statmenu_pic").css({'display':'none'});
			var obj = document.getElementById('currentTopValue');
			var zValue = parseInt(obj.value) + 1;
			var zValuePic = parseInt(obj.value) + 2;
			$("#goMenu").css({'z-index':zValue}).show('slide', {direction: 'down'}, 200,function(){
													 
					// this is for start menu profile pic Div Position
					var xLeft  = $("#pro_postion").offset().left + 25;
					var xTop = $("#pro_postion").offset().top - 50;
					$("#statmenu_pic").css({'left':xLeft,'top':xTop,'display':'block','z-index':zValuePic});
					
				//	document.getElementById('statmenu_pic').style.left = "90px";							 
													 
													 });
		 });
		
		  $(".menuitems").mouseover(function (){
			$(this).addClass("startmenuItemOver");
			var Img = this.getAttribute('parentId');
			$("#statmenu_pic").html('<img src="images/desktop/'+Img+'"> ');
		  });
		  
		  $(".menuitems").mouseout(function (){
			$(this).removeClass();			
		  });
		  
		  
		   $(".rightclickMenus").mouseover(function (){
			$(this).addClass("RightClickItemOver");
		   });
		   
		   $(".rightclickMenus").mouseout(function (){
			$(this).removeClass();			
		  });
		
		
		//$("#Tips").ready(function () {
    	//$("#Tips").fadeTo("slow" , 0.8);
   		//});
		
		$("#Tips").ready(function () {
    	 $("#Tips").show(1000);
   		 });
		
		$("#icon").click(function () {
    	 $("#Tips").hide("slow");
   		 });
		
		
		 /* makeing border account desktop icons
		 $(".icon").mouseover(function(){
    	 $(this).removeClass().addClass("sidenavOver");
   		 }).mouseout(function(){
    	 $(this).removeClass().addClass("icon");		
    	 });
		 */
		 
		$('.icon').live('click', function() {
			$(document).find('.desktop_icon_clicked').removeClass().addClass("icon");
			$(this).addClass("desktop_icon_clicked");
			var zz = (this).getAttribute('clickid');
			var realId = (this).getAttribute('id');
			document.getElementById('currentSelectedDesktopIcon').value = zz;
			document.getElementById('DesktopIconIdEnterKey').value = zz;
			document.getElementById('curreckDesktopRealId').value = realId;
			
		});
		$('.icon').live('hover', function() {
			var zz = (this).getAttribute('clickid');
			var realId = (this).getAttribute('id');
			document.getElementById('currentSelectedDesktopIcon').value = zz;
			document.getElementById('curreckDesktopRealId').value = realId;
			
		});
		/*
		$(".icon").shadow({
           width:5,
           startOpacity:60,
           endOpacity:10,
           cornerHeight:8,
           color:"#000000"
       });
		*/
		/*
		$(".icon").mouseover(function () {
			$('.icon').animate({shadow: '0 0 30px #44f'}); 
		 });
		*/
		
		
		 if(!$.browser.msie){
	
			/*
			$("#loginBox").mouseover(function () {
				$('#loginBox').animate({shadow: '0 0 60px #FFFFFF'}); 
			 });
			
			
			 $("#loginBox").mouseover(function () {
				$('#loginBox').animate({shadow: '0 0 30px #000000'}); 
			 });
			 */
		
		 }
		$("#Arrow").mouseover(function () {
			$("#Arrow").fadeTo("slow" , 0.6);
		 });
		
		$("#Arrow").mouseout(function () {
			$("#Arrow").fadeTo("fast" , 1.0);
		 });
		
		/*
		$("#Arrow").click(function () {
			$("#sidebar").hide("fast", arguments.callee); 
		 });
		*/
		
		$('#Arrow').click(function() {
			//$("#sidebar").slideToggle("slow");
		    //$("#sidebar").animate({width: 'toggle'});
			
			if(document.getElementById('sidebar').style.display == 'none')
			{
				$("#sidebar").show();
				$("#sidebar").animate({marginLeft:'0px'},'slow');
				//$("#sidebar").animate({marginRight:'-180px'},'slow');
				//$("#sidebar").show();
			}
			else
			{
				$("#sidebar").animate({marginLeft:'180px'},'slow', "linear", function(){$("#sidebar").hide();} );
			}
			//$("#sidebar").hide();
			//var $marginLefty = $("#sidebar");
		
			//$marginLefty.animate({
			//marginLeft: parseInt($marginLefty.css('marginLeft'),10) == 0 ?$marginLefty.outerWidth() : 0
			// }).hide("fast");
		});
		
		
		$.fx.speeds._default = 1000;
		
		/*
		$(".icon" ).click(function() {
			$( "#dialog" ).dialog( "open" );
			return false;
		});
		*/
		
		$(".windowConfig").click(function(){
			var obj = document.getElementById('currentTopValue');
			var zValue = parseInt(obj.value) + 1;
			obj.value = zValue;
			var zz ="#"+this.getAttribute('id');
			$(zz).css({'z-index':zValue});							  
		})
		
		
		//Minimized Icon Effects
		$(".minIcon" ).live('click',function() 
		{
			var zz ="#"+this.getAttribute('parentid');
			if($(zz).css("display") == "block")
			{
				$(zz).effect("transfer",{ to: zz+'Mini' }, 350);
				$(zz).toggle('fade',200);
			}
			else
			{
				$(zz).toggle('fade',500);
				$(zz+'Mini').effect("transfer",{ to: zz }, 200);
					
			}
		});
		
		
		
		$(".minIcon").live('hover',function() 
		{
			//$("#miniTip" ).hide('fade','fast');
			var zz ="#"+this.getAttribute('parentid');
			zz = zz+"Container";
			var content = $(zz).html();
			$("#miniTip" ).html(content);
			var fromTop  = $(this).offset().top;
			var fromLeft = $(this).offset().left;
			var newTop = fromTop - 120;
			var newLeft = fromLeft - 70;
			$("#miniTip" ).css('top',newTop+"px");
			$("#miniTip" ).css('left',newLeft+"px");
			$("#miniTip" ).toggle('fade',200);
		});
		
		
		//Dgo  Window Opener
		  $('.icon').live('dblclick', function() {
		    var obj = document.getElementById('currentTopValue');
			var zValue = parseInt(obj.value) + 1;
			obj.value = zValue;
			var zz ="#"+this.getAttribute('clickid');
			var mm = this.getAttribute('clickid');
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
				$(zz).draggable({containment: 'parent',cursor: "move", delay: 100,iframeFix: true,opacity: 0.7,handle: '.Dheader',
					drag: function() 
					 {
						$(zz).css('background-image','../images/bg_trans.png');
						//$(zz).css('background-color','#000000');
					 }
			
				});
					
			});
			//$(zz).animate({shadow: '0 0 30px #000000'});
		 });
		
		
		//Dgo Mouse Handler
		//check Mouse Over Shadow
		/*	
			$("#draggable").mouseover(function () {
				$('#draggable').stop().animate({shadow: '0 0 30px #44f'});
			 });
			
			
			$("#draggable").mouseout(function () {
				$('#draggable').stop().animate({shadow: '0 0 10px #000'});
			 });
		*/
		
		//Dgo Close Handler
		//$('.Dcloseimg').live('click', function() {
		$(".Dcloseimg" ).click(function() {
			 var clickParent = "#"+this.getAttribute('parentid');
			 $(clickParent).hide('fold',500);
			 var miniName = clickParent+'Mini';
			 $(miniName).hide('fade',800);
		 });
		
		
		$(".Dmaximg" ).click(function() {
			var clickParent = "#"+this.getAttribute('parentid');
			$(this).removeClass().addClass("Drestoreimg");
			if($(clickParent).width() > defaultWindowWidth)
			{	
				var w = $(window).width();
				var h = $(window).height();
				var left = (w - defaultWindowWidth)/2;
				var top = (h - 100)/2
				top = 20;
				
				var ContainerId = clickParent+"Container";
				$(ContainerId).css('width',innerWindowWidth); //white screen insite opener window the,container of contents
				$(ContainerId).css('height',innerWindowHeight);
				$(clickParent).css('float',"left");
				$(clickParent).css('left',left);
				$(clickParent).css('top',top);
				$(clickParent).css('width',defaultWindowWidth); //850 default
				$(clickParent).css('height',defaultWindowHeight); // 500 default
				//$(clickParent).animate({shadow: '0 0 20px #000'});
			}
			else
			{
				var ContainerId = clickParent+"Container";
				$(ContainerId).css('width',(myWidth - 40)+"px");
				$(ContainerId).css('height',(myHeight - 115)+"px");
				
				//$(clickParent).animate({shadow: '0 0 0px #44f'}); 
				$(clickParent).css('float',"left");
				$(clickParent).css('left',"4px");
				$(clickParent).css('top',"1px");
				$(clickParent).css('width',(myWidth - 14)+"px");
				$(clickParent).css('height',(myHeight - 65)+"px");
			}
			$(clickParent).show();
		});
		
		
		//Dminimg
		//Minimize Effect
		//$('.Dminimg').live('click', function() {
		$(".Dminimg" ).click(function() {
			var clickParent = "#"+this.getAttribute('parentid');
			$(clickParent).effect("transfer",{ to: clickParent+'Mini' }, 400);
			$(clickParent).hide('fade','fast');
			
			//var str,pre;
			//str ='<div id="minimize"><img src="images/desktop/mycomputer.png" border="0" height="50" width="50" ></div>';
			//pre = document.getElementById('buttomBar').innerHTML;
			//document.getElementById('buttomBar').innerHTML = pre+str;
		});
		
		
		
		//Handle double click of GoWindow
		$(".Dheader").bind('dblclick', function() {
			//$(".Dmaximg" ).click();
		});

		//Mouse over Window shadow effect
		/*
		$("#draggable").mouseover(function(){
			$("#draggable").animate({shadow: '0 0 30px #c1c1c1'});
			});
		*/
//****************RIGHT CLICK****************************************	
	
		//Prevent Right Click on Desktip icons
		//Basic Menu while just right clicked
		$(document).ready(function(e){
			 $(document).bind("contextmenu",function(e){
        		    $("#RightMenu").hide('fast');
					$("#RightMenu_New").hide('fast');
					$("#RightClickOn_Icon").hide('fast');
					//Detect screen pos where mouse clicked
					var windowWidth = $(document).width();
					var windowHeight = $(document).height();
					var checkPosLeft = (e.pageX)+rightClickMenuWidth;
					var checkPosTop = (e.pageY)+rightClickMenuHeight;
					var fromLeft = e.pageX;
					var fromTop = e.pageY;
					var flag = 0;
					if(checkPosLeft >= windowWidth)
					{
						fromLeft = (e.pageX) - rightClickMenuWidth;
						flag = 1;
					}
					if(checkPosTop >= windowHeight)
					{
						fromTop = (e.pageY) - rightClickMenuHeight;
						flag = 2;
					}
					$("#RightMenu").css({'left':fromLeft+'px','top':fromTop+'px'});
					$("#RightClickOn_Icon").css({'left':fromLeft+'px','top':fromTop+'px'});
					$("#RightClickOn_RecycleBinIcon").css({'left':fromLeft+'px','top':fromTop+'px'});
					var MoousePosFlag = document.getElementById("MouseOnDeskIcon").value;
					
					if(MoousePosFlag == 0)
					{
						$("#RightMenu").animate({height: 'toggle'},200); //gloabl right click
					}
					else if(MoousePosFlag == 1)
					{
						$("#RightClickOn_Icon").animate({height: 'toggle'},200); //right click on desktop icon
					}
					else if(MoousePosFlag == 5)
					{
						$("#RightClickOn_RecycleBinIcon").animate({height: 'toggle'},200); //right click on Recyclebin icon
					}
					e.preventDefault();
			});
		});
		
		//Sub Menu Works
		$("#R_NEW").mouseover(function(){
					var screenWindowWidth = $(document).width();
					var screenwindowHeight = $(document).height();
					var windowWidth = $("#RightMenu").position().left+rightClickMenuWidth;
					var windowHeight = $("#RightMenu").position().top+rightClickMenuHeight-60;
					var checkPosLeft = (windowWidth)+rightClickMenuWidth;
					var checkPosTop = (windowHeight)+rightClickMenuHeight;
					var fromLeft = windowWidth;
					var fromTop = windowHeight;
					var flag = 0;
					if(checkPosLeft >= screenWindowWidth)
					{
						fromLeft = fromLeft - (rightClickMenuWidth*2);
						flag = 1;
					}
					if(checkPosTop >= screenwindowHeight)
					{
						fromTop = fromTop - rightClickMenuHeight;
						flag = 2;
					}
					$("#RightMenu_New").css({'left':fromLeft+'px','top':fromTop+'px'});
					if(flag == 1)
					{	
						$("#RightMenu_New").show('slide', {direction: 'right'}, 200);
					}
					else
					{
						$("#RightMenu_New").show(400);			   
					}
		});
		
		
		$(".recycleIconClass").live('rightclick',function(){
														  alert("rightclick");
														  });
//****************RIGHT CLICK****************************************			
		

		
		
});

function screen1(img,trys)
{
	document.getElementById('SrcImg').src ='images'+'/'+img;
	$("#gosaver").ready(function () {
	$("#gosaver").fadeTo("slow" , 1.0);
	});
	if(trys != "2")
	{
		//setTimeout("screen1('screen2.gif','2')",20000);
	}
}
function showTime()
{
	var Digital=new Date()
	var hours=Digital.getHours()
	var minutes=Digital.getMinutes()
	var seconds=Digital.getSeconds()
	var dn="AM"
	if (hours>12)
	{
		dn="PM"
		hours=hours-12
	}
	if(hours==0)
		hours=12
	if(minutes<=9)
		minutes="0"+minutes
	if(seconds<=9)
		seconds="0"+seconds
	var Time = hours+":"+minutes+":"+seconds+" "+dn;
	document.getElementById("clockSidebar").innerHTML = Time;
	setTimeout("showTime()",1000);
}



