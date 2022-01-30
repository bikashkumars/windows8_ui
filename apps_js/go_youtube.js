$(document).ready(function(){
	
	     $(".video_thumb").click(function(){
	 
						
						var IdIs = $(this).attr('id');
						var mainIdArray = IdIs.split('_');
						var IdOfHiddenDiv = 'flip_div_'+mainIdArray[2];
						var newContents = '';
						//document.getElementById(IdOfHiddenDiv).innerHTML;
						$(this).flip({
								direction:'rl',
								color:'#FFFFFF',
								content: newContents ,//(new Date()).getTime(),$this.attr("title")
								//onBefore: function(){$("this").show()}
								onEnd: function(){
									//$(this).css("background-image", "url(apps_images/youtube_thumb_flip.png)");
									//$(this).removeClass('video_thumb').addClass('video_thumb_click');
									//document.getElementById(IdIs).style.backgroundImage = '../apps_images/youtube_thumb_flip.png';
								}

							})
								
		})
		
		var myWidth  = $(window).width();
		var myHeight = $(window).height();
		
		document.getElementById('sidebar').style.top = (myHeight-105)+"px";
	    
										   


		$(".desc_icon").click(function(){
					var idDiv = $(this).attr('id');
					var idArray = idDiv.split("_");
					var newId = 'desc_'+idArray[2];
							   
					$('#'+newId).animate({height:'toggle'},1500,function(){
									if(document.getElementById(newId).style.display == 'block')
									{
											$('#'+newId).show('pulsate',500);
									}
																		 });
					
					})
		
		$(".comment_icon").click(function(){
					var idDiv = $(this).attr('id');
					var idArray = idDiv.split("_");
					var newId = 'comment_'+idArray[2];	   
					$('#'+newId).animate({height:'toggle'},1000);	  
					})
		


});