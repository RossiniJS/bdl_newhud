$(document).ready(function(){
	window.addEventListener("message",function(event){
		
		if (event.data.hud == true){
			$(".allHud").show();
		}

		if (event.data.hud == false){
			$(".allHud").hide();
		}

		if (event.data.movie == true){
			$("#movieTop").css("display","block");
			$("#movieBottom").css("display","block");
		}

		if (event.data.movie == false){
			$("#movieTop").css("display","none");
			$("#movieBottom").css("display","none");
		}

		if (event.data.interact == true)  {
			$('#allScreen').fadeIn(200);
		}

		if (event.data.interact == false)  {
			$('#allScreen').fadeOut(200);
		}

		document.onkeyup = function(data){
			if (data.which == 27){
				$('#allScreen').fadeOut(200);
				$('body').removeClass("active");
				$.post('http://bdl_newhud/hideFocus', JSON.stringify({}));
			}
		}

		let cineToggle = document.getElementById("cineMode");
		let hudToggle = document.getElementById("hideHUD");
		let markToggle = document.getElementById("hideMark");
		let statusToggle = document.getElementById("hideAllStatus");
		let infoToggle = document.getElementById("hideAllInfo");
		if (cineToggle.checked == true) {
			$("#movieTop").css("display","block");
			$("#movieBottom").css("display","block");
		} 
		if (hudToggle.checked == true) {
			$(".allHud").hide();
		} 
		if (markToggle.checked == true) {
			$("#imgserver").hide();
		} else {
			$("#imgserver").show();
		}
		if (statusToggle.checked == true) {
			$('.hudBottomContainer').css('display','none');
		} else {
			$('.hudBottomContainer').css('display','block');
		}
		if (infoToggle.checked == true) {
			$('.topInfoContainer').css('display','none');
		} else {
			$('.topInfoContainer').css('display','block');
		}
		

		$(".infosBack").html("<b>"+ event.data.day +"</b>, <b>"+ event.data.month +"  :</b>  "+ event.data.street);

		if (event.data.talking == true){
			$(".voiceDisplay1").css("background","rgba(255,255,255,0.9)");
			$(".voiceDisplay2").css("background","rgba(255,255,255,0.9)");
			$(".voiceDisplay3").css("background","rgba(255,255,255,0.9)");
		} else {
			$(".voiceDisplay1").css("background","rgba(255,255,255,0.3)");
			$(".voiceDisplay2").css("background","rgba(255,255,255,0.3)");
			$(".voiceDisplay3").css("background","rgba(255,255,255,0.3)");
		}

		if (event.data.voice == 1){
			$(".voiceDisplay1").css("display","none");
			$(".voiceDisplay1").css("margin-top","0");
			$(".voiceDisplay2").css("display","none");
			$(".voiceDisplay2").css("margin-top","0");
			$(".voiceDisplay3").css("display","block");
			$(".voiceDisplay3").css("margin-top","19px");
		}

		if (event.data.voice == 2){
			$(".voiceDisplay1").css("display","none");
			$(".voiceDisplay1").css("margin-top","0");
			$(".voiceDisplay2").css("display","block");
			$(".voiceDisplay2").css("margin-top","10px");
			$(".voiceDisplay3").css("display","block");
			$(".voiceDisplay3").css("margin-top","3px");
		}

		if (event.data.voice == 3){
			$(".voiceDisplay1").css("display","block");
			$(".voiceDisplay1").css("margin-top","1px");
			$(".voiceDisplay2").css("display","block");
			$(".voiceDisplay2").css("margin-top","3px");
			$(".voiceDisplay3").css("display","block");
			$(".voiceDisplay3").css("margin-top","3px");
		}

		if (event.data.health <= 1){
			$(".healthDisplay").css("width","0");
		} else {
			$(".healthDisplay").css("width",event.data.health +"%");
		}

		if (event.data.armour == 0){
			$(".armourBack").css("display","block");
			$(".armourDisplay").css("width",event.data.armour +"%");
		} else {
			$(".armourBack").css("display","block");
			$(".armourDisplay").css("width",event.data.armour +"%");
		}

		$(".thirstDisplay").css("width",100-event.data.thirst +"%");
		$(".hungerDisplay").css("width",100-event.data.hunger +"%");
		$(".staminaDisplay").css("width",100-event.data.stamina +"%");
		$(".clockBack .hudDisplayText").html(event.data.hour +":"+ event.data.minute);

		if (event.data.car == true){
			
			$(".carContainer").fadeIn(750).css('right','20px');
			$("#randomcombustivel").css("height", event.data.fuel + "%" );
			$("#randomengine").css('height', Math.ceil((100 * (event.data.enginehealth / 1000))) + '%');
			
			$("#carDisplaySpeed").html(event.data.speed + " <br> <b><p>" + "</p></b>");
			if ( event.data.enginehealth > 600 ) {
				
				$("#randomengine").css('background-image', 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(1,255,0,0.5410539215686274) 0%, rgba(15,210,0,0.6418942577030813) 100%, rgba(0,212,255,1) 100%)');
			} else if ( event.data.enginehealth >= 350 ) {
				
				$("#randomengine").css('background-image', 'linear-gradient(to bottom,rgb(255, 153, 0), rgb(255, 153, 51))');
			} else if ( event.data.enginehealth <= 350 ) {
				
				$("#randomengine").css('background-image', 'linear-gradient(to right,rgb(255,0, 0), rgb(255, 25, 25))');
			}
			
		} else {
			$(".carContainer").css('right','-375px');
      		$(".carContainer").fadeOut(750);
		}
		if (event.data.seatbelt == true){
			$('.cinto-icongreen').css('display', 'block');    
      		$('.cinto-iconred').css('display', 'none'); 
		}
		else {
			$('.cinto-icongreen').css('display', 'none');
      		$('.cinto-iconred').css('display', 'block');
		}
		if (event.data.farol == 0){
			$('.farol-desligado').css('display', 'block');    
			$('.farol-ligado').css('display', 'none');
			$('.farol-alto').css('display', 'none'); 
		}
		else if (event.data.farol == 1) {
			$('.farol-desligado').css('display', 'none');    
			$('.farol-ligado').css('display', 'block');
			$('.farol-alto').css('display', 'none'); 
		} else if (event.data.farol == 2) {
			$('.farol-desligado').css('display', 'none');    
			$('.farol-ligado').css('display', 'none');
			$('.farol-alto').css('display', 'block'); 
		}
	})
});